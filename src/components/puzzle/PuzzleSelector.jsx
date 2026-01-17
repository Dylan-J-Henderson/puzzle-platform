import { useState, useRef, useEffect } from 'react';

/**
 * @file PuzzleSelector.jsx
 * @description Adaptive dropdown component for selecting puzzle size variants.
 * Renders a custom styled dropdown on desktop browsers for consistent appearance
 * and uses native <select> on mobile devices for better UX with native pickers.
 * 
 * @version 2.0.0
 * @author Twisty Puzzle App Team
 */

/**
 * PuzzleSelector Component
 * 
 * An adaptive dropdown selector for choosing puzzle size variants (e.g., 2x2, 3x3, 4x4, 5x5).
 * 
 * **Desktop Behavior (>768px):**
 * - Custom dropdown implementation with glassmorphism styling
 * - Consistent appearance across all browsers (Chrome, Firefox, Edge, Safari)
 * - Animated chevron icon and smooth transitions
 * - Click-outside-to-close functionality
 * 
 * **Mobile Behavior (≤768px):**
 * - Native <select> element for optimal mobile UX
 * - Triggers native mobile picker interface
 * - Styled to match desktop appearance where possible
 * - Better accessibility with native mobile controls
 * 
 * @component
 * @param {Object} props - Component props
 * @param {TwistyPuzzle} props.puzzle - Current puzzle instance that provides available size variants
 * @param {number} props.size - Currently selected puzzle size
 * @param {Function} props.onSizeChange - Callback function called when size changes
 * @param {Function} props.onPuzzleChange - Callback for puzzle type changes (unused in this component)
 * @param {boolean} props.disabled - Whether the selector should be disabled
 * 
 * @example
 * // Basic usage
 * <PuzzleSelector
 *   puzzle={rubiksCubeInstance}
 *   size={3}
 *   onSizeChange={(newSize) => handleSizeChange(newSize)}
 *   disabled={isAnimating}
 * />
 * 
 * @example
 * // With puzzle change handler
 * <PuzzleSelector
 *   puzzle={currentPuzzle}
 *   size={currentSize}
 *   onSizeChange={setSize}
 *   onPuzzleChange={setPuzzle}
 *   disabled={false}
 * />
 * 
 * @returns {JSX.Element} Adaptive dropdown component (custom on desktop, native on mobile)
 */
