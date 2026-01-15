import { useState, useRef, useEffect, useCallback } from 'react';

const PUZZLES = [
  { id: '2x2', label: "2×2×2 Mini", size: 2 },
  { id: '3x3', label: "3×3×3 Classic", size: 3 },
  { id: '4x4', label: "4×4×4 Revenge", size: 4 }
];

export default function UIControls({ 
  currentSize, 
  onSizeChange, 
  onScramble, 
  onReset,
  isAnimating 
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const currentPuzzle = PUZZLES.find(p => p.size === currentSize) || PUZZLES[1];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePuzzleSelect = (puzzle) => {
    onSizeChange(puzzle.size);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-xl mx-auto">
        <div className="glass-panel rounded-2xl p-3 flex items-center justify-between gap-3">
          {/* Puzzle Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="control-button flex items-center gap-2 min-w-[140px] justify-between"
              disabled={isAnimating}
            >
              <span className="font-semibold">{currentPuzzle.label}</span>
              <svg 
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full glass-panel rounded-xl overflow-hidden">
                {PUZZLES.map(puzzle => (
                  <button
                    key={puzzle.id}
                    onClick={() => handlePuzzleSelect(puzzle)}
                    className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors
                      ${puzzle.size === currentSize ? 'bg-primary/20 text-primary' : 'text-foreground'}`}
                  >
                    {puzzle.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onScramble}
              disabled={isAnimating}
              className="control-button-primary"
            >
              Scramble
            </button>
            
            <button
              onClick={onReset}
              disabled={isAnimating}
              className="control-button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
