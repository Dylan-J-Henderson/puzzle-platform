import { InfoPopup } from '../ui/InfoPopup';

/**
 * Congratulations popup shown when puzzle is solved
 */
export const SolvedPopup = ({ isVisible, onClose, time, moves }) => {
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

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