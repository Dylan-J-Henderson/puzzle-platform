/**
 * Represents a single rotation operation on a puzzle
 */
export class Rotation {
  constructor(axis, layer, direction = 1, metadata = {}) {
    this.axis = axis;
    this.layer = layer;
    this.direction = direction;
    this.metadata = metadata;
    Object.freeze(this);
  }
}