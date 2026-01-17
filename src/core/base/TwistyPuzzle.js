/**
 * Abstract base class for all twisty puzzles
 */
export class TwistyPuzzle {
  constructor() {
    if (new.target === TwistyPuzzle) {
      throw new TypeError("Cannot instantiate abstract class TwistyPuzzle");
    }
  }

  // Metadata methods
  getName() { throw new Error("Method 'getName()' must be implemented"); }
  getDefaultSize() { throw new Error("Method 'getDefaultSize()' must be implemented"); }
  getSizeVariants() { throw new Error("Method 'getSizeVariants()' must be implemented"); }
  getCameraDistance(size) { throw new Error("Method 'getCameraDistance()' must be implemented"); }
  getScrambleMoveCount(size) { throw new Error("Method 'getScrambleMoveCount()' must be implemented"); }

  // State management
  createInitialState(size) { throw new Error("Method 'createInitialState()' must be implemented"); }
  isSolved(state) { throw new Error("Method 'isSolved()' must be implemented"); }
  cloneState(state) { throw new Error("Method 'cloneState()' must be implemented"); }

  // 3D visualization
  createPieceMeshes(group, state) { throw new Error("Method 'createPieceMeshes()' must be implemented"); }

  // Interaction
  getRotationFromDrag(intersection, deltaX, deltaY, state) { throw new Error("Method 'getRotationFromDrag()' must be implemented"); }
  shouldPieceRotate(piece, rotation) { throw new Error("Method 'shouldPieceRotate()' must be implemented"); }
  
  // State mutations
  applyRotation(state, rotation, turns) { throw new Error("Method 'applyRotation()' must be implemented"); }
}