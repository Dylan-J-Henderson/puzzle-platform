/**
 * Immutable 3D grid position
 */
export class GridPosition {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    Object.freeze(this);
  }

  equals(other) {
    return this.x === other.x && this.y === other.y && this.z === other.z;
  }

  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }

  static fromObject(obj) {
    return new GridPosition(obj.x, obj.y, obj.z);
  }
}