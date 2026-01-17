/**
 * @file SolvedPopup.jsx
 * @description Congratulations popup shown when puzzle is successfully solved.
 * Displays completion statistics including solve time and move count.
 * 
 * @module components/popups/SolvedPopup
 * @requires ../ui/InfoPopup
 * 
 * @example
 * // Basic usage
 * <SolvedPopup 
 *   isVisible={isPuzzleSolved}
 *   onClose={() => setIsPuzzleSolved(false)}
 *   time={125000}
 *   moves={42}
 * />
 * 
 * @example
 * // With state management
 * const [solveStats, setSolveStats] = useState({ time: 0, moves: 0, isSolved: false });
 * 
 * const handleSolve = (time, moves) => {
 *   setSolveStats({ time, moves, isSolved: true });
 * };
 * 
 * return (
 *   <SolvedPopup
 *     isVisible={solveStats.isSolved}
 *     onClose={() => setSolveStats(prev => ({ ...prev, isSolved: false }))}
 *     time={solveStats.time}
 *     moves={solveStats.moves}
 *   />
 * );
 */

import { InfoPopup } from '../ui/InfoPopup';

/**
 * Congratulations popup displayed when user successfully solves the puzzle
 * 
 * Shows a celebratory success message with solve statistics including
 * formatted time and total move count. Uses the success theme (green)
 * from InfoPopup.
 * 
 * Features:
 * - Success-themed popup (green styling)
 * - Formatted time display (MM:SS)
 * - Move count display
 * - Congratulatory message
 * - Celebration emoji in title
 * 
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.isVisible - Controls popup visibility
 * @param {function} props.onClose - Callback when user closes popup
 * @param {number} props.time - Solve time in milliseconds
 * @param {number} props.moves - Total number of moves taken to solve
 * 
 * @returns {React.ReactElement} Solved popup component
 * 
 * @example
 * // Display after puzzle completion
 * <SolvedPopup 
 *   isVisible={true}
 *   onClose={() => console.log('User acknowledged solve')}
 *   time={125000}  // 2 minutes 5 seconds
 *   moves={42}
 * />
 */
export const SolvedPopup = ({ isVisible, onClose, time, moves }) => {

  /**
   * Formats milliseconds into MM:SS time format
   * 
   * Converts a time duration in milliseconds to a human-readable
   * minutes:seconds format with zero-padded seconds.
   * 
   * @param {number} ms - Time duration in milliseconds
   * @returns {string} Formatted time string (e.g., "2:05", "15:42")
   * 
   * @example
   * formatTime(125000);  // Returns "2:05"
   * formatTime(3661000); // Returns "61:01"
   * formatTime(5000);    // Returns "0:05"
   * 
   * @private
   */
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  /**
   * Popup content including congratulations message and statistics
   * 
   * Renders a congratulatory message followed by a styled statistics
   * panel showing the solve time and move count.
   */
  const content = (
    <div className="space-y-4">
      <p className="text-white/80 text-sm">
        Congratulations! You've successfully solved the puzzle!
      </p>
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-white/60">Time:</span>
            <span className="text-white font-semibold">{formatTime(time)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/60">Moves:</span>
            <span className="text-white font-semibold">{moves}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <InfoPopup
      type="success"
      title="🎉 Puzzle Solved!"
      content={content}
      buttonText="Awesome!"
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};