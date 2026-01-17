/**
 * Handles camera positioning and movement
 */
export class CameraController {
  static MIN_DISTANCE = 5;
  static MAX_DISTANCE = 100;
  static DEFAULT_THETA = Math.PI / 4;
  static DEFAULT_PHI = Math.PI / 4;
  static MIN_PHI = 0.1;
  static MAX_PHI = Math.PI - 0.1;

  constructor(camera, initialDistance) {
    this.camera = camera;
    this.distance = initialDistance;
    this.theta = CameraController.DEFAULT_THETA;
    this.phi = CameraController.DEFAULT_PHI;
  }

  updatePosition() {
    const x = this.distance * Math.sin(this.phi) * Math.cos(this.theta);
    const y = this.distance * Math.cos(this.phi);
    const z = this.distance * Math.sin(this.phi) * Math.sin(this.theta);
    
    this.camera.position.set(x, y, z);
    this.camera.lookAt(0, 0, 0);
  }

  rotate(deltaTheta, deltaPhi) {
    this.theta += deltaTheta;
    this.phi += deltaPhi;
    this.phi = Math.max(CameraController.MIN_PHI, Math.min(CameraController.MAX_PHI, this.phi));
    this.updatePosition();
  }

  zoom(delta) {
    this.distance += delta * this.distance;
    this.distance = Math.max(
      CameraController.MIN_DISTANCE, 
      Math.min(CameraController.MAX_DISTANCE, this.distance)
    );
    this.updatePosition();
  }

  reset(newDistance) {
    this.distance = newDistance;
    this.theta = CameraController.DEFAULT_THETA;
    this.phi = CameraController.DEFAULT_PHI;
    this.updatePosition();
  }

  setDistance(distance) {
    this.distance = distance;
    this.updatePosition();
  }

  getState() {
    return {
      distance: this.distance,
      theta: this.theta,
      phi: this.phi
    };
  }
}