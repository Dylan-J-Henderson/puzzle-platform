// src/App.jsx
import React, { useState } from 'react';
import { PUZZLES, getAllPuzzles } from './constants/puzzles';

const App = () => {
  const [selectedPuzzle, setSelectedPuzzle] = useState(PUZZLES.RUBIKS_CUBE.id);
  const [showMenu, setShowMenu] = useState(false);

  const currentPuzzle = getAllPuzzles().find(p => p.id === selectedPuzzle);
  const PuzzleComponent = currentPuzzle?.component;

  return (
    <div className="fixed inset-0 bg-slate-900">
      {/* Puzzle Selector Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="absolute top-4 right-4 z-50 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition"
      >
        {currentPuzzle?.icon} {currentPuzzle?.name} ▼
      </button>

      {/* Puzzle Selection Menu */}
      {showMenu && (
        <div className="absolute top-16 right-4 z-50 bg-gray-900 rounded-lg shadow-2xl overflow-hidden min-w-64">
          <div className="p-3 bg-purple-900 border-b border-purple-700">
            <h3 className="text-white font-semibold">Select Puzzle</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {getAllPuzzles().map((puzzle) => (
              <button
                key={puzzle.id}
                onClick={() => {
                  setSelectedPuzzle(puzzle.id);
                  setShowMenu(false);
                }}
                className={`w-full text-left px-4 py-3 transition ${
                  selectedPuzzle === puzzle.id
                    ? 'bg-purple-700 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{puzzle.icon}</span>
                  <div>
                    <div className="font-semibold">{puzzle.name}</div>
                    <div className="text-xs opacity-75">{puzzle.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close menu */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowMenu(false)}
        />
      )}

      {/* Render Selected Puzzle */}
      {PuzzleComponent && <PuzzleComponent />}
    </div>
  );
};

export default App;