/**
 * @file RubiksCubeRotationStrategy.js
 * @description Rotation angle calculation for Rubik's Cube
 * 
 * Calculates appropriate rotation angles based on:
 * - Which face was clicked
 * - Direction of drag (horizontal vs vertical)
 * - Face normal orientation
 */

import { RotationStrategy } from './RotationStrategy';

export class RubiksCubeRotationStrategy extends RotationStrategy {

  /**
   * Calculates rotation angle for Rubik's Cube
   * @param {Rotation} rotation - Rotation with metadata (faceNormal, dragDirection)
   * @param {number} totalDeltaX - Horizontal drag distance
   * @param {number} totalDeltaY - Vertical drag distance
   * @returns {number} Rotation angle in radians
   */
  calculateAngle(rotation, totalDeltaX, totalDeltaY) {
    const { axis, metadata } = rotation;
    const { faceNormal, dragDirection } = metadata;
    
    const angleMap = {
      'x': {
        'vertical': -totalDeltaY * 0.01 * (faceNormal.x > 0 ? 1 : -1),
        'horizontal': totalDeltaX * 0.01 * (faceNormal.x > 0 ? -1 : 1)
      },
      'y': {
        'vertical': -totalDeltaY * 0.01 * (faceNormal.y > 0 ? -1 : 1),
        'horizontal': totalDeltaX * 0.01 * (faceNormal.y > 0 ? 1 : -1)
      },
      'z': {
        'vertical': -totalDeltaY * 0.01 * (faceNormal.z > 0 ? 1 : -1),
        'horizontal': totalDeltaX * 0.01 * (faceNormal.z > 0 ? -1 : 1)
      }
    };

    return angleMap[axis]?.[dragDirection] || 0;
  }
}