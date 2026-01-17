/**
 * @file Rotation.js
 * @description Immutable value object representing a rotation operation
 * 
 * Encapsulates all information needed to perform a layer rotation on a puzzle.
 * 
 * @example
 * const rotation = new Rotation('x', 0, 1, { faceNormal: new Vector3(1,0,0) });
 */

export class Rotation {

  /**
   * Creates a new rotation operation
   * @param {string} axis - Rotation axis ('x', 'y', or 'z')
   * @param {number} layer - Layer index to rotate (0-indexed)
   * @param {number} direction - Direction multiplier (1 or -1)
   * @param {Object} metadata - Additional data (e.g., faceNormal, dragDirection)
   */
  constructor(axis, layer, direction = 1, metadata = {}) {
    this.axis = axis;
    this.layer = layer;
    this.direction = direction;
    this.metadata = metadata;
    Object.freeze(this);
  }
}