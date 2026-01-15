import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useRubiksRevenge from './useRubiksRevenge';
import Cubie from '../../common/Cubie';
import { createCubieColors } from '../../../utils/cubeHelpers';

const RubiksRevenge = () => {
  const { cubies, groupRef, handleFaceClick, size, cubieSize, rotatingLayerRef } = useRubiksRevenge();
  const dragStartRef = useRef(null);
  const intersectRef = useRef(null);

  const handlePointerDown = (event) => {
    event.stopPropagation();
    dragStartRef.current = { x: event.clientX, y: event.clientY };
    intersectRef.current = event;
  };

  const handlePointerUp = (event) => {
    if (dragStartRef.current && intersectRef.current) {
      const dragDelta = {
        x: event.clientX - dragStartRef.current.x,
        y: event.clientY - dragStartRef.current.y,
      };

      const minDrag = 10;
      if (Math.abs(dragDelta.x) > minDrag || Math.abs(dragDelta.y) > minDrag) {
        handleFaceClick(intersectRef.current, dragDelta);
      }
    }
    dragStartRef.current = null;
    intersectRef.current = null;
  };

  useFrame(() => {
    if (rotatingLayerRef.current && groupRef.current) {
      const { axis, angle, cubies: layerCubies } = rotatingLayerRef.current;
      
      groupRef.current.children.forEach((child, index) => {
        const cubie = cubies[index];
        if (cubie && layerCubies.some((lc) => lc.id === cubie.id)) {
          const rotationQuat = new THREE.Quaternion();
          const axisVector = new THREE.Vector3(
            axis === 'x' ? 1 : 0,
            axis === 'y' ? 1 : 0,
            axis === 'z' ? 1 : 0
          );
          rotationQuat.setFromAxisAngle(axisVector, angle);
          
          const animatedPosition = cubie.position.clone().applyQuaternion(rotationQuat);
          child.position.copy(animatedPosition);
          
          const animatedQuaternion = rotationQuat.clone().multiply(cubie.quaternion);
          child.quaternion.copy(animatedQuaternion);
        }
      });
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {cubies.map((cubie) => {
        const half = (size - 1) / 2;
        const originalPos = cubie.originalPosition;
        const colors = createCubieColors(originalPos.x, originalPos.y, originalPos.z, size);

        return (
          <Cubie
            key={cubie.id}
            position={cubie.position}
            quaternion={cubie.quaternion}
            cubieSize={cubieSize}
            colors={colors}
            onPointerDown={handlePointerDown}
          />
        );
      })}
    </group>
  );
};

export default RubiksRevenge;
