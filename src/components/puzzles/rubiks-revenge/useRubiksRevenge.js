import { useRef, useState, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import usePuzzleStore from '../../../store/puzzleStore';
import { generateScramble, easeInOutCubic } from '../../../utils/cubeHelpers';

const SIZE = 4;
const CUBIE_SIZE = 0.95;
const GAP = 0.05;

const useRubiksRevenge = () => {
  const cubiesRef = useRef([]);
  const groupRef = useRef();
  const rotatingLayerRef = useRef(null);
  const [isRotating, setIsRotating] = useState(false);
  const animationRef = useRef(null);
  
  const animationPhase = usePuzzleStore((state) => state.animationPhase);
  const savePuzzleState = usePuzzleStore((state) => state.savePuzzleState);
  const getPuzzleState = usePuzzleStore((state) => state.getPuzzleState);

  const initializeCubies = useCallback(() => {
    const cubies = [];
    const half = (SIZE - 1) / 2;

    for (let x = 0; x < SIZE; x++) {
      for (let y = 0; y < SIZE; y++) {
        for (let z = 0; z < SIZE; z++) {
          // Skip internal cubies (not visible)
          if (x > 0 && x < SIZE - 1 && y > 0 && y < SIZE - 1 && z > 0 && z < SIZE - 1) continue;

          const position = new THREE.Vector3(
            (x - half) * (CUBIE_SIZE + GAP),
            (y - half) * (CUBIE_SIZE + GAP),
            (z - half) * (CUBIE_SIZE + GAP)
          );
          cubies.push({
            id: `${x}-${y}-${z}`,
            position: position.clone(),
            originalPosition: new THREE.Vector3(x - half, y - half, z - half),
            quaternion: new THREE.Quaternion(),
          });
        }
      }
    }

    return cubies;
  }, []);

  const [cubies, setCubies] = useState(() => {
    const savedState = getPuzzleState('rubiks-revenge');
    return savedState || initializeCubies();
  });

  useEffect(() => {
    if (animationPhase === 'scrambling') {
      const scramble = generateScramble(SIZE, 30);
      applyScramble(scramble);
    } else if (animationPhase === 'resetting') {
      setCubies(initializeCubies());
    }
  }, [animationPhase]);

  useEffect(() => {
    savePuzzleState('rubiks-revenge', cubies);
  }, [cubies, savePuzzleState]);

  const getCubiesInLayer = useCallback((axis, layerIndex) => {
    const half = (SIZE - 1) / 2;
    return cubies.filter((cubie) => {
      const pos = cubie.originalPosition.clone().applyQuaternion(cubie.quaternion);
      const coord = Math.round(pos[axis] + half);
      return coord === layerIndex;
    });
  }, [cubies]);

  const rotateLayer = useCallback((axis, layerIndex, direction, duration = 300) => {
    if (isRotating) return Promise.resolve();

    return new Promise((resolve) => {
      setIsRotating(true);
      const layerCubies = getCubiesInLayer(axis, layerIndex);
      const startTime = Date.now();
      const targetAngle = (Math.PI / 2) * direction;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        const currentAngle = targetAngle * easedProgress;

        if (progress < 1) {
          rotatingLayerRef.current = { axis, layerIndex, angle: currentAngle, cubies: layerCubies };
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCubies((prevCubies) => {
            return prevCubies.map((cubie) => {
              const isInLayer = layerCubies.some((lc) => lc.id === cubie.id);
              if (isInLayer) {
                const rotationQuat = new THREE.Quaternion();
                const axisVector = new THREE.Vector3(
                  axis === 'x' ? 1 : 0,
                  axis === 'y' ? 1 : 0,
                  axis === 'z' ? 1 : 0
                );
                rotationQuat.setFromAxisAngle(axisVector, targetAngle);
                
                const newQuaternion = rotationQuat.multiply(cubie.quaternion);
                const newPosition = cubie.position.clone().applyQuaternion(rotationQuat);

                return {
                  ...cubie,
                  position: newPosition,
                  quaternion: newQuaternion,
                };
              }
              return cubie;
            });
          });

          rotatingLayerRef.current = null;
          setIsRotating(false);
          resolve();
        }
      };

      animate();
    });
  }, [isRotating, getCubiesInLayer]);

  const applyScramble = useCallback(async (scramble) => {
    for (const move of scramble) {
      await rotateLayer(move.axis, move.layer, move.direction, 25);
    }
  }, [rotateLayer]);

  const handleFaceClick = useCallback((intersect, dragDelta) => {
    if (isRotating || !intersect) return;

    const face = intersect.face;
    const point = intersect.point;
    const normal = face.normal.clone().transformDirection(intersect.object.matrixWorld);

    let axis, layerIndex, direction;

    if (Math.abs(normal.x) > 0.9) {
      if (Math.abs(dragDelta.y) > Math.abs(dragDelta.x)) {
        axis = 'z';
        direction = normal.x > 0 ? (dragDelta.y > 0 ? -1 : 1) : (dragDelta.y > 0 ? 1 : -1);
      } else {
        axis = 'y';
        direction = normal.x > 0 ? (dragDelta.x > 0 ? 1 : -1) : (dragDelta.x > 0 ? -1 : 1);
      }
    } else if (Math.abs(normal.y) > 0.9) {
      if (Math.abs(dragDelta.x) > Math.abs(dragDelta.y)) {
        axis = 'z';
        direction = normal.y > 0 ? (dragDelta.x > 0 ? 1 : -1) : (dragDelta.x > 0 ? -1 : 1);
      } else {
        axis = 'x';
        direction = normal.y > 0 ? (dragDelta.y > 0 ? -1 : 1) : (dragDelta.y > 0 ? 1 : -1);
      }
    } else {
      if (Math.abs(dragDelta.x) > Math.abs(dragDelta.y)) {
        axis = 'y';
        direction = normal.z > 0 ? (dragDelta.x > 0 ? 1 : -1) : (dragDelta.x > 0 ? -1 : 1);
      } else {
        axis = 'x';
        direction = normal.z > 0 ? (dragDelta.y > 0 ? 1 : -1) : (dragDelta.y > 0 ? -1 : 1);
      }
    }

    const half = (SIZE - 1) / 2;
    layerIndex = Math.round(point[axis] / (CUBIE_SIZE + GAP) + half);
    layerIndex = Math.max(0, Math.min(SIZE - 1, layerIndex));

    rotateLayer(axis, layerIndex, direction);
  }, [isRotating, rotateLayer]);

  return {
    cubies,
    cubiesRef,
    groupRef,
    rotatingLayerRef,
    isRotating,
    handleFaceClick,
    size: SIZE,
    cubieSize: CUBIE_SIZE,
    gap: GAP,
  };
};

export default useRubiksRevenge;
