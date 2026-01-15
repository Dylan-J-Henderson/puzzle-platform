import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import usePuzzleStore from '../../store/puzzleStore';
import RubiksMini from '../puzzles/rubiks-mini/RubiksMini';
import RubiksCube from '../puzzles/rubiks-cube/RubiksCube';
import RubiksRevenge from '../puzzles/rubiks-revenge/RubiksRevenge';

const PuzzleWrapper = () => {
  const groupRef = useRef();
  const targetRotation = useRef({ x: Math.PI / 6, y: -Math.PI / 4 });
  const currentPuzzle = usePuzzleStore((state) => state.currentPuzzle);
  const animationPhase = usePuzzleStore((state) => state.animationPhase);
  const getPuzzleRotation = usePuzzleStore((state) => state.getPuzzleRotation);
  const savePuzzleRotation = usePuzzleStore((state) => state.savePuzzleRotation);
  const isAnimating = usePuzzleStore((state) => state.isAnimating);
  const scaleRef = useRef(1);
  const { camera, gl } = useThree();
  
  const isDragging = useRef(false);
  const previousPosition = useRef({ x: 0, y: 0 });
  const pinchStartDistance = useRef(null);
  const initialCameraZ = useRef(null);

  useEffect(() => {
    const savedRotation = getPuzzleRotation(currentPuzzle);
    targetRotation.current = { ...savedRotation };
  }, [currentPuzzle, getPuzzleRotation]);

  // Handle joystick events
  useEffect(() => {
    const handleJoystick = (e) => {
      if (isAnimating) return;
      const data = e.detail;
      if (data.force > 0) {
        const angle = data.angle.radian;
        const force = Math.min(data.force, 1);
        targetRotation.current.y += Math.cos(angle) * force * 0.03;
        targetRotation.current.x -= Math.sin(angle) * force * 0.03;
        targetRotation.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotation.current.x));
        savePuzzleRotation(currentPuzzle, { ...targetRotation.current });
      }
    };

    window.addEventListener('joystick-move', handleJoystick);
    return () => window.removeEventListener('joystick-move', handleJoystick);
  }, [currentPuzzle, savePuzzleRotation, isAnimating]);

  // Mouse and touch handlers
  useEffect(() => {
    const canvas = gl.domElement;

    const handleContextMenu = (e) => e.preventDefault();

    const handleMouseDown = (e) => {
      if (e.button === 2) {
        isDragging.current = true;
        previousPosition.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        // Pinch to zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchStartDistance.current = Math.sqrt(dx * dx + dy * dy);
        initialCameraZ.current = camera.position.z;
      } else if (e.touches.length === 1) {
        // Check if touch is in the joystick area (bottom left)
        const touch = e.touches[0];
        if (touch.clientX < 150 && touch.clientY > window.innerHeight - 180) {
          return; // Let joystick handle it
        }
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current || isAnimating) return;

      const deltaX = e.clientX - previousPosition.current.x;
      const deltaY = e.clientY - previousPosition.current.y;

      targetRotation.current.y += deltaX * 0.01;
      targetRotation.current.x += deltaY * 0.01;
      targetRotation.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotation.current.x));

      previousPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e) => {
      if (isAnimating) return;
      
      if (e.touches.length === 2 && pinchStartDistance.current !== null) {
        // Pinch to zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const currentDistance = Math.sqrt(dx * dx + dy * dy);
        const scale = pinchStartDistance.current / currentDistance;
        const newZ = initialCameraZ.current * scale;
        camera.position.z = Math.max(3, Math.min(15, newZ));
      }
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        savePuzzleRotation(currentPuzzle, { ...targetRotation.current });
      }
    };

    const handleTouchEnd = () => {
      pinchStartDistance.current = null;
      initialCameraZ.current = null;
    };

    const handleWheel = (e) => {
      if (isAnimating) return;
      const zoomSpeed = 0.001;
      const newZ = camera.position.z + e.deltaY * zoomSpeed * camera.position.z;
      camera.position.z = Math.max(3, Math.min(15, newZ));
    };

    canvas.addEventListener('contextmenu', handleContextMenu);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);
    canvas.addEventListener('wheel', handleWheel, { passive: true });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);

    return () => {
      canvas.removeEventListener('contextmenu', handleContextMenu);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      canvas.removeEventListener('wheel', handleWheel);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [gl, camera, currentPuzzle, savePuzzleRotation, isAnimating]);

  useFrame(() => {
    if (groupRef.current) {
      // Smooth rotation interpolation
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.1;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.1;

      // Handle scale animations
      let targetScale = 1;
      if (animationPhase === 'shrinking') {
        targetScale = 0.001;
      } else if (animationPhase === 'growing' || animationPhase === 'idle') {
        targetScale = 1;
      } else if (animationPhase === 'scrambling' || animationPhase === 'resetting') {
        targetScale = 0.001;
      }

      scaleRef.current += (targetScale - scaleRef.current) * 0.15;
      groupRef.current.scale.setScalar(scaleRef.current);
    }
  });

  const renderPuzzle = () => {
    switch (currentPuzzle) {
      case 'rubiks-mini':
        return <RubiksMini />;
      case 'rubiks-cube':
        return <RubiksCube />;
      case 'rubiks-revenge':
        return <RubiksRevenge />;
      default:
        return <RubiksCube />;
    }
  };

  return (
    <group ref={groupRef}>
      {renderPuzzle()}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} />
      <pointLight position={[0, 10, 0]} intensity={0.3} />
      <Suspense fallback={null}>
        <PuzzleWrapper />
      </Suspense>
    </>
  );
};

const PuzzleScene = () => {
  return (
    <div className="absolute inset-0 bg-background">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#000000' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default PuzzleScene;
