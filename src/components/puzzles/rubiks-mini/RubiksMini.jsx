// src/components/puzzles/rubiks-mini/RubiksMini.jsx
import React, { useEffect } from 'react';
import Viewport from '../../common/Viewport';
import MoveHistory from '../../common/MoveHistory';
import TimerDisplay from '../../common/TimerDisplay';
import RubiksMiniControls from './RubiksMiniControls';
import { useRubiksMiniState } from './useRubiksMiniState';
import { useTimer, formatTime } from '../../../hooks/useTimer';

const RubiksMini = () => {
  const {
    scene,
    moveHistory,
    isSolved,
    isScrambling,
    isResetting,
    handleMove,
    scramble,
    reset,
  } = useRubiksMiniState();

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
    <div className="w-full h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 flex relative overflow-hidden">
      <MoveHistory moves={moveHistory} />
      
      <div className="flex-1 relative" style={{ minHeight: '100vh' }}>
        <Viewport scene={scene} cameraDistance={4} />
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
        
        <RubiksMiniControls
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
            <p className="text-green-400 text-center text-xs mt-1">
              Moves: {moveHistory.length}
            </p>
          </div>
        )}

        <div className="mt-6 p-4 bg-cyan-900 bg-opacity-30 rounded-lg">
          <h4 className="text-white font-semibold mb-2 text-sm">2x2x2 Info</h4>
          <ul className="text-xs text-gray-300 space-y-1">
            <li>• 8 corner cubies only</li>
            <li>• No center or edge pieces</li>
            <li>• Also called Pocket Cube</li>
            <li>• Great for beginners!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RubiksMini;