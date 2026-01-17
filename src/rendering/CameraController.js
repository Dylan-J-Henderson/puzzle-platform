/**
 * @file CameraController.js
 * @description Manages camera positioning using spherical coordinates
 * 
 * Uses spherical coordinates (distance, theta, phi) for intuitive
 * orbit controls around the puzzle.
 * 
 * Coordinate system:
 * - theta: horizontal angle (azimuth)
 * - phi: vertical angle (elevation)
 * - distance: radius from origin
 */

export class CameraController {
  // Camera distance constraints
  static MIN_DISTANCE = 5;
  static MAX_DISTANCE = 100;

  // Default viewing angles
  static DEFAULT_THETA = Math.PI / 4;
  static DEFAULT_PHI = Math.PI / 4;

  // Vertical angle constraints (prevent gimbal lock)
  static MIN_PHI = 0.1;
  static MAX_PHI = Math.PI - 0.1;

  /**
   * Creates a new camera controller
   * @param {THREE.PerspectiveCamera} camera - Three.js camera to control
   * @param {number} initialDistance - Starting distance from origin
   */
  constructor(camera, initialDistance) {
    this.camera = camera;
    this.distance = initialDistance;
    this.theta = CameraController.DEFAULT_THETA;
    this.phi = CameraController.DEFAULT_PHI;
  }

  /**
   * Updates camera position based on spherical coordinates
   * Converts spherical (distance, theta, phi) to Cartesian (x, y, z)
   */
  updatePosition() {
    const x = this.distance * Math.sin(this.phi) * Math.cos(this.theta);
    const y = this.distance * Math.cos(this.phi);
    const z = this.distance * Math.sin(this.phi) * Math.sin(this.theta);
    
    this.camera.position.set(x, y, z);
    this.camera.lookAt(0, 0, 0);
  }

  /**
   * Rotates camera by delta angles
   * @param {number} deltaTheta - Horizontal rotation delta
   * @param {number} deltaPhi - Vertical rotation delta
   */
  rotate(deltaTheta, deltaPhi) {
    this.theta += deltaTheta;
    this.phi += deltaPhi;
    this.phi = Math.max(CameraController.MIN_PHI, Math.min(CameraController.MAX_PHI, this.phi));
    this.updatePosition();
  }

  /**
   * Zooms camera in or out
   * @param {number} delta - Zoom delta (positive = zoom in)
   */
  zoom(delta) {
    this.distance += delta * this.distance;
    this.distance = Math.max(
      CameraController.MIN_DISTANCE, 
      Math.min(CameraController.MAX_DISTANCE, this.distance)
    );
    this.updatePosition();
  }

  /**
   * Resets camera to default position
   * @param {number} newDistance - New distance from origin
   */
  reset(newDistance) {
    this.distance = newDistance;
    this.theta = CameraController.DEFAULT_THETA;
    this.phi = CameraController.DEFAULT_PHI;
    this.updatePosition();
  }

  /**
   * Sets camera distance without changing angles
   * @param {number} distance - New distance
   */
  setDistance(distance) {
    this.distance = distance;
    this.updatePosition();
  }

  /**
   * Gets current camera state
   * @returns {{distance: number, theta: number, phi: number}}
   */
  getState() {
    return {
      distance: this.distance,
      theta: this.theta,
      phi: this.phi
    };
  }
}