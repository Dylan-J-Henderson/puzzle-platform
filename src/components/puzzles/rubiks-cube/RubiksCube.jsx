// src/components/puzzles/rubiks-cube/RubiksCube.jsx
import React, { useEffect } from 'react';
import Viewport from '../../common/Viewport';
import MoveHistory from '../../common/MoveHistory';
import TimerDisplay from '../../common/TimerDisplay';
import RubiksCubeControls from './RubiksCubeControls';
import { useCubeState } from './useCubeState';
import { useTimer, formatTime } from '../../../hooks/useTimer';

const RubiksCube = () => {
  const {
    scene,
    moveHistory,
    isSolved,
    isScrambling,
    isResetting,
    handleMove,
    scramble,
    reset,
  } = useCubeState();

  const timer = useTimer();

  // Stop timer when solved
  useEffect(() => {
    if (isSolved && timer.isRunning) {
      timer.stop();
    }
  }, [isSolved, timer.isRunning]);

  // Start timer on first move
  const handleMoveWithTimer = (move) => {
    if (!timer.isRunning && moveHistory.length === 0 && !isSolved) {
      timer.start();
    }
    handleMove(move);
  };

  const handleScramble = () => {
    timer.reset();
    scramble();
  };

  const handleReset = () => {
    timer.reset();
    reset();
  };

  const canStartTimer = !isSolved && moveHistory.length === 0;

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex relative overflow-hidden">
      <MoveHistory moves={moveHistory} />

      <div className="flex-1 relative" style={{ minHeight: '100vh' }}>
        <Viewport scene={scene} cameraDistance={5} />
      </div>
      
      <div className="w-80 bg-black bg-opacity-40 backdrop-blur-md p-6 overflow-y-auto">
        <div className="mb-6">
          <TimerDisplay
            elapsedTime={timer.elapsedTime}
            isRunning={timer.isRunning}
            onStart={timer.start}
            canStart={canStartTimer}
            disabledText={!isSolved ? 'Already Started' : 'Scramble First'}
          />
        </div>
        
        <RubiksCubeControls
          onMove={handleMoveWithTimer}
          onScramble={handleScramble}
          onReset={handleReset}
          isScrambling={isScrambling}
          isResetting={isResetting}
        />

        {isSolved && moveHistory.length > 0 && (
          <div className="mt-6 p-4 bg-green-900 bg-opacity-50 rounded-lg">
            <p className="text-green-200 text-center font-semibold">
              🎉 Solved!
            </p>
            <p className="text-green-300 text-center text-sm mt-1">
              Time: {formatTime(timer.elapsedTime)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RubiksCube;