import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { getCubieColors } from '../../utils/rubiksUtils';

function Cubie({ position, puzzleSize, cubeScale, onPointerDown }) {
  const meshRef = useRef();
  
  // Cubie size with small gap (0.95 of unit size for gap effect)
  const cubieSize = 0.93;
  
  const colors = useMemo(() => {
    return getCubieColors(position, puzzleSize);
  }, [position, puzzleSize]);

  const materials = useMemo(() => {
    return colors.map(color => 
      new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.05,
        metalness: 0.3,
        envMapIntensity: 1.5
      })
    );
  }, [colors]);

  const geometry = useMemo(() => {
    return new THREE.BoxGeometry(cubieSize, cubieSize, cubieSize);
  }, [cubieSize]);

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={materials}
      position={[position.x, position.y, position.z]}
      onPointerDown={(e) => {
        e.stopPropagation();
        if (onPointerDown) {
          onPointerDown(e, position, meshRef.current);
        }
      }}
    />
  );
}

export default function RubiksCube({ 
  cubies, 
  size, 
  onCubiePointerDown,
  rotatingLayer,
  layerRotation 
}) {
  const groupRef = useRef();
  const layerGroupRef = useRef();
  
  // Scale entire cube to consistent visual size
  const cubeScale = 2.2 / size;
  
  // Separate cubies into rotating and static
  const { rotatingCubies, staticCubies } = useMemo(() => {
    if (!rotatingLayer) {
      return { rotatingCubies: [], staticCubies: cubies };
    }
    
    const { axis, layer } = rotatingLayer;
    const offset = (size - 1) / 2;
    const targetCoord = layer - offset;
    
    const rotating = [];
    const static_ = [];
    
    cubies.forEach(cubie => {
      if (Math.abs(cubie[axis] - targetCoord) < 0.1) {
        rotating.push(cubie);
      } else {
        static_.push(cubie);
      }
    });
    
    return { rotatingCubies: rotating, staticCubies: static_ };
  }, [cubies, rotatingLayer, size]);

  // Calculate layer group rotation
  const layerGroupRotation = useMemo(() => {
    if (!rotatingLayer || layerRotation === 0) {
      return [0, 0, 0];
    }
    
    const { axis } = rotatingLayer;
    switch (axis) {
      case 'x': return [layerRotation, 0, 0];
      case 'y': return [0, layerRotation, 0];
      case 'z': return [0, 0, layerRotation];
      default: return [0, 0, 0];
    }
  }, [rotatingLayer, layerRotation]);

  return (
    <group ref={groupRef} scale={[cubeScale, cubeScale, cubeScale]}>
      {/* Static cubies */}
      {staticCubies.map((cubie, index) => (
        <Cubie
          key={`static-${index}-${cubie.x}-${cubie.y}-${cubie.z}`}
          position={cubie}
          puzzleSize={size}
          cubeScale={cubeScale}
          onPointerDown={onCubiePointerDown}
        />
      ))}
      
      {/* Rotating layer group */}
      {rotatingLayer && (
        <group ref={layerGroupRef} rotation={layerGroupRotation}>
          {rotatingCubies.map((cubie, index) => (
            <Cubie
              key={`rotating-${index}-${cubie.x}-${cubie.y}-${cubie.z}`}
              position={cubie}
              puzzleSize={size}
              cubeScale={cubeScale}
              onPointerDown={onCubiePointerDown}
            />
          ))}
        </group>
      )}
    </group>
  );
}
