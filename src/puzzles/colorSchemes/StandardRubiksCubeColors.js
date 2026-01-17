/**
 * @file StandardRubiksCubeColors.js
 * @description Standard Rubik's Cube color scheme
 * 
 * Implements the official WCA (World Cube Association) color scheme:
 * - White opposite Yellow
 * - Red opposite Orange
 * - Blue opposite Green
 */

import { ColorScheme } from '../../core/valueObjects/ColorScheme';

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