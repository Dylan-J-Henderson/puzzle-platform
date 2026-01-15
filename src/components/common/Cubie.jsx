import React, { useMemo } from 'react';
import * as THREE from 'three';

const Cubie = ({ position, quaternion, cubieSize, colors, onPointerDown }) => {
  const materials = useMemo(() => {
    return colors.map((color) =>
      new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.3,
        metalness: 0.1,
      })
    );
  }, [colors]);

  const positionArray = useMemo(() => {
    if (position.toArray) return position.toArray();
    return [position.x, position.y, position.z];
  }, [position]);

  return (
    <mesh
      position={positionArray}
      quaternion={quaternion}
      onPointerDown={onPointerDown}
    >
      <boxGeometry args={[cubieSize, cubieSize, cubieSize]} />
      {materials.map((material, index) => (
        <primitive key={index} object={material} attach={`material-${index}`} />
      ))}
    </mesh>
  );
};

export default Cubie;
