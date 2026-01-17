/**
 * Color scheme for puzzle faces
 */
export class ColorScheme {
  constructor(colors) {
    this.colors = Object.freeze({ ...colors });
  }

  getColor(key) {
    return this.colors[key];
  }

  getAllColors() {
    return { ...this.colors };
  }
}