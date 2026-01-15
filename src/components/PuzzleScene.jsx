import { useRef, useState, useCallback, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import RubiksCube from './puzzles/RubiksCube';
import { getFaceLayer } from '../utils/rubiksUtils';

function PuzzleController({ 
  cubies, 
  size, 
  onRotateLayer, 
  puzzleGroupRef,
  orbitControlsRef,
  isTransitioning 
}) {
  const { camera, gl, raycaster } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const [rotatingLayer, setRotatingLayer] = useState(null);
  const [layerRotation, setLayerRotation] = useState(0);
  
  const dragStart = useRef(null);
  const rotationAxis = useRef(null);
  const screenDragDirection = useRef(null);
  const hitPoint = useRef(new THREE.Vector3());

  const SNAP_THRESHOLD = Math.PI / 4.5; // ~40 degrees
  const DRAG_SENSITIVITY = 0.008;

  // Get the two potential rotation axes based on face normal
  const getRotationAxes = (faceIndex) => {
    // faceIndex: 0=+X, 1=-X, 2=+Y, 3=-Y, 4=+Z, 5=-Z
    const normalAxis = Math.floor(faceIndex / 2); // 0=X, 1=Y, 2=Z
    
    const axes = ['x', 'y', 'z'];
    const axis1 = axes[(normalAxis + 1) % 3];
    const axis2 = axes[(normalAxis + 2) % 3];
    
    return [axis1, axis2];
  };

  // Project world direction to screen space
  const worldToScreen = (worldPoint, direction, camera) => {
    const point1 = worldPoint.clone();
    const point2 = worldPoint.clone().add(direction);
    
    point1.project(camera);
    point2.project(camera);
    
    return new THREE.Vector2(point2.x - point1.x, point2.y - point1.y).normalize();
  };

  const handlePointerDown = useCallback((e, position, mesh) => {
    if (isTransitioning) return;
    if (e.button !== undefined && e.button !== 0) return;
    
    e.stopPropagation();
    
    if (orbitControlsRef.current) {
      orbitControlsRef.current.enabled = false;
    }
    
    const faceIndex = Math.floor(e.faceIndex / 2);
    const [axis1, axis2] = getRotationAxes(faceIndex);
    
    // Get world position of hit point
    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);
    hitPoint.current.copy(e.point || worldPos);
    
    // Calculate screen-space directions for each potential rotation axis
    const cubeScale = 2.2 / size;
    
    const dir1 = new THREE.Vector3(
      axis1 === 'x' ? 1 : 0,
      axis1 === 'y' ? 1 : 0,
      axis1 === 'z' ? 1 : 0
    ).multiplyScalar(cubeScale);
    
    const dir2 = new THREE.Vector3(
      axis2 === 'x' ? 1 : 0,
      axis2 === 'y' ? 1 : 0,
      axis2 === 'z' ? 1 : 0
    ).multiplyScalar(cubeScale);
    
    const screenDir1 = worldToScreen(hitPoint.current, dir1, camera);
    const screenDir2 = worldToScreen(hitPoint.current, dir2, camera);
    
    setIsDragging(true);
    setLayerRotation(0);
    
    dragStart.current = {
      clientX: e.clientX || e.nativeEvent?.clientX,
      clientY: e.clientY || e.nativeEvent?.clientY,
      position: position,
      faceIndex: faceIndex,
      axis1, axis2,
      screenDir1, screenDir2,
      axisChosen: false
    };
    
  }, [size, orbitControlsRef, isTransitioning, camera]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging || !dragStart.current) return;
    
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
    const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);
    
    if (clientX === undefined || clientY === undefined) return;
    
    const dx = clientX - dragStart.current.clientX;
    const dy = clientY - dragStart.current.clientY;
    
    // Normalize screen drag
    const rect = gl.domElement.getBoundingClientRect();
    const dragVec = new THREE.Vector2(
      dx / rect.width * 2,
      -dy / rect.height * 2
    );
    
    const { axis1, axis2, screenDir1, screenDir2, position } = dragStart.current;
    
    // Choose axis based on which screen direction aligns better with drag
    if (!dragStart.current.axisChosen && dragVec.length() > 0.02) {
      const dot1 = Math.abs(dragVec.dot(screenDir1));
      const dot2 = Math.abs(dragVec.dot(screenDir2));
      
      // The axis with LESS alignment becomes the rotation axis
      // (we rotate AROUND an axis, not ALONG it)
      let chosenAxis, dragDir;
      if (dot1 > dot2) {
        chosenAxis = axis2; // Rotate around axis2 when dragging along axis1
        dragDir = screenDir1;
      } else {
        chosenAxis = axis1; // Rotate around axis1 when dragging along axis2
        dragDir = screenDir2;
      }
      
      dragStart.current.axisChosen = true;
      rotationAxis.current = chosenAxis;
      screenDragDirection.current = dragDir;
      
      // Determine layer
      const offset = (size - 1) / 2;
      const layer = Math.round(position[chosenAxis] + offset);
      
      setRotatingLayer({ axis: chosenAxis, layer });
    }
    
    if (!rotationAxis.current || !screenDragDirection.current) return;
    
    // Calculate rotation angle from drag distance along the chosen direction
    const projectedDrag = dragVec.dot(screenDragDirection.current);
    
    // Determine rotation direction based on camera and face orientation
    const cameraDir = new THREE.Vector3();
    camera.getWorldDirection(cameraDir);
    
    // Calculate sign correction based on camera position relative to face
    const faceIndex = dragStart.current.faceIndex;
    const faceNormals = [
      new THREE.Vector3(1, 0, 0),   // +X
      new THREE.Vector3(-1, 0, 0),  // -X
      new THREE.Vector3(0, 1, 0),   // +Y
      new THREE.Vector3(0, -1, 0),  // -Y
      new THREE.Vector3(0, 0, 1),   // +Z
      new THREE.Vector3(0, 0, -1)   // -Z
    ];
    const faceNormal = faceNormals[faceIndex];
    
    // Cross product of face normal and rotation axis gives expected rotation sense
    const rotAxisVec = new THREE.Vector3(
      rotationAxis.current === 'x' ? 1 : 0,
      rotationAxis.current === 'y' ? 1 : 0,
      rotationAxis.current === 'z' ? 1 : 0
    );
    
    const expectedDir = new THREE.Vector3().crossVectors(faceNormal, rotAxisVec);
    const screenExpectedDir = worldToScreen(hitPoint.current, expectedDir, camera);
    
    // Sign based on alignment
    const signCorrection = Math.sign(screenDragDirection.current.dot(screenExpectedDir) || 1);
    
    const angle = projectedDrag * 3 * signCorrection;
    setLayerRotation(angle);
    
  }, [isDragging, rotatingLayer, camera, gl, size]);

  const handlePointerUp = useCallback(() => {
    if (!isDragging) {
      if (orbitControlsRef.current) {
        orbitControlsRef.current.enabled = true;
      }
      return;
    }
    
    const currentRotation = layerRotation;
    const layer = rotatingLayer;
    
    // Reset drag state
    dragStart.current = null;
    rotationAxis.current = null;
    screenDragDirection.current = null;
    
    if (!layer) {
      setIsDragging(false);
      if (orbitControlsRef.current) {
        orbitControlsRef.current.enabled = true;
      }
      return;
    }
    
    // Determine snap target
    const normalizedAngle = currentRotation % (Math.PI * 2);
    const snapTo90 = Math.abs(normalizedAngle) > SNAP_THRESHOLD;
    
    let targetAngle = 0;
    let direction = 0;
    
    if (snapTo90) {
      direction = normalizedAngle > 0 ? 1 : -1;
      targetAngle = (Math.PI / 2) * direction;
    }
    
    gsap.to({ rotation: currentRotation }, {
      rotation: targetAngle,
      duration: 0.2,
      ease: snapTo90 ? 'back.out(1.4)' : 'power2.out',
      onUpdate: function() {
        setLayerRotation(this.targets()[0].rotation);
      },
      onComplete: () => {
        if (snapTo90 && layer) {
          onRotateLayer(layer.axis, layer.layer, direction);
        }
        setRotatingLayer(null);
        setLayerRotation(0);
        setIsDragging(false);
        
        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = true;
        }
      }
    });
    
  }, [isDragging, rotatingLayer, layerRotation, onRotateLayer, orbitControlsRef]);

  useEffect(() => {
    const element = gl.domElement;
    
    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('pointerup', handlePointerUp);
    element.addEventListener('pointerleave', handlePointerUp);
    element.addEventListener('touchmove', handlePointerMove, { passive: false });
    element.addEventListener('touchend', handlePointerUp);
    
    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerup', handlePointerUp);
      element.removeEventListener('pointerleave', handlePointerUp);
      element.removeEventListener('touchmove', handlePointerMove);
      element.removeEventListener('touchend', handlePointerUp);
    };
  }, [gl, handlePointerMove, handlePointerUp]);

  return (
    <RubiksCube
      cubies={cubies}
      size={size}
      onCubiePointerDown={handlePointerDown}
      rotatingLayer={rotatingLayer}
      layerRotation={layerRotation}
    />
  );
}

