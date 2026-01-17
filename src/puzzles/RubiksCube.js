/**
 * @file RubiksCube.js
 * @description Implementation of the classic Rubik's Cube puzzle.
 * 
 * Supports multiple sizes (2×2×2 through 5×5×5) and provides complete
 * puzzle mechanics including:
 * - State management and validation
 * - 3D mesh generation with proper coloring
 * - User interaction (drag-to-rotate)
 * - Move application and state mutations
 * - Scrambling and solving detection
 * 
 * @extends TwistyPuzzle
 * 
 * @example
 * const cube = new RubiksCube();
 * const state = cube.createInitialState(3);
 * const meshes = cube.createPieceMeshes(group, state);
 */

import * as THREE from 'three';
import { TwistyPuzzle } from '../core/base/TwistyPuzzle';
import { GridPosition } from '../core/valueObjects/GridPosition';
import { Rotation } from '../core/valueObjects/Rotation';
import { StandardRubiksCubeColors } from './colorSchemes/StandardRubiksCubeColors';
import { RubiksCubeRotationStrategy } from '../core/strategies/RubiksCubeRotationStrategy';

export class RubiksCube extends TwistyPuzzle {
  /** Size of each cube piece in 3D space */
  static PIECE_SIZE = 0.95;

  /** Size of each cube piece in 3D space */
  static GAP = 0.05;

  /** Minimum rotation angle to trigger a move (radians) */
  static ROTATION_THRESHOLD = Math.PI / 4;

  /** Minimum pixel distance to start layer rotation */
  static DRAG_THRESHOLD = 20;

  /** Angle for 90-degree snapping (radians) */
  static SNAP_ANGLE = Math.PI / 2;

  /** Duration of rotation snap animation (ms) */
  static ANIMATION_DURATION = 150;

  /**
   * Creates a new Rubik's Cube puzzle instance.
   * 
   * @param {ColorScheme} [colorScheme=new StandardRubiksCubeColors()] - Color scheme for faces
   * @param {RotationStrategy} [rotationStrategy=new RubiksCubeRotationStrategy()] - Strategy for calculating rotations
   */
  constructor(colorScheme = new StandardRubiksCubeColors(), rotationStrategy = new RubiksCubeRotationStrategy()) {
    super();
    this.colorScheme = colorScheme;
    this.rotationStrategy = rotationStrategy;
  }

  // Metadata
  /**
   * Gets puzzle name
   * 
   * @returns "Rubik's Cube"
   */
  getName() { return "Rubik's Cube"; }

  /**
   * Gets default size variant
   * 
   * @returns 3 (for 3x3x3 cube)
   */
  getDefaultSize() { return 3; }

  /**
   * Gets all available size variants
   * 
   * @returns Array of size variant objects with value and label
   * @example
   * [
   *   { value: 2, label: "2×2×2 Pocket Cube" },
   *   { value: 3, label: "3×3×3 Classic" },
   *   { value: 4, label: "4×4×4 Revenge" },
   * ]
   */
  getSizeVariants() {
    return [
      { value: 2, label: "2×2×2 Pocket Cube" },
      { value: 3, label: "3×3×3 Classic" },
      { value: 4, label: "4×4×4 Revenge" },
      { value: 5, label: "5×5×5 Professor" }
    ];
  }

  /**
   * Calculates recommended camera distance for given size
   * Larger cubes need more distance to fit in view
   * 
   * @param size - Cube size (2-5)
   * @returns Distance in world units (size * 4.5)
   */
  getCameraDistance(size) { return size * 4.5; }

  /**
   * Calculates number of moves for scrambling
   * Larger cubes get more scramble moves
   * 
   * @param size - Cube size (2-5)
   * @returns Number of random moves (minimum 20, or size * 8)
   */
  getScrambleMoveCount(size) { return Math.max(20, size * 8); }