export const PuzzleSelector = ({ puzzle, size, onSizeChange, onPuzzleChange, disabled }) => {
  /**
   * State: Controls dropdown menu visibility (desktop only)
   * @type {[boolean, Function]} isOpen - Whether the custom dropdown menu is currently open
   */
  const [isOpen, setIsOpen] = useState(false);
  
  /**
   * State: Mobile device detection
   * @type {[boolean, Function]} isMobile - True if viewport width is ≤768px
   */
  const [isMobile, setIsMobile] = useState(false);
  
  /**
   * Ref: Dropdown container element reference
   * @type {React.RefObject<HTMLDivElement>} dropdownRef - Reference to the dropdown container
   * Used for detecting clicks outside the dropdown to close it (desktop only)
   */
  const dropdownRef = useRef(null);
  
  /**
   * Available size variants from the puzzle instance
   * @type {Array<{value: number, label: string}>} variants - Array of size options
   * @example
   * [
   *   {value: 2, label: "2×2×2 Pocket Cube"},
   *   {value: 3, label: "3×3×3 Classic"},
   *   {value: 4, label: "4×4×4 Revenge"},
   *   {value: 5, label: "5×5×5 Professor"}
   * ]
   */
  const variants = puzzle.getSizeVariants();
  
  /**
   * Currently selected variant object (desktop only)
   * @type {Object|undefined} selectedVariant - The active size variant
   * Contains {value: number, label: string} matching the current size
   */
  const selectedVariant = variants.find(v => v.value === size);

  /**
   * Effect: Mobile device detection and resize handling
   * 
   * Detects if the device is mobile based on viewport width (≤768px).
   * Adds a resize event listener to update the mobile state when the window is resized.
   * This allows the component to switch between custom and native dropdowns dynamically.
   * 
   * The 768px breakpoint corresponds to Tailwind's 'md' breakpoint and typical
   * tablet/mobile device widths.
   * 
   * @effect
   * @listens window#resize
   */
  useEffect(() => {
    /**
     * Checks viewport width and updates isMobile state
     * @function checkMobile
     * @inner
     */
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /**
   * Effect: Close dropdown when clicking outside (desktop only)
   * 
   * Adds a mousedown event listener to the document when the custom dropdown is open.
   * If a click occurs outside the dropdown container (determined by the dropdownRef),
   * the dropdown menu closes automatically.
   * 
   * This provides intuitive UX where users can click anywhere outside the dropdown
   * to dismiss it, similar to standard dropdown behavior.
   * 
   * The event listener is only added when isOpen is true and is cleaned up when
   * the dropdown closes or the component unmounts.
   * 
   * @effect
   * @listens document#mousedown
   * @requires dropdownRef - Must reference the dropdown container element
   */
  useEffect(() => {
    /**
     * Handles clicks outside the dropdown to close it
     * @function handleClickOutside
     * @inner
     * @param {MouseEvent} event - The mouse click event
     */
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Only add listener when dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  /**
   * Handles selecting a size variant from the custom dropdown (desktop only)
   * 
   * Called when a user clicks on a variant option in the custom dropdown menu.
   * Converts the value to a number (ensuring type safety), invokes the parent's
   * onSizeChange callback with the new size, and closes the dropdown menu.
   * 
   * @function handleSelect
   * @param {number|string} value - The size value to select
   * @returns {void}
   * 
   * @example
   * // User clicks on "4×4×4 Revenge" option
   * handleSelect(4); // Calls onSizeChange(4) and closes dropdown
   */
  const handleSelect = (value) => {
    onSizeChange(Number(value));
    setIsOpen(false);
  };

  return (
    <div className="flex gap-2">
      <div className="relative" ref={dropdownRef}>
        {isMobile ? (
          /* ========================================
           * MOBILE RENDERING: Native <select>
           * ========================================
           * Uses browser's native select element to provide:
           * - Native mobile picker interface (iOS wheel, Android dropdown)
           * - Better accessibility with native controls
           * - Familiar UX for mobile users
           * - Automatic keyboard support
           * 
           * Styling matches the desktop custom dropdown where possible,
           * with glassmorphism effect and custom chevron icon.
           */
          <select
            value={size}
            onChange={(e) => onSizeChange(Number(e.target.value))}
            disabled={disabled}
            className="bg-white/10 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer border border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] appearance-none"
            style={{
              // Custom chevron icon as SVG data URI (white color)
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            {variants.map(variant => (
              <option key={variant.value} value={variant.value}>
                {variant.label}
              </option>
            ))}
          </select>
        ) : (
          /* ========================================
           * DESKTOP RENDERING: Custom Dropdown
           * ========================================
           * Custom implementation providing:
           * - Consistent styling across all browsers
           * - Glassmorphism with backdrop blur
           * - Smooth animations and transitions
           * - Animated chevron rotation
           * - Click-outside-to-close functionality
           */
          <>
            {/* Dropdown Toggle Button */}
            <button
              onClick={() => !disabled && setIsOpen(!isOpen)}
              disabled={disabled}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer border border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] text-left flex items-center justify-between"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
            >
              <span>{selectedVariant?.label}</span>
              {/* Animated Chevron Icon */}
              <svg 
                className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div 
                className="absolute top-full left-0 right-0 mt-1 bg-gray-900 border border-white/20 rounded-lg overflow-hidden z-50 shadow-xl"
                role="listbox"
              >
                {variants.map(variant => (
                  <button
                    key={variant.value}
                    onClick={() => handleSelect(variant.value)}
                    role="option"
                    aria-selected={variant.value === size}
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
          </>
        )}
      </div>
    </div>
  );
};
