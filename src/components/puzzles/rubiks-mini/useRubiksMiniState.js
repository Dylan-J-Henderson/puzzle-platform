// src/components/puzzles/rubiks-mini/useRubiksMiniState.js
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

export const useRubiksMiniState = () => {
  const cubeGroupRef = useRef(null);
  const cubiesRef = useRef([]);
  const [moveHistory, setMoveHistory] = useState([]);
  const [scene, setScene] = useState(null);
  const [isSolved, setIsSolved] = useState(true);
  const [isScrambling, setIsScrambling] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Initialize 2x2x2 cube
  useEffect(() => {
    const cubeGroup = new THREE.Group();
    cubeGroupRef.current = cubeGroup;

    const colors = [
      0xff0000, // Red - Right
      0xff8800, // Orange - Left
      0xffffff, // White - Top
      0xffff00, // Yellow - Bottom
      0x00ff00, // Green - Front
      0x0000ff, // Blue - Back
    ];

    const cubies = [];
    const size = 0.95;
    const gap = 0.05;
    const spacing = size + gap;

    // Create 2x2x2 grid of cubies (only corners)
    const positions = [-0.5, 0.5];
    for (let xi = 0; xi < positions.length; xi++) {
      for (let yi = 0; yi < positions.length; yi++) {
        for (let zi = 0; zi < positions.length; zi++) {
          const x = positions[xi];
          const y = positions[yi];
          const z = positions[zi];
          const geometry = new THREE.BoxGeometry(size, size, size);
          
          const materials = [
            new THREE.MeshLambertMaterial({ color: x === 0.5 ? colors[0] : 0x000000 }),
            new THREE.MeshLambertMaterial({ color: x === -0.5 ? colors[1] : 0x000000 }),
            new THREE.MeshLambertMaterial({ color: y === 0.5 ? colors[2] : 0x000000 }),
            new THREE.MeshLambertMaterial({ color: y === -0.5 ? colors[3] : 0x000000 }),
            new THREE.MeshLambertMaterial({ color: z === 0.5 ? colors[4] : 0x000000 }),
            new THREE.MeshLambertMaterial({ color: z === -0.5 ? colors[5] : 0x000000 }),
          ];

          const cubie = new THREE.Mesh(geometry, materials);
          cubie.position.set(x * spacing, y * spacing, z * spacing);
          cubie.userData = { initialPosition: { x, y, z } };
          cubie.castShadow = true;
          cubie.receiveShadow = true;
          
          const edges = new THREE.EdgesGeometry(geometry);
          const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })
          );
          cubie.add(line);

          cubeGroup.add(cubie);
          cubies.push(cubie);
        }
      }
    }

    cubiesRef.current = cubies;
    setScene(cubeGroup);
  }, []);

  const rotateFace = (axis, layer, direction) => {
    if (!cubeGroupRef.current) return;

    const rotationGroup = new THREE.Group();
    cubeGroupRef.current.add(rotationGroup);

    const cubesToRotate = cubiesRef.current.filter((cubie) => {
      const pos = cubie.position;
      const threshold = 0.25;
      
      if (axis === 'x') return Math.abs(pos.x - layer) < threshold;
      if (axis === 'y') return Math.abs(pos.y - layer) < threshold;
      if (axis === 'z') return Math.abs(pos.z - layer) < threshold;
      return false;
    });

    cubesToRotate.forEach((cubie) => {
      cubeGroupRef.current.remove(cubie);
      rotationGroup.add(cubie);
    });

    const angle = direction * Math.PI / 2;
    const duration = 300;
    const startTime = Date.now();

    const animateRotation = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentAngle = angle * progress;

      rotationGroup.rotation.set(0, 0, 0);
      if (axis === 'x') rotationGroup.rotation.x = currentAngle;
      if (axis === 'y') rotationGroup.rotation.y = currentAngle;
      if (axis === 'z') rotationGroup.rotation.z = currentAngle;

      if (progress < 1) {
        requestAnimationFrame(animateRotation);
      } else {
        rotationGroup.rotation.set(0, 0, 0);
        if (axis === 'x') rotationGroup.rotation.x = angle;
        if (axis === 'y') rotationGroup.rotation.y = angle;
        if (axis === 'z') rotationGroup.rotation.z = angle;
        
        rotationGroup.updateMatrixWorld();
        
        cubesToRotate.forEach((cubie) => {
          const localPos = cubie.position.clone();
          const localRot = cubie.rotation.clone();
          
          localPos.applyEuler(rotationGroup.rotation);
          
          const rotQuat = new THREE.Quaternion();
          rotQuat.setFromEuler(rotationGroup.rotation);
          
          const cubieQuat = new THREE.Quaternion();
          cubieQuat.setFromEuler(localRot);
          cubieQuat.premultiply(rotQuat);
          
          rotationGroup.remove(cubie);
          cubeGroupRef.current.add(cubie);
          
          cubie.position.copy(localPos);
          cubie.setRotationFromQuaternion(cubieQuat);
          
          cubie.position.x = Math.round(cubie.position.x * 100) / 100;
          cubie.position.y = Math.round(cubie.position.y * 100) / 100;
          cubie.position.z = Math.round(cubie.position.z * 100) / 100;
        });
        
        cubeGroupRef.current.remove(rotationGroup);
        checkIfSolved();
      }
    };

    animateRotation();
  };

  const instantRotate = (axis, layer, direction) => {
    if (!cubeGroupRef.current) return;

    const rotationGroup = new THREE.Group();
    cubeGroupRef.current.add(rotationGroup);

    const cubesToRotate = cubiesRef.current.filter((cubie) => {
      const pos = cubie.position;
      const threshold = 0.25;
      
      if (axis === 'x') return Math.abs(pos.x - layer) < threshold;
      if (axis === 'y') return Math.abs(pos.y - layer) < threshold;
      if (axis === 'z') return Math.abs(pos.z - layer) < threshold;
      return false;
    });

    cubesToRotate.forEach((cubie) => {
      cubeGroupRef.current.remove(cubie);
      rotationGroup.add(cubie);
    });

    const angle = direction * Math.PI / 2;
    
    if (axis === 'x') rotationGroup.rotation.x = angle;
    if (axis === 'y') rotationGroup.rotation.y = angle;
    if (axis === 'z') rotationGroup.rotation.z = angle;
    
    rotationGroup.updateMatrixWorld();
    
    cubesToRotate.forEach((cubie) => {
      const localPos = cubie.position.clone();
      const localRot = cubie.rotation.clone();
      
      localPos.applyEuler(rotationGroup.rotation);
      
      const rotQuat = new THREE.Quaternion();
      rotQuat.setFromEuler(rotationGroup.rotation);
      
      const cubieQuat = new THREE.Quaternion();
      cubieQuat.setFromEuler(localRot);
      cubieQuat.premultiply(rotQuat);
      
      rotationGroup.remove(cubie);
      cubeGroupRef.current.add(cubie);
      
      cubie.position.copy(localPos);
      cubie.setRotationFromQuaternion(cubieQuat);
      
      cubie.position.x = Math.round(cubie.position.x * 100) / 100;
      cubie.position.y = Math.round(cubie.position.y * 100) / 100;
      cubie.position.z = Math.round(cubie.position.z * 100) / 100;
    });
    
    cubeGroupRef.current.remove(rotationGroup);
  };

  const checkIfSolved = () => {
    if (!cubiesRef.current) return false;

    const size = 0.95;
    const gap = 0.05;
    const spacing = size + gap;

    const solved = cubiesRef.current.every((cubie) => {
      const initialPos = cubie.userData.initialPosition;
      const currentPos = cubie.position;
      const threshold = 0.1;

      const posMatch = 
        Math.abs(currentPos.x - (initialPos.x * spacing)) < threshold &&
        Math.abs(currentPos.y - (initialPos.y * spacing)) < threshold &&
        Math.abs(currentPos.z - (initialPos.z * spacing)) < threshold;

      const normalizeAngle = (angle) => {
        const normalized = angle % (Math.PI * 2);
        return normalized < 0 ? normalized + Math.PI * 2 : normalized;
      };

      const rotX = normalizeAngle(cubie.rotation.x);
      const rotY = normalizeAngle(cubie.rotation.y);
      const rotZ = normalizeAngle(cubie.rotation.z);

      const rotMatch = 
        (rotX < 0.1 || rotX > Math.PI * 2 - 0.1) &&
        (rotY < 0.1 || rotY > Math.PI * 2 - 0.1) &&
        (rotZ < 0.1 || rotZ > Math.PI * 2 - 0.1);

      return posMatch && rotMatch;
    });

    setIsSolved(solved);
    return solved;
  };

  const handleMove = (move) => {
    const size = 0.95;
    const gap = 0.05;
    const spacing = size + gap;
    const layer = 0.5 * spacing;
    
    const moves = {
      'R': () => rotateFace('x', layer, 1),
      "R'": () => rotateFace('x', layer, -1),
      'L': () => rotateFace('x', -layer, -1),
      "L'": () => rotateFace('x', -layer, 1),
      'U': () => rotateFace('y', layer, 1),
      "U'": () => rotateFace('y', layer, -1),
      'D': () => rotateFace('y', -layer, -1),
      "D'": () => rotateFace('y', -layer, 1),
      'F': () => rotateFace('z', layer, 1),
      "F'": () => rotateFace('z', layer, -1),
      'B': () => rotateFace('z', -layer, -1),
      "B'": () => rotateFace('z', -layer, 1),
    };

    if (moves[move]) {
      moves[move]();
      setMoveHistory((prev) => [...prev, move]);
    }
  };

  const scramble = () => {
    if (isScrambling || !cubeGroupRef.current) return;
    
    setIsScrambling(true);
    
    const size = 0.95;
    const gap = 0.05;
    const spacing = size + gap;
    const layer = 0.5 * spacing;
    
    const moves = ['R', "R'", 'L', "L'", 'U', "U'", 'D', "D'", 'F', "F'", 'B', "B'"];
    const scrambleSequence = [];
    
    for (let i = 0; i < 15; i++) {
      scrambleSequence.push(moves[Math.floor(Math.random() * moves.length)]);
    }

    const shrinkDuration = 300;
    const startTime = Date.now();
    const originalScale = 1;

    const animateShrink = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / shrinkDuration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const scale = originalScale * (1 - easeProgress);

      cubeGroupRef.current.scale.set(scale, scale, scale);

      if (progress < 1) {
        requestAnimationFrame(animateShrink);
      } else {
        scrambleSequence.forEach((move) => {
          const moveHandlers = {
            'R': () => instantRotate('x', layer, 1),
            "R'": () => instantRotate('x', layer, -1),
            'L': () => instantRotate('x', -layer, -1),
            "L'": () => instantRotate('x', -layer, 1),
            'U': () => instantRotate('y', layer, 1),
            "U'": () => instantRotate('y', layer, -1),
            'D': () => instantRotate('y', -layer, -1),
            "D'": () => instantRotate('y', -layer, 1),
            'F': () => instantRotate('z', layer, 1),
            "F'": () => instantRotate('z', layer, -1),
            'B': () => instantRotate('z', -layer, -1),
            "B'": () => instantRotate('z', -layer, 1),
          };
          if (moveHandlers[move]) {
            moveHandlers[move]();
          }
        });

        const expandStartTime = Date.now();
        const animateExpand = () => {
          const elapsed = Date.now() - expandStartTime;
          const progress = Math.min(elapsed / shrinkDuration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const scale = originalScale * easeProgress;

          cubeGroupRef.current.scale.set(scale, scale, scale);

          if (progress < 1) {
            requestAnimationFrame(animateExpand);
          } else {
            cubeGroupRef.current.scale.set(originalScale, originalScale, originalScale);
            setIsScrambling(false);
            setIsSolved(false);
          }
        };
        animateExpand();
      }
    };

    animateShrink();
    setMoveHistory([]);
  };

  const reset = () => {
    if (!cubeGroupRef.current) return;

    setIsResetting(true);

    const shrinkDuration = 300;
    const startTime = Date.now();
    const originalScale = 1;
    const size = 0.95;
    const gap = 0.05;
    const spacing = size + gap;

    const animateShrink = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / shrinkDuration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const scale = originalScale * (1 - easeProgress);

      cubeGroupRef.current.scale.set(scale, scale, scale);

      if (progress < 1) {
        requestAnimationFrame(animateShrink);
      } else {
        cubeGroupRef.current.rotation.set(0, 0, 0);
        
        cubiesRef.current.forEach((cubie) => {
          cubie.position.set(
            cubie.userData.initialPosition.x * spacing,
            cubie.userData.initialPosition.y * spacing,
            cubie.userData.initialPosition.z * spacing
          );
          cubie.rotation.set(0, 0, 0);
        });

        setMoveHistory([]);
        setIsSolved(true);

        const expandStartTime = Date.now();
        const animateExpand = () => {
          const elapsed = Date.now() - expandStartTime;
          const progress = Math.min(elapsed / shrinkDuration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const scale = originalScale * easeProgress;

          cubeGroupRef.current.scale.set(scale, scale, scale);

          if (progress < 1) {
            requestAnimationFrame(animateExpand);
          } else {
            cubeGroupRef.current.scale.set(originalScale, originalScale, originalScale);
            setIsResetting(false);
          }
        };
        animateExpand();
      }
    };

    animateShrink();
  };

  return {
    scene,
    moveHistory,
    isSolved,
    isScrambling,
    isResetting,
    handleMove,
    scramble,
    reset,
  };
};