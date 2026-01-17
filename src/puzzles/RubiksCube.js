import * as THREE from 'three';
import { TwistyPuzzle } from '../core/base/TwistyPuzzle';
import { GridPosition } from '../core/valueObjects/GridPosition';
import { Rotation } from '../core/valueObjects/Rotation';
import { StandardRubiksCubeColors } from './colorSchemes/StandardRubiksCubeColors';
import { RubiksCubeRotationStrategy } from '../core/strategies/RubiksCubeRotationStrategy';

export class RubiksCube extends TwistyPuzzle {
  static PIECE_SIZE = 0.95;
  static GAP = 0.05;
  static ROTATION_THRESHOLD = Math.PI / 4;
  static DRAG_THRESHOLD = 20;
  static SNAP_ANGLE = Math.PI / 2;
  static ANIMATION_DURATION = 150;

  constructor(colorScheme = new StandardRubiksCubeColors(), rotationStrategy = new RubiksCubeRotationStrategy()) {
    super();
    this.colorScheme = colorScheme;
    this.rotationStrategy = rotationStrategy;
  }

  // Metadata
  getName() { return "Rubik's Cube"; }
  getDefaultSize() { return 3; }
  getSizeVariants() {
    return [
      { value: 2, label: "2×2×2 Pocket Cube" },
      { value: 3, label: "3×3×3 Classic" },
      { value: 4, label: "4×4×4 Revenge" },
      { value: 5, label: "5×5×5 Professor" }
    ];
  }
  getCameraDistance(size) { return size * 4.5; }
  getScrambleMoveCount(size) { return Math.max(20, size * 8); }

  // State management
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

  _createMaterial(colorKey) {
    const color = colorKey ? this.colorScheme.getColor(colorKey) : 0x1a1a1a;
    return new THREE.MeshStandardMaterial({ 
      color, 
      roughness: 0.4, 
      metalness: 0.1 
    });
  }

  // Interaction
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

  shouldPieceRotate(piece, rotation) {
    const { axis, layer } = rotation;
    const pos = piece.userData.gridPosition;
    
    return (
      (axis === 'x' && pos.x === layer) ||
      (axis === 'y' && pos.y === layer) ||
      (axis === 'z' && pos.z === layer)
    );
  }

  calculateRotationAngle(rotation, totalDeltaX, totalDeltaY) {
    return this.rotationStrategy.calculateAngle(rotation, totalDeltaX, totalDeltaY);
  }

  // State mutations
  applyRotation(state, rotation, turns) {
    const { axis, layer } = rotation;
    const { pieces, size } = state;
    const normalizedTurns = ((turns % 4) + 4) % 4;

    for (let turn = 0; turn < normalizedTurns; turn++) {
      this._applySingleRotation(pieces, size, axis, layer);
    }
  }

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

  _snapshotPiece(piece) {
    return {
      position: piece.position.toObject(),
      colors: { ...piece.colors }
    };
  }

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