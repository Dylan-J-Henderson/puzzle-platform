/**
 * @file ColorScheme.js
 * @description Base class for puzzle color schemes
 * 
 * Encapsulates the color mapping for puzzle faces. Colors are stored as
 * hexadecimal values (e.g., 0xFF0000 for red).
 * 
 * @example
 * const scheme = new ColorScheme({ F: 0xFF0000, B: 0x0000FF });
 * console.log(scheme.getColor('F')); // 0xFF0000
 */

export class ColorScheme {

  /**
   * Creates a new color scheme
   * @param {Object.<string, number>} colors - Map of face keys to hex colors
   */
  constructor(colors) {
    this.colors = Object.freeze({ ...colors });
  }

  /**
   * Gets color for a specific face
   * @param {string} key - Face key (e.g., 'F', 'B', 'U', 'D', 'L', 'R')
   * @returns {number} Hexadecimal color value
   */
  getColor(key) {
    return this.colors[key];
  }

  /**
   * Gets all colors in the scheme
   * @returns {Object.<string, number>} Copy of all colors
   */
  getAllColors() {
    return { ...this.colors };
  }
}