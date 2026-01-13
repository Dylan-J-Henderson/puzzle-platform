// src/components/puzzles/rubiks-cube/RubiksCubeControls.jsx
import React from 'react';

const RubiksCubeControls = ({ 
  onMove,
  onScramble, 
  onReset, 
  isScrambling, 
  isResetting 
}) => {
  const moves = [
    ['R', "R'"],
    ['L', "L'"],
    ['U', "U'"],
    ['D', "D'"],
    ['F', "F'"],
    ['B', "B'"],
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <button
          onClick={onScramble}
          disabled={isScrambling}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition shadow-lg hover:shadow-xl"
        >
          {isScrambling ? 'Scrambling...' : 'Scramble'}
        </button>
        <button
          onClick={onReset}
          disabled={isResetting}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition shadow-lg hover:shadow-xl"
        >
          {isResetting ? 'Resetting...' : 'Reset'}
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Movements</h3>
        <div className="grid grid-cols-2 gap-2">
          {moves.flat().map((move) => (
            <button
              key={move}
              onClick={() => onMove(move)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition shadow hover:shadow-lg"
            >
              {move}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RubiksCubeControls;