import { useState, useEffect } from 'react';
import { RubiksCube } from '../puzzles/RubiksCube';
import { PuzzleRendererComponent } from './PuzzleRendererComponent';
import { StatsPanel } from './StatsPanel';
import { Instructions } from './Instructions';
import { PuzzleSelector } from './PuzzleSelector';
import { ControlButtons } from './ControlButtons';

const App = () => {
  const [puzzle, setPuzzle] = useState(() => new RubiksCube());
  const [size, setSize] = useState(3);
  const [moveCount, setMoveCount] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isScrambled, setIsScrambled] = useState(false);
  const [isSolved, setIsSolved] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerActive && !isSolved) {
      interval = setInterval(() => {
        setElapsedTime(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [timerActive, isSolved]);

  const handleMoveComplete = () => {
    setMoveCount(prev => prev + 1);
    if (!timerActive && isScrambled) {
      setTimerActive(true);
    }
  };

  const handleRotationStart = () => {
    if (!timerActive && isScrambled) {
      setTimerActive(true);
    }
  };

  const handleSolved = () => {
    setIsSolved(true);
    setTimerActive(false);
    setIsScrambled(false);
  };

  const scramble = async () => {
    if (isTransitioning || !window.__puzzleRenderer) return;
    setIsTransitioning(true);
    
    await window.__puzzleRenderer.animateTransition(() => {
      window.__puzzleRenderer.scramble();
      setIsScrambled(true);
      setIsSolved(false);
      setMoveCount(0);
      setElapsedTime(0);
      setTimerActive(false);
    }, false);
    
    setIsTransitioning(false);
  };

  const reset = async () => {
    if (isTransitioning || !window.__puzzleRenderer) return;
    setIsTransitioning(true);
    
    await window.__puzzleRenderer.animateTransition(() => {
      window.__puzzleRenderer.reset();
      setIsScrambled(false);
      setIsSolved(true);
      setMoveCount(0);
      setElapsedTime(0);
      setTimerActive(false);
    }, true);
    
    setIsTransitioning(false);
  };

  const handleSizeChange = async (newSize) => {
    if (isTransitioning || !window.__puzzleRenderer) return;
    if (newSize === size) return;
    
    setIsTransitioning(true);
    
    const currentPuzzle = puzzle;
    await window.__puzzleRenderer.animatePuzzleSwitch(currentPuzzle, newSize);
    
    setSize(newSize);
    setIsScrambled(false);
    setIsSolved(true);
    setMoveCount(0);
    setElapsedTime(0);
    setTimerActive(false);
    setIsTransitioning(false);
  };

  const handlePuzzleChange = async (newPuzzle) => {
    if (isTransitioning || !window.__puzzleRenderer) return;
    setIsTransitioning(true);
    
    const newDefaultSize = newPuzzle.getDefaultSize();
    
    await window.__puzzleRenderer.animatePuzzleSwitch(newPuzzle, newDefaultSize);
    
    setPuzzle(newPuzzle);
    setSize(newDefaultSize);
    setIsScrambled(false);
    setIsSolved(true);
    setMoveCount(0);
    setElapsedTime(0);
    setTimerActive(false);
    setIsTransitioning(false);
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col overflow-hidden">
      <PuzzleRendererComponent 
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