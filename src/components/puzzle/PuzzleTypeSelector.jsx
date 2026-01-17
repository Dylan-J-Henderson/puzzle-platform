import { RubiksCube } from '../puzzles/RubiksCube';

/**
 * PuzzleTypeSelector Component
 * 
 * Dropdown selector for switching between different puzzle types.
 * Currently supports Rubik's Cube with the ability to add more puzzle types.
 * 
 * When a new puzzle type is selected, it creates a new instance of that puzzle
 * and calls the onPuzzleChange callback with the instance and puzzle name.
 * 
 * @param props - Component props
 * @param props.currentPuzzleType - Currently selected puzzle type identifier (e.g., 'rubiks-cube')
 * @param props.onPuzzleChange - Callback when puzzle type changes
 *   Called with (puzzleInstance, puzzleName)
 *   - puzzleInstance: New puzzle object (e.g., new RubiksCube())
 *   - puzzleName: String identifier for the puzzle type
 * @param props.disabled - Whether the selector is disabled (e.g., during transitions)
 * 
 * @returns React select element
 */
export const PuzzleTypeSelector = ({ currentPuzzleType, onPuzzleChange, disabled }) => {
  /**
   * Array of available puzzle types
   * Each puzzle has:
   * - name: String identifier (used as select value)
   * - label: Display name shown to user
   * - createInstance: Factory function that creates a new puzzle instance
   * 
   * To add a new puzzle type, add an object to this array with:
   * { name: 'puzzle-id', label: 'Display Name', createInstance: () => new PuzzleClass() }
   */
  const puzzles = [
    { name: 'rubiks-cube', label: "Rubik's Cube", createInstance: () => new RubiksCube() }
  ];

  return (
    <select 
      value={currentPuzzleType} 
      onChange={(e) => {
        const selected = puzzles.find(p => p.name === e.target.value);
        if (selected) onPuzzleChange(selected.createInstance(), selected.name);
      }}
      disabled={disabled}
      className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer border border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {puzzles.map(p => (
        <option key={p.name} value={p.name}>{p.label}</option>
      ))}
    </select>
  );
};