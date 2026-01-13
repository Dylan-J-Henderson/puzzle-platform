// src/components/common/TimerDisplay.jsx
import React from 'react';
import { formatTime } from '../../hooks/useTimer';

const TimerDisplay = ({ 
  elapsedTime, 
  isRunning, 
  onStart, 
  canStart = true,
  startButtonText = 'Start Timer',
  disabledText = 'Scramble First'
}) => {
  return (
    <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg">
      <div className="text-4xl font-mono font-bold text-white text-center mb-3">
        {formatTime(elapsedTime)}
      </div>
      <button
        onClick={onStart}
        disabled={!canStart || isRunning}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition shadow-lg hover:shadow-xl"
      >
        {isRunning ? 'Timer Running...' : canStart ? startButtonText : disabledText}
      </button>
    </div>
  );
};

export default TimerDisplay;