function Scene({ 
  cubies, 
  size, 
  onRotateLayer, 
  scale, 
  isTransitioning 
}) {
  const puzzleGroupRef = useRef();
  const orbitControlsRef = useRef();

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <pointLight position={[0, 5, 0]} intensity={0.4} />
      
      <Environment preset="city" />
      
      <group ref={puzzleGroupRef} scale={[scale, scale, scale]}>
        <PuzzleController
          cubies={cubies}
          size={size}
          onRotateLayer={onRotateLayer}
          puzzleGroupRef={puzzleGroupRef}
          orbitControlsRef={orbitControlsRef}
          isTransitioning={isTransitioning}
        />
      </group>
      
      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={10}
        mouseButtons={{
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.ROTATE
        }}
        touches={{
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_ROTATE
        }}
      />
    </>
  );
}

export default function PuzzleScene({ 
  cubies, 
  size, 
  onRotateLayer, 
  transitionState 
}) {
  const [scale, setScale] = useState(1);
  const isTransitioning = transitionState !== 'idle';

  useEffect(() => {
    if (transitionState === 'scaling-out') {
      gsap.to({ s: 1 }, {
        s: 0,
        duration: 0.35,
        ease: 'power2.in',
        onUpdate: function() {
          setScale(this.targets()[0].s);
        }
      });
    } else if (transitionState === 'scaling-in') {
      gsap.to({ s: 0 }, {
        s: 1,
        duration: 0.45,
        ease: 'back.out(1.7)',
        onUpdate: function() {
          setScale(this.targets()[0].s);
        }
      });
    }
  }, [transitionState]);

  return (
    <Canvas
      camera={{ position: [4, 4, 4], fov: 45 }}
      gl={{ antialias: true, alpha: false }}
      style={{ background: '#0a0a0a' }}
    >
      <color attach="background" args={['#0a0a0a']} />
      <Scene
        cubies={cubies}
        size={size}
        onRotateLayer={onRotateLayer}
        scale={scale}
        isTransitioning={isTransitioning}
      />
    </Canvas>
  );
}