  // State management
  /**
   * Creates initial solved cube state
   * Generates all pieces with correct initial colors based on position
   * 
   * @param size - Cube size (2-5)
   * @returns State object containing:
   *   - size: Cube size
   *   - pieces: Array of piece objects with position and colors
   */
  createInitialState(size) {
    const pieces = [];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          pieces.push(this._createPiece(x, y, z, size));
        }
      }
    }
    return { size, pieces };
  }

  /**
   * Creates a single piece with initial colors
   * Colors are assigned based on position (only external faces get colors)
   * 
   * @param x - X position in grid (0 to size-1)
   * @param y - Y position in grid (0 to size-1)
   * @param z - Z position in grid (0 to size-1)
   * @param size - Cube size
   * @returns Piece object with:
   *   - position: GridPosition instance
   *   - colors: Object with face colors (right, left, up, down, front, back)
   *             Each value is a color key ('R', 'L', 'U', 'D', 'F', 'B') or null
   */
  _createPiece(x, y, z, size) {
    return {
      position: new GridPosition(x, y, z),
      colors: {
        right: x === size - 1 ? 'R' : null,
        left: x === 0 ? 'L' : null,
        up: y === size - 1 ? 'U' : null,
        down: y === 0 ? 'D' : null,
        front: z === size - 1 ? 'F' : null,
        back: z === 0 ? 'B' : null
      }
    };
  }

  /**
   * Checks if cube is in solved state
   * Verifies that all pieces on each face have matching colors
   * 
   * @param state - Current cube state
   * @returns True if all six faces have uniform colors
   */
  isSolved(state) {
    const { pieces, size } = state;
    const faces = [
      { check: p => p.position.x === size - 1, face: 'right', expected: 'R' },
      { check: p => p.position.x === 0, face: 'left', expected: 'L' },
      { check: p => p.position.y === size - 1, face: 'up', expected: 'U' },
      { check: p => p.position.y === 0, face: 'down', expected: 'D' },
      { check: p => p.position.z === size - 1, face: 'front', expected: 'F' },
      { check: p => p.position.z === 0, face: 'back', expected: 'B' }
    ];
    
    return faces.every(({ check, face, expected }) => {
      const facePieces = pieces.filter(check);
      return facePieces.every(p => p.colors[face] === expected);
    });
  }

  /**
   * Creates deep copy of cube state
   * Creates new instances of GridPosition for proper immutability
   * 
   * @param state - State to clone
   * @returns New state object with cloned pieces and positions
   */
  cloneState(state) {
    return {
      size: state.size,
      pieces: state.pieces.map(p => ({
        position: new GridPosition(p.position.x, p.position.y, p.position.z),
        colors: { ...p.colors }
      }))
    };
  }

  // 3D visualization
  /**
   * Creates Three.js meshes for all cube pieces
   * Each piece is a box with colored faces and black edge lines
   * 
   * @param group - Three.js group to add meshes to
   * @param state - Current cube state
   * @param skipClear - If true, don't clear existing children (default: false)
   * @returns Array of created mesh objects
   */
  createPieceMeshes(group, state, skipClear = false) {
    if (!skipClear) {
      group.clear();
    }
    const meshes = [];
    const { size, pieces } = state;
    const offset = ((size - 1) / 2) * (RubiksCube.PIECE_SIZE + RubiksCube.GAP);

    pieces.forEach((piece, index) => {
      const mesh = this._createPieceMesh(piece, index, offset);
      group.add(mesh);
      meshes.push(mesh);
    });

    return meshes;
  }

  /**
   * Creates a single piece mesh with materials and edges
   * 
   * @param piece - Piece data with position and colors
   * @param index - Piece index for userData reference
   * @param offset - Center offset for positioning (calculated from cube size)
   * @returns Three.js mesh with:
   *   - BoxGeometry of PIECE_SIZE
   *   - 6 materials (one per face)
   *   - Black edge lines as child
   *   - userData containing gridPosition and pieceIndex
   */
  _createPieceMesh(piece, index, offset) {
    const { x, y, z } = piece.position;
    
    const materials = [
      this._createMaterial(piece.colors.right),
      this._createMaterial(piece.colors.left),
      this._createMaterial(piece.colors.up),
      this._createMaterial(piece.colors.down),
      this._createMaterial(piece.colors.front),
      this._createMaterial(piece.colors.back)
    ];

    const geometry = new THREE.BoxGeometry(
      RubiksCube.PIECE_SIZE, 
      RubiksCube.PIECE_SIZE, 
      RubiksCube.PIECE_SIZE
    );
    const mesh = new THREE.Mesh(geometry, materials);
    
    mesh.position.set(
      x * (RubiksCube.PIECE_SIZE + RubiksCube.GAP) - offset,
      y * (RubiksCube.PIECE_SIZE + RubiksCube.GAP) - offset,
      z * (RubiksCube.PIECE_SIZE + RubiksCube.GAP) - offset
    );
    
    mesh.userData = { 
      gridPosition: piece.position.toObject(),
      pieceIndex: index 
    };

    // Add edge lines
    const edges = new THREE.EdgesGeometry(geometry);
    const lines = new THREE.LineSegments(
      edges, 
      new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 })
    );
    mesh.add(lines);

    return mesh;
  }

  /**
   * Creates material for a cube face
   * 
   * @param colorKey - Color key ('U', 'D', 'F', 'B', 'L', 'R') or null for internal faces
   * @returns Three.js MeshStandardMaterial
   *   - Colored material if colorKey provided
   *   - Dark gray material if null (internal face)
   */
  _createMaterial(colorKey) {
    const color = colorKey ? this.colorScheme.getColor(colorKey) : 0x1a1a1a;
    return new THREE.MeshStandardMaterial({ 
      color, 
      roughness: 0.4, 
      metalness: 0.1 
    });
  }

  // Interaction
  /**
   * Determines rotation from user drag on a face
   * Analyzes which face was clicked and drag direction to determine axis and layer
   * 
   * @param intersection - Raycasting intersection data containing:
   *   - cubelet: Mesh that was hit
   *   - face: Face normal data
   * @param deltaX - Horizontal drag distance in pixels
   * @param deltaY - Vertical drag distance in pixels
   * @param state - Current cube state
   * @returns Rotation object with axis, layer, and metadata, or null if invalid
   */
  getRotationFromDrag(intersection, deltaX, deltaY, state) {
    if (!intersection?.face) return null;

    const { cubelet, face } = intersection;
    const { x, y, z } = cubelet.userData.gridPosition;

    const normal = face.normal.clone();
    normal.transformDirection(cubelet.matrixWorld);
    
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    const dragDirection = absDeltaY > absDeltaX ? 'vertical' : 'horizontal';

    let axis, layer;
    
    if (Math.abs(normal.x) > 0.9) {
      axis = 'x';
      layer = x;
    } else if (Math.abs(normal.y) > 0.9) {
      axis = 'y';
      layer = y;
    } else if (Math.abs(normal.z) > 0.9) {
      axis = 'z';
      layer = z;
    } else {
      return null;
    }

    return new Rotation(axis, layer, 1, { faceNormal: normal, dragDirection });
  }

  /**
   * Checks if a piece should rotate for the given rotation
   * 
   * @param piece - Piece mesh with userData.gridPosition
   * @param rotation - Rotation object with axis and layer
   * @returns True if piece's position matches the rotating layer
   */
  shouldPieceRotate(piece, rotation) {
    const { axis, layer } = rotation;
    const pos = piece.userData.gridPosition;
    
    return (
      (axis === 'x' && pos.x === layer) ||
      (axis === 'y' && pos.y === layer) ||
      (axis === 'z' && pos.z === layer)
    );
  }

  /**
   * Calculates rotation angle from drag deltas using rotation strategy
   * 
   * @param rotation - Rotation with metadata (faceNormal, dragDirection)
   * @param totalDeltaX - Total horizontal drag distance
   * @param totalDeltaY - Total vertical drag distance
   * @returns Rotation angle in radians
   */
  calculateRotationAngle(rotation, totalDeltaX, totalDeltaY) {
    return this.rotationStrategy.calculateAngle(rotation, totalDeltaX, totalDeltaY);
  }

  // State mutations
  /**
   * Applies rotation to cube state
   * Handles multiple turns and normalizes to 0-3 range
   * Mutates the state object
   * 
   * @param state - Cube state to modify
   * @param rotation - Rotation with axis and layer
   * @param turns - Number of 90° clockwise turns (can be negative)
   */
  applyRotation(state, rotation, turns) {
    const { axis, layer } = rotation;
    const { pieces, size } = state;
    const normalizedTurns = ((turns % 4) + 4) % 4;

    for (let turn = 0; turn < normalizedTurns; turn++) {
      this._applySingleRotation(pieces, size, axis, layer);
    }
  }

  /**
   * Applies a single 90° clockwise rotation to a layer
   * Updates piece positions and rotates colors
   * 
   * @param pieces - Array of all pieces (mutated)
   * @param size - Cube size
   * @param axis - Rotation axis ('x', 'y', or 'z')
   * @param layer - Layer index to rotate
   */
  _applySingleRotation(pieces, size, axis, layer) {
    const layerPieces = pieces
      .map((piece, index) => ({ piece, index, snapshot: this._snapshotPiece(piece) }))
      .filter(({ snapshot }) => snapshot.position[axis] === layer);

    layerPieces.forEach(({ piece, snapshot }) => {
      const transform = this._getRotationTransform(axis, size);
      const newPos = transform.position(snapshot.position);
      piece.position = new GridPosition(newPos.x, newPos.y, newPos.z);
      piece.colors = transform.colors(snapshot.colors);
    });
  }

  /**
   * Creates snapshot of piece state before mutation
   * 
   * @param piece - Piece to snapshot
   * @returns Object with plain position object and colors copy
   */
  _snapshotPiece(piece) {
    return {
      position: piece.position.toObject(),
      colors: { ...piece.colors }
    };
  }

  /**
   * Gets transformation functions for 90° rotation around an axis
   * Returns functions to transform position and colors
   * 
   * @param axis - Rotation axis ('x', 'y', or 'z')
   * @param size - Cube size (needed for position calculations)
   * @returns Object with:
   *   - position: Function that transforms position coordinates
   *   - colors: Function that rotates face colors
   */
  _getRotationTransform(axis, size) {
    const transforms = {
      'x': {
        position: (pos) => ({ 
          x: pos.x, 
          y: pos.z, 
          z: size - 1 - pos.y 
        }),
        colors: (col) => ({ 
          ...col,
          front: col.down, 
          up: col.front, 
          back: col.up, 
          down: col.back 
        })
      },
      'y': {
        position: (pos) => ({ 
          x: size - 1 - pos.z, 
          y: pos.y, 
          z: pos.x 
        }),
        colors: (col) => ({ 
          ...col,
          front: col.left, 
          right: col.front, 
          back: col.right, 
          left: col.back 
        })
      },
      'z': {
        position: (pos) => ({ 
          x: pos.y, 
          y: size - 1 - pos.x, 
          z: pos.z 
        }),
        colors: (col) => ({ 
          ...col,
          up: col.right, 
          left: col.up, 
          down: col.left, 
          right: col.down 
        })
      }
    };

    return transforms[axis];
  }
}