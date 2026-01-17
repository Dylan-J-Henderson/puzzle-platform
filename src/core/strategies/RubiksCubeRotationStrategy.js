import { RotationStrategy } from './RotationStrategy';

/**
 * Rotation calculation strategy for Rubik's Cube
 */
export class RubiksCubeRotationStrategy extends RotationStrategy {
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