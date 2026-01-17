export const StatsPanel = ({ time, moves, isSolved }) => {
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-24 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white min-w-[160px] pointer-events-none">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/60 text-sm">Time:</span>
          <span className="font-mono font-bold text-lg">{formatTime(time)}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/60 text-sm">Moves:</span>
          <span className="font-mono font-bold text-lg">{moves}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-white/60 text-sm">Status:</span>
          <span className={`text-xs px-2 py-1 rounded font-semibold ${isSolved ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
            {isSolved ? 'Solved' : 'Scrambled'}
          </span>
        </div>
      </div>
    </div>
  );
};