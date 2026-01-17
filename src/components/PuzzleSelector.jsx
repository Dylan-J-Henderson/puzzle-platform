export const PuzzleSelector = ({ puzzle, size, onSizeChange, onPuzzleChange, disabled }) => {
  const variants = puzzle.getSizeVariants();

  return (
    <div className="flex gap-2">
      <select 
        value={size} 
        onChange={(e) => onSizeChange(Number(e.target.value))} 
        disabled={disabled}
        className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer border border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {variants.map(variant => (
          <option key={variant.value} value={variant.value}>{variant.label}</option>
        ))}
      </select>
    </div>
  );
};