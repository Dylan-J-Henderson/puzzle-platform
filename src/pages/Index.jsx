import { useState, useCallback, useEffect } from 'react';
import PuzzleScene from '../components/PuzzleScene';
import UIControls from '../components/UIControls';
import VirtualJoystick from '../components/VirtualJoystick';
import { useRubiksPuzzle } from '../hooks/useRubiksPuzzle';

export default function Index() {
  const {
    size,
    cubies,
    isAnimating,
    transitionState,
    setTransitionState,
    resetPuzzle,
    changePuzzleSize,
    scramble,
    rotateLayer
  } = useRubiksPuzzle(3);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile('ontouchstart' in window);
  }, []);

  const handleSizeChange = useCallback((newSize) => {
    if (newSize === size) return;
    
    setTransitionState('scaling-out');
    
    setTimeout(() => {
      changePuzzleSize(newSize);
      setTransitionState('scaling-in');
      
      setTimeout(() => {
        setTransitionState('idle');
      }, 500);
    }, 400);
  }, [size, changePuzzleSize, setTransitionState]);

  const handleScramble = useCallback(() => {
    setTransitionState('scaling-out');
    
    setTimeout(() => {
      scramble();
      setTransitionState('scaling-in');
      
      setTimeout(() => {
        setTransitionState('idle');
      }, 500);
    }, 400);
  }, [scramble, setTransitionState]);

  const handleReset = useCallback(() => {
    setTransitionState('scaling-out');
    
    setTimeout(() => {
      resetPuzzle();
      setTransitionState('scaling-in');
      
      setTimeout(() => {
        setTransitionState('idle');
      }, 500);
    }, 400);
  }, [resetPuzzle, setTransitionState]);

  const handleJoystickMove = useCallback((delta) => {
    // This would control camera orbit on mobile
    // Currently handled by OrbitControls with two-finger gesture
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-background">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <PuzzleScene
          cubies={cubies}
          size={size}
          onRotateLayer={rotateLayer}
          transitionState={transitionState}
        />
      </div>
      
      {/* UI Controls */}
      <UIControls
        currentSize={size}
        onSizeChange={handleSizeChange}
        onScramble={handleScramble}
        onReset={handleReset}
        isAnimating={isAnimating || transitionState !== 'idle'}
      />
      
      {/* Mobile Virtual Joystick */}
      <VirtualJoystick 
        onMove={handleJoystickMove} 
        visible={isMobile}
      />
      
    </div>
  );
}
