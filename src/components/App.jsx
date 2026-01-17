import { useState, useEffect, useRef } from 'react';
// ==================== PUZZLE COMPONENTS ====================
import { PuzzleRendererComponent } from './puzzle/PuzzleRendererComponent';
import { StatsPanel } from './puzzle/StatsPanel';
import { Instructions } from './puzzle/Instructions';
import { PuzzleSelector } from './puzzle/PuzzleSelector';
import { ControlButtons } from './puzzle/ControlButtons';

// ==================== POPUP COMPONENTS ====================
import { DisclaimerPopup } from './popups/DisclaimerPopup';
// Future popup imports:
// import { WelcomePopup } from './popups/WelcomePopup';
import { SolvedPopup } from './popups/SolvedPopup';

// ==================== PUZZLE IMPLEMENTATIONS ====================
import { RubiksCube } from '../puzzles/RubiksCube';

/**
 * @file App.jsx
 * @description Main application component that manages the entire puzzle application.
 * Coordinates between UI components and the 3D renderer, handling:
 * - Puzzle state (type, size, solved status)
 * - Timer and move counting
 * - Transition animations
 * - User actions (scramble, reset, size/puzzle changes)
 * 
 * State Management:
 * - puzzle: Current puzzle instance (e.g., RubiksCube)
 * - size: Current puzzle size variant
 * - moveCount: Number of moves made since scramble
 * - timerActive: Whether timer is running
 * - elapsedTime: Time elapsed in milliseconds
 * - isScrambled: Whether puzzle has been scrambled
 * - isSolved: Whether puzzle is in solved state
 * - isTransitioning: Whether animation is in progress
 * 
 * @returns React component tree
 */
