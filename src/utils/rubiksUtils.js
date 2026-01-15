import * as THREE from 'three';

// Rubik's cube face colors
export const COLORS = {
  white: '#f5f5f5',
  yellow: '#ffd700',
  red: '#dc2626',
  orange: '#f97316',
  blue: '#2563eb',
  green: '#16a34a',
  black: '#1a1a1a'
};

// Face indices: 0=right(+x), 1=left(-x), 2=top(+y), 3=bottom(-y), 4=front(+z), 5=back(-z)
export const FACE_COLORS = [
  COLORS.red,    // +X right
  COLORS.orange, // -X left
  COLORS.white,  // +Y top
  COLORS.yellow, // -Y bottom
  COLORS.blue,   // +Z front
  COLORS.green   // -Z back
];

/**
 * Generate cubie positions for an NxN cube
 */
export function generateCubiePositions(n) {
  const positions = [];
  const offset = (n - 1) / 2;
  
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      for (let z = 0; z < n; z++) {
        // Skip internal cubies (not visible)
        const isEdge = x === 0 || x === n - 1 || 
                       y === 0 || y === n - 1 || 
                       z === 0 || z === n - 1;
        if (isEdge) {
          positions.push({
            x: x - offset,
            y: y - offset,
            z: z - offset,
            originalX: x - offset,
            originalY: y - offset,
            originalZ: z - offset
          });
        }
      }
    }
  }
  return positions;
}

/**
 * Get face colors for a cubie based on its position
 */
export function getCubieColors(position, n) {
  const offset = (n - 1) / 2;
  const colors = [];
  const epsilon = 0.01;
  
  // Right (+X)
  colors.push(Math.abs(position.x - offset) < epsilon ? COLORS.red : COLORS.black);
  // Left (-X)
  colors.push(Math.abs(position.x + offset) < epsilon ? COLORS.orange : COLORS.black);
  // Top (+Y)
  colors.push(Math.abs(position.y - offset) < epsilon ? COLORS.white : COLORS.black);
  // Bottom (-Y)
  colors.push(Math.abs(position.y + offset) < epsilon ? COLORS.yellow : COLORS.black);
  // Front (+Z)
  colors.push(Math.abs(position.z - offset) < epsilon ? COLORS.blue : COLORS.black);
  // Back (-Z)
  colors.push(Math.abs(position.z + offset) < epsilon ? COLORS.green : COLORS.black);
  
  return colors;
}

/**
 * Determine which axis and layer a face belongs to
 */
export function getFaceLayer(faceIndex, position, n) {
  const offset = (n - 1) / 2;
  
  switch (faceIndex) {
    case 0: // +X
    case 1: // -X
      return { axis: 'x', layer: Math.round(position.x + offset) };
    case 2: // +Y
    case 3: // -Y
      return { axis: 'y', layer: Math.round(position.y + offset) };
    case 4: // +Z
    case 5: // -Z
      return { axis: 'z', layer: Math.round(position.z + offset) };
    default:
      return null;
  }
}

/**
 * Get cubies in a specific layer
 */
export function getCubiesInLayer(cubies, axis, layer, n) {
  const offset = (n - 1) / 2;
  const epsilon = 0.1;
  
  return cubies.filter(cubie => {
    const pos = cubie.position || cubie;
    const coord = pos[axis];
    return Math.abs(coord - (layer - offset)) < epsilon;
  });
}

/**
 * Generate random scramble moves
 */
export function generateScramble(n, moveCount = 25) {
  const axes = ['x', 'y', 'z'];
  const directions = [1, -1];
  const moves = [];
  
  let lastAxis = null;
  
  for (let i = 0; i < moveCount; i++) {
    let axis;
    do {
      axis = axes[Math.floor(Math.random() * axes.length)];
    } while (axis === lastAxis);
    
    const layer = Math.floor(Math.random() * n);
    const direction = directions[Math.floor(Math.random() * 2)];
    
    moves.push({ axis, layer, direction });
    lastAxis = axis;
  }
  
  return moves;
}

/**
 * Apply rotation to a position vector
 */
export function rotatePosition(position, axis, angle) {
  const pos = new THREE.Vector3(position.x, position.y, position.z);
  const quaternion = new THREE.Quaternion();
  
  switch (axis) {
    case 'x':
      quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), angle);
      break;
    case 'y':
      quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle);
      break;
    case 'z':
      quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), angle);
      break;
  }
  
  pos.applyQuaternion(quaternion);
  
  // Round to nearest grid position
  return {
    x: Math.round(pos.x * 100) / 100,
    y: Math.round(pos.y * 100) / 100,
    z: Math.round(pos.z * 100) / 100
  };
}

/**
 * Get world-space face normal
 */
export function getWorldFaceNormal(faceIndex) {
  const normals = [
    new THREE.Vector3(1, 0, 0),   // +X
    new THREE.Vector3(-1, 0, 0),  // -X
    new THREE.Vector3(0, 1, 0),   // +Y
    new THREE.Vector3(0, -1, 0),  // -Y
    new THREE.Vector3(0, 0, 1),   // +Z
    new THREE.Vector3(0, 0, -1)   // -Z
  ];
  return normals[faceIndex] || new THREE.Vector3(0, 0, 1);
}

/**
 * Calculate drag angle in the rotation plane
 */
export function calculateDragAngle(startPoint, currentPoint, axis, center) {
  const start = new THREE.Vector3().copy(startPoint).sub(center);
  const current = new THREE.Vector3().copy(currentPoint).sub(center);
  
  // Project onto the plane perpendicular to the rotation axis
  const axisVector = new THREE.Vector3(
    axis === 'x' ? 1 : 0,
    axis === 'y' ? 1 : 0,
    axis === 'z' ? 1 : 0
  );
  
  // Remove axis component
  start.sub(axisVector.clone().multiplyScalar(start.dot(axisVector)));
  current.sub(axisVector.clone().multiplyScalar(current.dot(axisVector)));
  
  if (start.length() < 0.01 || current.length() < 0.01) return 0;
  
  start.normalize();
  current.normalize();
  
  let angle = Math.acos(Math.max(-1, Math.min(1, start.dot(current))));
  
  // Determine sign using cross product
  const cross = new THREE.Vector3().crossVectors(start, current);
  if (cross.dot(axisVector) < 0) angle = -angle;
  
  return angle;
}
