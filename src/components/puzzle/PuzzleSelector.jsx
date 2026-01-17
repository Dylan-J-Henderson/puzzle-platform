import { useState, useRef, useEffect } from 'react';

/**
 * @file PuzzleSelector.jsx
 * @description Custom dropdown component for selecting puzzle size variants.
 * Provides a fully-styled dropdown that works consistently across all browsers,
 * including Edge, with proper glassmorphism styling and animations.
 */

/**
 * PuzzleSelector Component
 * 
 * A custom dropdown selector for choosing puzzle size variants (e.g., 2x2, 3x3, 4x4, 5x5).
 * Uses a custom implementation instead of native <select> to ensure consistent styling
 * across all browsers, particularly Edge which has limited <option> styling support.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {TwistyPuzzle} props.puzzle - Current puzzle instance that provides available size variants
 * @param {number} props.size - Currently selected puzzle size
 * @param {Function} props.onSizeChange - Callback function called when size changes
 * @param {number} newSize - The newly selected size value
 * @param {Function} props.onPuzzleChange - Callback for puzzle type changes (unused in this component)
 * @param {boolean} props.disabled - Whether the selector should be disabled
 * 
 * @example
 * <PuzzleSelector
 *   puzzle={rubiksCubeInstance}
 *   size={3}
 *   onSizeChange={(newSize) => handleSizeChange(newSize)}
 *   disabled={isAnimating}
 * />
 * 
 * @returns {JSX.Element} Custom dropdown component with size variant options
 */
export const PuzzleSelector = ({ puzzle, size, onSizeChange, onPuzzleChange, disabled }) => {
  /**
   * @type {boolean} isOpen - Controls whether the dropdown menu is currently visible
   */
  const [isOpen, setIsOpen] = useState(false);
  
  /**
   * @type {React.RefObject} dropdownRef - Reference to the dropdown container element
   * Used for detecting clicks outside the dropdown to close it
   */
  const dropdownRef = useRef(null);
  
  /**
   * @type {Array<{value: number, label: string}>} variants - Available size variants from the puzzle
   * Example: [{value: 2, label: "2×2×2 Pocket Cube"}, {value: 3, label: "3×3×3 Classic"}]
   */
  const variants = puzzle.getSizeVariants();
  
  /**
   * @type {Object|undefined} selectedVariant - The currently selected variant object
   * Contains {value: number, label: string} for the active size
   */
  const selectedVariant = variants.find(v => v.value === size);

  /**
   * Effect: Close dropdown when clicking outside
   * 
   * Adds a mousedown event listener to the document when the dropdown is open.
   * If a click occurs outside the dropdown container, the dropdown closes.
   * Cleans up the event listener when the dropdown closes or component unmounts.
   * 
   * @listens document#mousedown
   */
  useEffect(() => {
    /**
     * Handles clicks outside the dropdown to close it
     * @param {MouseEvent} event - The mouse click event
     */
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  /**
   * Handles selecting a size variant from the dropdown
   * 
   * Converts the value to a number, calls the parent's onSizeChange callback,
   * and closes the dropdown menu.
   * 
   * @param {number|string} value - The size value to select
   */
  const handleSelect = (value) => {
    onSizeChange(Number(value));
    setIsOpen(false);
  };

  return (
    <div className="flex gap-2">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer border border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] text-left flex items-center justify-between"
        >
          <span>{selectedVariant?.label}</span>
          <svg 
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden z-50">
            {variants.map(variant => (
              <button
                key={variant.value}
                onClick={() => handleSelect(variant.value)}
                className={`w-full text-left px-4 py-2 font-semibold text-white transition-all ${
                  variant.value === size 
                    ? 'bg-white/20' 
                    : 'hover:bg-white/20'
                }`}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};