const App = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showSolvedPopup, setShowSolvedPopup] = useState(false);

  /**
   * Reference to PuzzleRenderer instance for direct method calls
   * Used to trigger animations and state changes in the 3D scene
   */
  const puzzleRendererRef = useRef(null);

  /**
   * Current puzzle instance
   * Initialized with a new RubiksCube on mount
   */
  const [puzzle, setPuzzle] = useState(() => new RubiksCube());

  /**
   * Current puzzle size variant (e.g., 3 for 3x3x3 cube)
   */
  const [size, setSize] = useState(3);

  /**
   * Number of moves completed since last scramble
   * Incremented on each successful rotation
   */
  const [moveCount, setMoveCount] = useState(0);

  /**
   * Whether the timer is currently running
   * Starts on first move after scramble, stops when solved
   */
  const [timerActive, setTimerActive] = useState(false);

  /**
   * Elapsed time in milliseconds
   * Updates every 10ms when timer is active
   */
  const [elapsedTime, setElapsedTime] = useState(0);

  /**
   * Whether the puzzle has been scrambled
   * Used to determine when to start the timer
   */
  const [isScrambled, setIsScrambled] = useState(false);

  /**
   * Whether the puzzle is currently solved
   * Updated by renderer's onSolved callback
   */
  const [isSolved, setIsSolved] = useState(true);

  /**
   * Whether an animation is currently in progress
   * Disables controls during transitions to prevent state conflicts
   */
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * Timer effect
   * Runs a 10ms interval when timer is active and puzzle is not solved
   * Automatically cleans up interval on unmount or state change
   */
  useEffect(() => {
    let interval;
    if (timerActive && !isSolved) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [timerActive, isSolved]);

  /**
   * Handles completion of a move/rotation
   * Increments move counter and starts timer if this is the first move after scramble
   * 
   * Called by PuzzleRenderer when a rotation is finalized
   */
  const handleMoveComplete = () => {
    setMoveCount(prev => prev + 1);
    if (!timerActive && isScrambled) {
      setTimerActive(true);
    }
  };

  /**
   * Handles start of a rotation
   * Starts the timer if this is the first interaction after scramble
   * 
   * Called by PuzzleRenderer when user begins dragging a layer
   */
  const handleRotationStart = () => {
    if (!timerActive && isScrambled) {
      setTimerActive(true);
    }
  };

  /**
   * Handles puzzle solve completion
   * Stops timer and updates state flags
   * 
   * Called by PuzzleRenderer when puzzle reaches solved state
   */
  const handleSolved = () => {
    setIsSolved(true);
    setTimerActive(false);
    setIsScrambled(false);
    setShowSolvedPopup(true);
  };

  /**
   * Scrambles the puzzle with random moves
   * 
   * Workflow:
   * 1. Checks if transition is already in progress
   * 2. Animates puzzle scaling down
   * 3. Applies random scramble moves at midpoint
   * 4. Animates puzzle scaling back up
   * 5. Resets timer and move counter
   * 
   * @async
   * @returns Promise that resolves when animation completes
   */
  const scramble = async () => {
    if (isTransitioning || !puzzleRendererRef.current) return;
    setIsTransitioning(true);
    
    await puzzleRendererRef.current.animateTransition(() => {
      puzzleRendererRef.current.scramble();
      setIsScrambled(true);
      setIsSolved(false);
      setMoveCount(0);
      setElapsedTime(0);
      setTimerActive(false);
    }, false);
    
    setIsTransitioning(false);
  };

  /**
   * Resets puzzle to solved state
   * 
   * Workflow:
   * 1. Checks if transition is already in progress
   * 2. Animates puzzle scaling down
   * 3. Resets to solved state at midpoint
   * 4. Animates puzzle scaling back up
   * 5. Resets camera to default position
   * 6. Resets timer and move counter
   * 
   * @async
   * @returns Promise that resolves when animation completes
   */
  const reset = async () => {
    if (isTransitioning || !puzzleRendererRef.current) return;
    setIsTransitioning(true);
    
    await puzzleRendererRef.current.animateTransition(() => {
      puzzleRendererRef.current.reset();
      setIsScrambled(false);
      setIsSolved(true);
      setMoveCount(0);
      setElapsedTime(0);
      setTimerActive(false);
    }, true);
    
    setIsTransitioning(false);
  };

  /**
   * Changes the puzzle size variant
   * 
   * Workflow:
   * 1. Validates new size is different from current
   * 2. Animates old puzzle scaling down and removal
   * 3. Creates new puzzle with new size at midpoint
   * 4. Animates new puzzle scaling up
   * 5. Resets camera to appropriate distance
   * 6. Resets all game state
   * 
   * @async
   * @param newSize - New size variant (e.g., 2, 3, 4, 5)
   * @returns Promise that resolves when animation completes
   */
  const handleSizeChange = async (newSize) => {
    if (isTransitioning || !puzzleRendererRef.current) return;
    if (newSize === size) return;
    
    setIsTransitioning(true);
    
    const currentPuzzle = puzzle;
    await puzzleRendererRef.current.animatePuzzleSwitch(currentPuzzle, newSize);
    
    setSize(newSize);
    setIsScrambled(false);
    setIsSolved(true);
    setMoveCount(0);
    setElapsedTime(0);
    setTimerActive(false);
    setIsTransitioning(false);
  };

  /**
   * Changes the puzzle type
   * 
   * Workflow:
   * 1. Gets default size for new puzzle type
   * 2. Animates old puzzle scaling down and removal
   * 3. Creates new puzzle instance at midpoint
   * 4. Animates new puzzle scaling up
   * 5. Resets camera to appropriate distance
   * 6. Resets all game state
   * 
   * @async
   * @param newPuzzle - New puzzle instance (e.g., new RubiksCube())
   * @returns Promise that resolves when animation completes
   */
  const handlePuzzleChange = async (newPuzzle) => {
    if (isTransitioning || !puzzleRendererRef.current) return;
    setIsTransitioning(true);
    
    const newDefaultSize = newPuzzle.getDefaultSize();
    
    await puzzleRendererRef.current.animatePuzzleSwitch(newPuzzle, newDefaultSize);
    
    setPuzzle(newPuzzle);
    setSize(newDefaultSize);
    setIsScrambled(false);
    setIsSolved(true);
    setMoveCount(0);
    setElapsedTime(0);
    setTimerActive(false);
    setIsTransitioning(false);
  };

  /**
   * Changes the puzzle type
   * 
   * Workflow:
   * 1. Gets default size for new puzzle type
   * 2. Animates old puzzle scaling down and removal
   * 3. Creates new puzzle instance at midpoint
   * 4. Animates new puzzle scaling up
   * 5. Resets camera to appropriate distance
   * 6. Resets all game state
   * 
   * @async
   * @param newPuzzle - New puzzle instance (e.g., new RubiksCube())
   * @returns Promise that resolves when animation completes
   */
  return (
    <div className="w-full h-screen bg-black flex flex-col overflow-hidden">
      <DisclaimerPopup 
        isVisible={showDisclaimer} 
        onClose={() => setShowDisclaimer(false)} 
      />
      
      <SolvedPopup
        isVisible={showSolvedPopup}
        onClose={() => setShowSolvedPopup(false)}
        time={elapsedTime}
        moves={moveCount}
      />
 
      <PuzzleRendererComponent 
        ref={puzzleRendererRef}
        puzzle={puzzle} 
        size={size} 
        onMoveComplete={handleMoveComplete}
        onSolved={handleSolved}
        onRotationStart={handleRotationStart}
      />
      
      <div className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between gap-3 flex-wrap">
            <PuzzleSelector 
              puzzle={puzzle}
              size={size}
              onSizeChange={handleSizeChange}
              onPuzzleChange={handlePuzzleChange}
              disabled={isTransitioning}
            />
            <ControlButtons 
              onScramble={scramble}
              onReset={reset}
              disabled={isTransitioning}
            />
          </div>
        </div>
      </div>

      <StatsPanel time={elapsedTime} moves={moveCount} isSolved={isSolved} />
      <Instructions />
    </div>
  );
};

export default App;