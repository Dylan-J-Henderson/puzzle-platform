import { useState, useCallback, useRef } from 'react';
import { generateCubiePositions, generateScramble, rotatePosition } from '../utils/rubiksUtils';

export function useRubiksPuzzle(initialSize = 3) {
  const [size, setSize] = useState(initialSize);
  const [cubies, setCubies] = useState(() => generateCubiePositions(initialSize));
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionState, setTransitionState] = useState('idle'); // idle, scaling-out, scaling-in
  const moveQueue = useRef([]);
  const processingRef = useRef(false);

  const resetPuzzle = useCallback(() => {
    setCubies(generateCubiePositions(size));
  }, [size]);

  const changePuzzleSize = useCallback((newSize) => {
    setSize(newSize);
    setCubies(generateCubiePositions(newSize));
  }, []);

  const applyMove = useCallback((axis, layer, direction) => {
    const angle = (Math.PI / 2) * direction;
    const offset = (size - 1) / 2;
    
    setCubies(prevCubies => {
      return prevCubies.map(cubie => {
        const coord = cubie[axis];
        const targetLayer = layer - offset;
        
        if (Math.abs(coord - targetLayer) < 0.1) {
          const newPos = rotatePosition(cubie, axis, angle);
          return {
            ...cubie,
            x: Math.round(newPos.x * 2) / 2,
            y: Math.round(newPos.y * 2) / 2,
            z: Math.round(newPos.z * 2) / 2
          };
        }
        return cubie;
      });
    });
  }, [size]);

  const processQueue = useCallback(async () => {
    if (processingRef.current || moveQueue.current.length === 0) return;
    
    processingRef.current = true;
    setIsAnimating(true);
    
    while (moveQueue.current.length > 0) {
      const move = moveQueue.current.shift();
      applyMove(move.axis, move.layer, move.direction);
      await new Promise(resolve => setTimeout(resolve, 30));
    }
    
    processingRef.current = false;
    setIsAnimating(false);
  }, [applyMove]);

  const scramble = useCallback(() => {
    const moves = generateScramble(size, 20 + Math.floor(Math.random() * 6));
    moveQueue.current = moves;
    processQueue();
  }, [size, processQueue]);

  const rotateLayer = useCallback((axis, layer, direction) => {
    if (isAnimating) return;
    applyMove(axis, layer, direction);
  }, [isAnimating, applyMove]);

  return {
    size,
    cubies,
    isAnimating,
    transitionState,
    setTransitionState,
    resetPuzzle,
    changePuzzleSize,
    scramble,
    rotateLayer,
    applyMove
  };
}
