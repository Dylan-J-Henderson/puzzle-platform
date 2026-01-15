import { create } from 'zustand';

const PUZZLE_TYPES = {
  'rubiks-mini': { name: "Rubik's Mini", size: 2 },
  'rubiks-cube': { name: "Rubik's Cube", size: 3 },
  'rubiks-revenge': { name: "Rubik's Revenge", size: 4 },
};

const usePuzzleStore = create((set, get) => ({
  currentPuzzle: 'rubiks-cube',
  puzzleStates: {},
  puzzleRotations: {},
  isAnimating: false,
  animationPhase: 'idle', // 'idle', 'shrinking', 'growing'
  scale: 1,

  setPuzzle: (puzzleId) => {
    const { currentPuzzle, isAnimating } = get();
    if (currentPuzzle === puzzleId || isAnimating) return;

    set({ isAnimating: true, animationPhase: 'shrinking' });

    setTimeout(() => {
      set({ currentPuzzle: puzzleId, animationPhase: 'growing' });
      setTimeout(() => {
        set({ isAnimating: false, animationPhase: 'idle', scale: 1 });
      }, 300);
    }, 300);
  },

  savePuzzleState: (puzzleId, state) => {
    set((prev) => ({
      puzzleStates: { ...prev.puzzleStates, [puzzleId]: state },
    }));
  },

  savePuzzleRotation: (puzzleId, rotation) => {
    set((prev) => ({
      puzzleRotations: { ...prev.puzzleRotations, [puzzleId]: rotation },
    }));
  },

  getPuzzleState: (puzzleId) => {
    return get().puzzleStates[puzzleId] || null;
  },

  getPuzzleRotation: (puzzleId) => {
    return get().puzzleRotations[puzzleId] || { x: Math.PI / 6, y: -Math.PI / 4 };
  },

  scramble: () => {
    const { isAnimating } = get();
    if (isAnimating) return;

    set({ isAnimating: true, animationPhase: 'shrinking' });

    setTimeout(() => {
      set({ animationPhase: 'scrambling' });
      setTimeout(() => {
        set({ animationPhase: 'growing' });
        setTimeout(() => {
          set({ isAnimating: false, animationPhase: 'idle', scale: 1 });
        }, 300);
      }, 100);
    }, 300);
  },

  reset: () => {
    const { isAnimating, currentPuzzle } = get();
    if (isAnimating) return;

    set({ isAnimating: true, animationPhase: 'shrinking' });

    setTimeout(() => {
      set((prev) => ({
        animationPhase: 'resetting',
        puzzleStates: { ...prev.puzzleStates, [currentPuzzle]: null },
        puzzleRotations: { ...prev.puzzleRotations, [currentPuzzle]: { x: Math.PI / 6, y: -Math.PI / 4 } },
      }));
      setTimeout(() => {
        set({ animationPhase: 'growing' });
        setTimeout(() => {
          set({ isAnimating: false, animationPhase: 'idle', scale: 1 });
        }, 300);
      }, 100);
    }, 300);
  },

  setScale: (scale) => set({ scale }),

  getPuzzleTypes: () => PUZZLE_TYPES,
}));

export default usePuzzleStore;
