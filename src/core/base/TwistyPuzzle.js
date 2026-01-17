/**
 * @file TwistyPuzzle.js
 * @description Abstract base class for all twisty puzzles
 * 
 * Defines the contract that all puzzle implementations must follow.
 * Uses Template Method pattern - subclasses implement specific steps
 * while the framework handles common operations.
 * 
 * @abstract
 */

export class TwistyPuzzle {
  constructor() {
    if (new.target === TwistyPuzzle) {
      throw new TypeError("Cannot instantiate abstract class TwistyPuzzle");
    }
  }

  // Metadata methods
  /**
   * Gets the display name of the puzzle
   * @returns {string} Puzzle name
   * @abstract
   */
  getName() { throw new Error("Method 'getName()' must be implemented"); }

  /**
   * Gets the default size for this puzzle type
   * @returns {number} Default size (e.g., 3 for 3x3x3)
   * @abstract
   */
  getDefaultSize() { throw new Error("Method 'getDefaultSize()' must be implemented"); }

  /**
   * Gets available size variants
   * @returns {Array<{value: number, label: string}>} Size options
   * @abstract
   */
  getSizeVariants() { throw new Error("Method 'getSizeVariants()' must be implemented"); }

  /**
   * Gets recommended camera distance for a given size
   * @param {number} size - Puzzle size
   * @returns {number} Camera distance
   * @abstract
   */
  getCameraDistance(size) { throw new Error("Method 'getCameraDistance()' must be implemented"); }

  /**
   * Gets number of scramble moves for a given size
   * @param {number} size - Puzzle size
   * @returns {number} Number of random moves to scramble
   * @abstract
   */
  getScrambleMoveCount(size) { throw new Error("Method 'getScrambleMoveCount()' must be implemented"); }

  // State management
  /**
   * Creates the initial solved state
   * @param {number} size - Puzzle size
   * @returns {Object} Initial puzzle state
   * @abstract
   */
  createInitialState(size) { throw new Error("Method 'createInitialState()' must be implemented"); }

  /**
   * Checks if puzzle is in solved state
   * @param {Object} state - Current puzzle state
   * @returns {boolean} True if solved
   * @abstract
   */
  isSolved(state) { throw new Error("Method 'isSolved()' must be implemented"); }

  /**
   * Creates a deep clone of puzzle state
   * @param {Object} state - State to clone
   * @returns {Object} Cloned state
   * @abstract
   */
  cloneState(state) { throw new Error("Method 'cloneState()' must be implemented"); }

  // 3D visualization
  /**
   * Creates Three.js meshes for the puzzle
   * @param {THREE.Group} group - Three.js group to add meshes to
   * @param {Object} state - Current puzzle state
   * @param {boolean} skipClear - If true, don't clear existing meshes
   * @returns {Array<THREE.Mesh>} Array of created meshes
   * @abstract
   */
  createPieceMeshes(group, state) { throw new Error("Method 'createPieceMeshes()' must be implemented"); }

  // Interaction
  /**
   * Determines rotation from user drag interaction
   * @param {Object} intersection - Raycast intersection data
   * @param {number} deltaX - Horizontal drag distance
   * @param {number} deltaY - Vertical drag distance
   * @param {Object} state - Current puzzle state
   * @returns {Rotation|null} Rotation to perform, or null
   * @abstract
   */
  getRotationFromDrag(intersection, deltaX, deltaY, state) { throw new Error("Method 'getRotationFromDrag()' must be implemented"); }

    /**
   * Checks if a piece should rotate with a given rotation
   * @param {THREE.Mesh} piece - Puzzle piece mesh
   * @param {Rotation} rotation - Rotation being performed
   * @returns {boolean} True if piece should rotate
   * @abstract
   */
  shouldPieceRotate(piece, rotation) { throw new Error("Method 'shouldPieceRotate()' must be implemented"); }
  
  // State mutations
  /**
   * Applies a rotation to the puzzle state
   * @param {Object} state - Puzzle state (modified in place)
   * @param {Rotation} rotation - Rotation to apply
   * @param {number} turns - Number of 90° turns (1-3)
   * @abstract
   */
  applyRotation(state, rotation, turns) { throw new Error("Method 'applyRotation()' must be implemented"); }
}