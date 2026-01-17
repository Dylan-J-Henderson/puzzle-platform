import { useEffect, useMemo, useRef } from 'react';
import { PuzzleRenderer } from '../rendering/PuzzleRenderer';

export const PuzzleRendererComponent = ({ puzzle, size, onMoveComplete, onSolved, onRotationStart }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

  const callbacks = useMemo(
    () => ({
      onMove: onMoveComplete,
      onSolved,
      onRotationStart,
    }),
    [onMoveComplete, onSolved, onRotationStart]
  );

  // Create & destroy renderer
  useEffect(() => {
    if (!mountRef.current) return;

    const renderer = new PuzzleRenderer(mountRef.current, puzzle, size, callbacks);
    rendererRef.current = renderer;

    return () => {
      renderer.dispose();
      rendererRef.current = null;
    };
  }, []); // Still empty → we update later

  // Keep puzzle & size in sync
  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.updatePuzzleAndSize(puzzle, size);
    }
  }, [puzzle, size]);

  return <div ref={mountRef} className="flex-1 w-full" style={{ touchAction: 'none' }} />;
};