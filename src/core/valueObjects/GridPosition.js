/**
 * @file GridPosition.js
 * @description Immutable value object representing a 3D position in the puzzle grid
 * 
 * This class follows the Value Object pattern - instances are immutable and 
 * equality is based on values rather than identity.
 * 
 * @example
 * const pos1 = new GridPosition(0, 1, 2);
 * const pos2 = new GridPosition(0, 1, 2);
 * console.log(pos1.equals(pos2)); // true
 */

export class GridPosition {

  /**
   * @file Rotation.js
   * @description Immutable value object representing a rotation operation
   * 
   * Encapsulates all information needed to perform a layer rotation on a puzzle.
   * 
   * @example
   * const rotation = new Rotation('x', 0, 1, { faceNormal: new Vector3(1,0,0) });
   */
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    Object.freeze(this);
  }

  /**
   * Checks if this position equals another position
   * @param {GridPosition} other - Position to compare with
   * @returns {boolean} True if positions are equal
   */
  equals(other) {
    return this.x === other.x && this.y === other.y && this.z === other.z;
  }

  /**
   * Converts position to plain object
   * @returns {{x: number, y: number, z: number}}
   */
  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }

  /**
   * Creates GridPosition from plain object
   * @param {{x: number, y: number, z: number}} obj - Object with x, y, z properties
   * @returns {GridPosition}
   */
  static fromObject(obj) {
    return new GridPosition(obj.x, obj.y, obj.z);
  }
}