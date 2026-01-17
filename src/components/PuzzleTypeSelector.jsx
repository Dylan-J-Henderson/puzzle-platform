import { RubiksCube } from '../puzzles/RubiksCube';

export const PuzzleTypeSelector = ({ currentPuzzleType, onPuzzleChange, disabled }) => {
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