/**
 * @file ControlButtons.jsx
 * @description Scramble and reset buttons
 * 
 * @param {Object} props
 * @param {Function} props.onScramble - Scramble button callback
 * @param {Function} props.onReset - Reset button callback
 * @param {boolean} props.disabled - Whether buttons are disabled
 */

export const ControlButtons = ({ onScramble, onReset, disabled }) => (
  <div className="flex gap-2">
    <button 
      onClick={onScramble} 
      disabled={disabled}
      className="bg-cyan-500/80 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Scramble
    </button>
    <button 
      onClick={onReset} 
      disabled={disabled}
      className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg font-semibold border border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Reset
    </button>
  </div>
);