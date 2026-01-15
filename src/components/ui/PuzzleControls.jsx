import React from 'react';
import usePuzzleStore from '../../store/puzzleStore';

const PuzzleControls = () => {
  const currentPuzzle = usePuzzleStore((state) => state.currentPuzzle);
  const setPuzzle = usePuzzleStore((state) => state.setPuzzle);
  const scramble = usePuzzleStore((state) => state.scramble);
  const reset = usePuzzleStore((state) => state.reset);
  const isAnimating = usePuzzleStore((state) => state.isAnimating);

  const puzzleOptions = [
    { id: 'rubiks-mini', label: "Rubik's Mini" },
    { id: 'rubiks-cube', label: "Rubik's Cube" },
    { id: 'rubiks-revenge', label: "Rubik's Revenge" },
  ];

  return (
    <>
      {/* Top dropdown */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <select
          value={currentPuzzle}
          onChange={(e) => setPuzzle(e.target.value)}
          disabled={isAnimating}
          className="puzzle-dropdown min-w-52 text-center"
        >
          {puzzleOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Bottom controls */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-4">
        <button
          onClick={scramble}
          disabled={isAnimating}
          className="control-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Scramble
        </button>
        <button
          onClick={reset}
          disabled={isAnimating}
          className="control-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default PuzzleControls;
