import { ColorScheme } from '../../core/valueObjects/ColorScheme';

/**
 * Standard Rubik's Cube color scheme
 */
export class StandardRubiksCubeColors extends ColorScheme {
  constructor() {
    super({
      U: 0xffffff,  // Up - White
      D: 0xffff00,  // Down - Yellow
      F: 0xff0000,  // Front - Red
      B: 0xff6600,  // Back - Orange
      L: 0x0000ff,  // Left - Blue
      R: 0x00ff00   // Right - Green
    });
  }
}