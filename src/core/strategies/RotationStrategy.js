/**
 * @file RotationStrategy.js
 * @description Abstract strategy for calculating rotation angles from drag input
 * 
 * Strategy Pattern: Allows different puzzles to have different rotation
 * calculation logic while maintaining a consistent interface.
 */

export class RotationStrategy {

  /**
   * Calculates rotation angle based on drag deltas
   * @param {Rotation} rotation - The rotation being performed
   * @param {number} totalDeltaX - Total horizontal drag distance in pixels
   * @param {number} totalDeltaY - Total vertical drag distance in pixels
   * @returns {number} Rotation angle in radians
   * @throws {Error} Must be implemented by subclass
   */
  calculateAngle(rotation, totalDeltaX, totalDeltaY) {
    throw new Error("Method 'calculateAngle()' must be implemented");
  }
}