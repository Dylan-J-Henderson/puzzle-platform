// src/components/common/MoveHistory.jsx
import React from 'react';

const MoveHistory = ({ moves, maxVisible = 36 }) => {
  const getVisibleMoves = () => {
    return moves.slice(-maxVisible).map((move, index, arr) => ({
      move,
      absoluteIndex: moves.length - arr.length + index,
    }));
  };

  const visibleMoves = getVisibleMoves();

  return (
    <div className="absolute left-6 top-0 bottom-0 z-10 flex items-center pointer-events-none">
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-col relative">
          {Array.from({ length: maxVisible }).map((_, rowIndex) => {
            const moveIndex = visibleMoves.length - (maxVisible - rowIndex);
            const move = moveIndex >= 0 ? visibleMoves[moveIndex] : null;
            
            if (!move) {
              return <div key={`empty-${rowIndex}`} className="h-7" />;
            }
            
            const rowsFromBottom = maxVisible - 1 - rowIndex;
            const opacity = rowsFromBottom === 0 ? 1 : 
                           rowsFromBottom === 1 ? 0.7 : 
                           rowsFromBottom === 2 ? 0.5 : 
                           rowsFromBottom === 3 ? 0.35 : 
                           rowsFromBottom === 4 ? 0.25 : 
                           rowsFromBottom >= 5 ? Math.max(0.08, 0.25 - (rowsFromBottom - 4) * 0.015) : 0.08;
            
            return (
              <div
                key={move.absoluteIndex}
                className="h-7 flex items-center"
                style={{ 
                  opacity,
                  transition: 'opacity 300ms ease-out, transform 300ms ease-out',
                }}
              >
                <span className="text-white font-bold text-lg font-mono">
                  {move.move}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoveHistory;