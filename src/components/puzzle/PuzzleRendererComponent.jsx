// src/components/PuzzleRendererComponent.jsx
import { useEffect, useMemo, useRef, useImperativeHandle, forwardRef } from 'react';
import { PuzzleRenderer } from '../../rendering/PuzzleRenderer';

export const PuzzleRendererComponent = forwardRef(({ puzzle, size, onMoveComplete, onSolved, onRotationStart }, ref) => {
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
  }, []);

  // Keep puzzle & size in sync
  useEffect(() => {
    if (rendererRef.current) {
      rendererRef.current.updatePuzzleAndSize(puzzle, size);
    }
  }, [puzzle, size]);

  // Expose renderer methods to parent component
  useImperativeHandle(ref, () => ({
    scramble: () => rendererRef.current?.scramble(),
    reset: () => rendererRef.current?.reset(),
    animateTransition: (...args) => rendererRef.current?.animateTransition(...args),
    animatePuzzleSwitch: (...args) => rendererRef.current?.animatePuzzleSwitch(...args),
  }), []);

  return <div ref={mountRef} className="flex-1 w-full" style={{ touchAction: 'none' }} />;
});