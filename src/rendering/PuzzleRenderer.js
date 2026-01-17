/**
 * @file PuzzleRenderer.js
 * @description A 3D rendering engine for interactive twisty puzzles
 * 
 * Manages the Three.js rendering pipeline and user interactions for twisty puzzles.
 * Handles scene setup, lighting, camera control, drag interactions, animations,
 * and puzzle state synchronization.
 * 
 * @example
 * const renderer = new PuzzleRenderer(
 *   mountElement,
 *   new RubiksCube(),
 *   3,
 *   {
 *     onMove: () => console.log('Move completed'),
 *     onSolved: () => console.log('Puzzle solved!'),
 *     onRotationStart: () => console.log('Rotation started')
 *   }
 * );
 */

import * as THREE from 'three';
import { CameraController } from './CameraController';
import { Rotation } from '../core/valueObjects/Rotation';
import { RubiksCube } from '../puzzles/RubiksCube';

export class PuzzleRenderer {
  static ANIMATION_DURATION = 800;
  static ROTATION_SNAP_DURATION = 150;

  /**
   * Creates a new PuzzleRenderer instance
   * 
   * @param mountElement - DOM element to attach the canvas
   * @param puzzle - Puzzle instance to render
   * @param size - Size variant of the puzzle (e.g., 3 for 3x3x3)
   * @param callbacks - Event callbacks object
   * @param callbacks.onMove - Called when a move is completed
   * @param callbacks.onSolved - Called when puzzle is solved
   * @param callbacks.onRotationStart - Called when rotation begins
   * @param raycaster - Raycaster for mouse picking (optional)
   */
  constructor(
    mountElement, 
    puzzle, 
    size, 
    callbacks,
    raycaster = new THREE.Raycaster()
  ) {
    this.mountElement = mountElement;
    this.puzzle = puzzle;
    this.size = size;
    this.callbacks = callbacks;
    this.raycaster = raycaster;
    
    // Three.js core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.puzzleGroup = null;
    this.pieceMeshes = [];
    this.cameraController = null;
    
    // Interaction state
    this.mouse = new THREE.Vector2();
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.dragStartIntersection = null;
    this.rotatingGroup = null;
    this.isAnimating = false;
    
    // Touch state for pinch zoom
    this.touches = [];
    this.lastPinchDistance = 0;
    
    // State
    this.puzzleState = null;
    
    this._init();
  }

  /**
   * Initializes all renderer components and starts the render loop
   * @private
   */
  _init() {
    this._setupScene();
    this._setupLighting();
    this._setupCamera();
    this._setupRenderer();
    this._createPuzzle();
    this._setupEventListeners();
    this._startRenderLoop();
  }

  /**
   * Sets up the Three.js scene and puzzle group
   * @private
   */
  _setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0a);
    
    this.puzzleGroup = new THREE.Group();
    this.scene.add(this.puzzleGroup);
  }

  /**
   * Configures scene lighting with ambient and directional lights
   * @private
   */
  _setupLighting() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);
    
    const dir1 = new THREE.DirectionalLight(0xffffff, 0.5);
    dir1.position.set(5, 5, 5);
    this.scene.add(dir1);
    
    const dir2 = new THREE.DirectionalLight(0xffffff, 0.3);
    dir2.position.set(-5, 5, -5);
    this.scene.add(dir2);
  }

  /**
   * Initializes camera with perspective projection and camera controller
   * @private
   */
  _setupCamera() {
    const aspect = this.mountElement.clientWidth / this.mountElement.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
    
    const initialDistance = this.puzzle.getCameraDistance(this.size);
    this.cameraController = new CameraController(this.camera, initialDistance);
    this.cameraController.updatePosition();
  }

  /**
   * Creates and configures the WebGL renderer
   * @private
   */
  _setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.mountElement.clientWidth, this.mountElement.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.mountElement.appendChild(this.renderer.domElement);
  }

  /**
   * Creates the initial puzzle state and meshes
   * @private
   */
  _createPuzzle() {
    this.puzzleState = this.puzzle.createInitialState(this.size);
    this.pieceMeshes = this.puzzle.createPieceMeshes(this.puzzleGroup, this.puzzleState);
    this.puzzleGroup.scale.set(1, 1, 1);
  }

  /**
   * Binds event listeners for mouse, touch, and window events
   * @private
   */
  _setupEventListeners() {
    const canvas = this.renderer.domElement;
    
    this._boundHandlers = {
      pointerDown: (e) => this._handlePointerDown(e),
      pointerMove: (e) => this._handlePointerMove(e),
      pointerUp: (e) => this._handlePointerUp(e),
      wheel: (e) => this._handleWheel(e),
      resize: () => this._handleResize()
    };

    canvas.addEventListener('mousedown', this._boundHandlers.pointerDown);
    canvas.addEventListener('mousemove', this._boundHandlers.pointerMove);
    canvas.addEventListener('mouseup', this._boundHandlers.pointerUp);
    canvas.addEventListener('mouseleave', this._boundHandlers.pointerUp);
    canvas.addEventListener('wheel', this._boundHandlers.wheel, { passive: false });
    canvas.addEventListener('touchstart', this._boundHandlers.pointerDown, { passive: false });
    canvas.addEventListener('touchmove', this._boundHandlers.pointerMove, { passive: false });
    canvas.addEventListener('touchend', this._boundHandlers.pointerUp, { passive: false });
    window.addEventListener('resize', this._boundHandlers.resize);
  }

  /**
   * Starts the render loop using requestAnimationFrame
   * @private
   */
  _startRenderLoop() {
    const animate = () => {
      requestAnimationFrame(animate);
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  // Event handlers
  /**
   * Handles pointer down events (mouse and touch)
   * Initiates drag operations or pinch gestures
   * 
   * @param e - Pointer event (MouseEvent or TouchEvent)
   */
  _handlePointerDown(e) {
    e.preventDefault();
    if (this.isAnimating) return;
    
    if (e.touches && e.touches.length > 1) {
      this.touches = Array.from(e.touches);
      this.lastPinchDistance = this._getPinchDistance();
      return;
    }
    
    const { clientX, clientY } = this._getPointerCoords(e);
    this.isDragging = true;
    this.dragStart = { x: clientX, y: clientY };
    this.lastMousePos = { x: clientX, y: clientY };
    this.dragStartIntersection = this._getIntersection(clientX, clientY);
  }

  /**
   * Handles pointer move events (mouse and touch)
   * Updates camera rotation, layer rotation, or pinch zoom
   * 
   * @param e - Pointer event (MouseEvent or TouchEvent)
   */
  _handlePointerMove(e) {
    e.preventDefault();
    if (this.isAnimating) return;
    
    if (e.touches && e.touches.length > 1) {
      this.touches = Array.from(e.touches);
      const currentDistance = this._getPinchDistance();
      if (this.lastPinchDistance > 0) {
        const delta = currentDistance - this.lastPinchDistance;
        this.cameraController.zoom(-delta * 0.01);
      }
      this.lastPinchDistance = currentDistance;
      return;
    }
    
    if (!this.isDragging) return;
    
    const { clientX, clientY } = this._getPointerCoords(e);
    const deltaX = clientX - this.dragStart.x;
    const deltaY = clientY - this.dragStart.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (this.dragStartIntersection && distance > RubiksCube.DRAG_THRESHOLD && !this.rotatingGroup) {
      this._startLayerRotation(this.dragStartIntersection, deltaX, deltaY);
    } else if (this.rotatingGroup) {
      this._updateLayerRotation(deltaX, deltaY);
    } else if (!this.dragStartIntersection || distance < RubiksCube.DRAG_THRESHOLD) {
      this._rotateCamera(clientX, clientY);
    }
  }

  /**
   * Handles pointer move events (mouse and touch)
   * Updates camera rotation, layer rotation, or pinch zoom
   * 
   * @param e - Pointer event (MouseEvent or TouchEvent)
   */
  _handlePointerUp(e) {
    e.preventDefault();
    
    if (e.touches && e.touches.length === 0) {
      this.touches = [];
      this.lastPinchDistance = 0;
    }
    
    if (this.rotatingGroup) {
      this._finalizeLayerRotation();
    }
    this.isDragging = false;
    this.dragStartIntersection = null;
  }

  /**
   * Handles mouse wheel events for camera zoom
   * 
   * @param e - Wheel event
   */
  _handleWheel(e) {
    e.preventDefault();
    this.cameraController.zoom(e.deltaY * 0.001);
  }

  /**
   * Handles window resize events
   * Updates camera aspect ratio and renderer size
   * 
   * @private
   */
  _handleResize() {
    this.camera.aspect = this.mountElement.clientWidth / this.mountElement.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.mountElement.clientWidth, this.mountElement.clientHeight);
  }

  /**
   * Extracts pointer coordinates from mouse or touch event
   * 
   * @param e - Pointer event (MouseEvent or TouchEvent)
   * @returns Object with clientX and clientY coordinates
   */
  _getPointerCoords(e) {
    return {
      clientX: e.clientX || e.touches?.[0].clientX,
      clientY: e.clientY || e.touches?.[0].clientY
    };
  }

  /**
   * Calculates distance between two touch points for pinch gestures
   * 
   * @returns Distance in pixels, or 0 if fewer than 2 touches
   */
  _getPinchDistance() {
    if (this.touches.length < 2) return 0;
    const dx = this.touches[0].clientX - this.touches[1].clientX;
    const dy = this.touches[0].clientY - this.touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Performs raycasting to find puzzle piece intersections
   * 
   * @param clientX - Screen X coordinate
   * @param clientY - Screen Y coordinate
   * @returns Intersection object containing cubelet mesh, point, and face data, or null if no hit
   */
  _getIntersection(clientX, clientY) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.pieceMeshes, true);
    
    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj.parent && !this.pieceMeshes.includes(obj)) {
        obj = obj.parent;
      }
      if (this.pieceMeshes.includes(obj)) {
        return { 
          cubelet: obj, 
          point: intersects[0].point, 
          face: intersects[0].face 
        };
      }
    }
    return null;
  }

  /**
   * Rotates the camera around the puzzle
   * 
   * @param clientX - Current pointer X coordinate
   * @param clientY - Current pointer Y coordinate
   */
  _rotateCamera(clientX, clientY) {
    const moveDeltaX = clientX - this.lastMousePos.x;
    const moveDeltaY = clientY - this.lastMousePos.y;
    
    this.cameraController.rotate(moveDeltaX * 0.005, -moveDeltaY * 0.005);
    this.lastMousePos = { x: clientX, y: clientY };
  }

  /**
   * Initiates a layer rotation based on drag input
   * Creates a temporary rotation group and moves pieces into it
   * 
   * @param intersection - Raycasting intersection data
   * @param deltaX - Horizontal drag distance
   * @param deltaY - Vertical drag distance
   */
  _startLayerRotation(intersection, deltaX, deltaY) {
    const rotation = this.puzzle.getRotationFromDrag(
      intersection, 
      deltaX, 
      deltaY, 
      this.puzzleState
    );
    
    if (!rotation) return;

    const rotatingGroup = new THREE.Group();
    this.puzzleGroup.add(rotatingGroup);

    this.pieceMeshes.forEach(mesh => {
      if (this.puzzle.shouldPieceRotate(mesh, rotation)) {
        this.puzzleGroup.remove(mesh);
        rotatingGroup.add(mesh);
      }
    });

    this.rotatingGroup = {
      group: rotatingGroup,
      rotation,
      startDelta: { x: deltaX, y: deltaY }
    };

    this.callbacks.onRotationStart?.();
  }

  /**
   * Updates the visual rotation of the active layer during drag
   * 
   * @param deltaX - Total horizontal drag distance from start
   * @param deltaY - Total vertical drag distance from start
   */
  _updateLayerRotation(deltaX, deltaY) {
    if (!this.rotatingGroup) return;
    
    const totalDeltaX = deltaX - this.rotatingGroup.startDelta.x;
    const totalDeltaY = deltaY - this.rotatingGroup.startDelta.y;
    
    const angle = this.puzzle.calculateRotationAngle(
      this.rotatingGroup.rotation,
      totalDeltaX,
      totalDeltaY
    );
    
    this.rotatingGroup.group.rotation[this.rotatingGroup.rotation.axis] = angle;
  }

  /**
   * Completes a layer rotation
   * Snaps to nearest 90° angle and updates puzzle state if needed
   */
  _finalizeLayerRotation() {
    if (!this.rotatingGroup) return;
    
    const { group, rotation } = this.rotatingGroup;
    const currentAngle = group.rotation[rotation.axis];
    
    let targetAngle = 0;
    if (Math.abs(currentAngle) > RubiksCube.ROTATION_THRESHOLD) {
      targetAngle = currentAngle > 0 ? RubiksCube.SNAP_ANGLE : -RubiksCube.SNAP_ANGLE;
    }

    this._animateRotation(currentAngle, targetAngle, () => {
      if (targetAngle !== 0) {
        const turns = Math.round(targetAngle / RubiksCube.SNAP_ANGLE);
        this.puzzle.applyRotation(this.puzzleState, rotation, turns);
        this.callbacks.onMove?.();
      }

      this._mergeRotatingGroup(group);
      this.rotatingGroup = null;

      if (this.puzzle.isSolved(this.puzzleState)) {
        this.callbacks.onSolved?.();
      }
    });
  }

  /**
   * Animates rotation from current angle to target angle
   * 
   * @param startAngle - Starting rotation angle in radians
   * @param targetAngle - Target rotation angle in radians
   * @param onComplete - Callback when animation completes
   */
  _animateRotation(startAngle, targetAngle, onComplete) {
    this.isAnimating = true;
    const duration = PuzzleRenderer.ROTATION_SNAP_DURATION;
    const startTime = Date.now();
    const group = this.rotatingGroup.group;
    const axis = this.rotatingGroup.rotation.axis;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      group.rotation[axis] = startAngle + (targetAngle - startAngle) * eased;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        group.rotation[axis] = targetAngle;
        this.isAnimating = false;
        onComplete();
      }
    };
    animate();
  }

  /**
   * Merges rotating group back into main puzzle group
   * Preserves world transformations of child meshes
   * 
   * @param group - Temporary rotation group
   */
  _mergeRotatingGroup(group) {
    const children = [...group.children];
    children.forEach(child => {
      const worldPos = new THREE.Vector3();
      child.getWorldPosition(worldPos);
      const worldQuat = new THREE.Quaternion();
      child.getWorldQuaternion(worldQuat);
      
      group.remove(child);
      this.puzzleGroup.add(child);
      child.position.copy(worldPos);
      child.quaternion.copy(worldQuat);
    });
    
    this.puzzleGroup.remove(group);
  }

  // Public API
  /**
   * Scrambles the puzzle with random moves
   * Move count is determined by puzzle size
   */
  scramble() {
    const moveCount = this.puzzle.getScrambleMoveCount(this.size);
    const axes = ['x', 'y', 'z'];
    
    for (let i = 0; i < moveCount; i++) {
      const axis = axes[Math.floor(Math.random() * axes.length)];
      const layer = Math.floor(Math.random() * this.size);
      const turns = Math.floor(Math.random() * 3) + 1;
      const rotation = new Rotation(axis, layer);
      this.puzzle.applyRotation(this.puzzleState, rotation, turns);
    }
    
    this.pieceMeshes = this.puzzle.createPieceMeshes(this.puzzleGroup, this.puzzleState);
  }

  /**
   * Resets puzzle to solved state and resets camera
   */
  reset() {
    this.puzzleState = this.puzzle.createInitialState(this.size);
    this.pieceMeshes = this.puzzle.createPieceMeshes(this.puzzleGroup, this.puzzleState);
    this.cameraController.reset(this.puzzle.getCameraDistance(this.size));
  }

  /**
   * Updates the puzzle size variant
   * Recreates puzzle state and meshes
   * 
   * @param newSize - New size variant
   */
  updateSize(newSize) {
    this.size = newSize;
    this.puzzleState = this.puzzle.createInitialState(this.size);
    this.pieceMeshes = this.puzzle.createPieceMeshes(this.puzzleGroup, this.puzzleState);
  }

  /**
   * Updates both puzzle type and size simultaneously
   * Recreates puzzle state, meshes, and adjusts camera distance
   * 
   * @param newPuzzle - New puzzle instance
   * @param newSize - New size variant
   */
  updatePuzzleAndSize(newPuzzle, newSize) {
    this.puzzle = newPuzzle;
    this.size = newSize;
    this.puzzleState = newPuzzle.createInitialState(newSize);
    this.pieceMeshes = newPuzzle.createPieceMeshes(this.puzzleGroup, this.puzzleState, true);
  
    const newDistance = newPuzzle.getCameraDistance(newSize);
    this.cameraController.setDistance(newDistance);
  }

  /**
   * Animates a scale transition with optional camera reset
   * Puzzle scales down, calls midpoint callback, then scales back up
   * 
   * @param onMidpoint - Callback executed at animation midpoint
   * @param resetCamera - Whether to reset camera to default (default: false)
   * @returns Promise that resolves when animation completes
   * 
   * @example
   * await renderer.animateTransition(() => {
   *   renderer.scramble();
   * }, false);
   */
  animateTransition(onMidpoint, resetCamera = false) {
    return new Promise((resolve) => {
      this.isAnimating = true;
      
      const duration = PuzzleRenderer.ANIMATION_DURATION;
      const startTime = Date.now();
      
      const cameraState = this.cameraController.getState();
      const startTheta = cameraState.theta;
      const startPhi = cameraState.phi;
      const targetTheta = CameraController.DEFAULT_THETA;
      const targetPhi = CameraController.DEFAULT_PHI;
      
      let midpointReached = false;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const totalProgress = Math.min(elapsed / duration, 1);
        
        let progress, scale, theta, phi;
        if (totalProgress < 0.5) {
          progress = totalProgress * 2;
          const eased = progress * progress * progress;
          scale = 1 - eased;
          
          if (resetCamera) {
            theta = startTheta + (targetTheta - startTheta) * eased;
            phi = startPhi + (targetPhi - startPhi) * eased;
            this.cameraController.theta = theta;
            this.cameraController.phi = phi;
            this.cameraController.updatePosition();
          }
        } else {
          if (!midpointReached) {
            midpointReached = true;
            onMidpoint();
          }
          
          progress = (totalProgress - 0.5) * 2;
          const eased = 1 - Math.pow(1 - progress, 3);
          scale = eased;
          
          if (resetCamera) {
            this.cameraController.theta = targetTheta;
            this.cameraController.phi = targetPhi;
            this.cameraController.updatePosition();
          }
        }
        
        this.puzzleGroup.scale.set(scale, scale, scale);
        
        if (totalProgress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.puzzleGroup.scale.set(1, 1, 1);
          if (resetCamera) {
            this.cameraController.theta = targetTheta;
            this.cameraController.phi = targetPhi;
            this.cameraController.updatePosition();
          }
          this.isAnimating = false;
          resolve();
        }
      };
      
      animate();
    });
  }

  /**
   * Animates a complete puzzle switch
   * Scales down old puzzle, swaps to new puzzle, scales up new puzzle
   * 
   * @param newPuzzle - New puzzle instance
   * @param newSize - Size variant for new puzzle
   * @returns Promise that resolves when animation completes
   * 
   * @example
   * await renderer.animatePuzzleSwitch(new RubiksCube(), 4);
   */
  animatePuzzleSwitch(newPuzzle, newSize) {
    return new Promise((resolve) => {
      this.isAnimating = true;
      
      this.puzzleGroup.scale.set(1, 1, 1);
      
      const duration = PuzzleRenderer.ANIMATION_DURATION;
      const startTime = Date.now();
      
      const cameraState = this.cameraController.getState();
      const startTheta = cameraState.theta;
      const startPhi = cameraState.phi;
      const targetTheta = CameraController.DEFAULT_THETA;
      const targetPhi = CameraController.DEFAULT_PHI;
      
      let puzzleCleared = false;
      let puzzleLoaded = false;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const totalProgress = Math.min(elapsed / duration, 1);
        
        let progress, scale;
        
        if (totalProgress < 0.5) {
          progress = totalProgress * 2;
          const eased = progress * progress * progress;
          scale = 1 - eased;
          
          const theta = startTheta + (targetTheta - startTheta) * eased;
          const phi = startPhi + (targetPhi - startPhi) * eased;
          this.cameraController.theta = theta;
          this.cameraController.phi = phi;
          this.cameraController.updatePosition();
          
          if (!puzzleCleared && progress > 0.9) {
            puzzleCleared = true;
            while (this.puzzleGroup.children.length > 0) {
              this.puzzleGroup.remove(this.puzzleGroup.children[0]);
            }
            this.pieceMeshes = [];
          }
        } else {
          if (!puzzleLoaded) {
            puzzleLoaded = true;
            this.puzzle = newPuzzle;
            this.size = newSize;
            this.puzzleState = this.puzzle.createInitialState(this.size);
            this.pieceMeshes = this.puzzle.createPieceMeshes(this.puzzleGroup, this.puzzleState, true);
            
            const newDistance = this.puzzle.getCameraDistance(this.size);
            this.cameraController.setDistance(newDistance);
          }
          
          progress = (totalProgress - 0.5) * 2;
          const eased = 1 - Math.pow(1 - progress, 3);
          scale = eased;
          
          this.cameraController.theta = targetTheta;
          this.cameraController.phi = targetPhi;
          this.cameraController.updatePosition();
        }
        
        this.puzzleGroup.scale.set(scale, scale, scale);
        
        if (totalProgress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.puzzleGroup.scale.set(1, 1, 1);
          this.cameraController.theta = targetTheta;
          this.cameraController.phi = targetPhi;
          this.cameraController.updatePosition();
          this.isAnimating = false;
          resolve();
        }
      };
      
      animate();
    });
  }

  /**
   * Cleans up renderer resources and removes event listeners
   * Should be called before component unmount
   */
  dispose() {
    const canvas = this.renderer.domElement;
    canvas.removeEventListener('mousedown', this._boundHandlers.pointerDown);
    canvas.removeEventListener('mousemove', this._boundHandlers.pointerMove);
    canvas.removeEventListener('mouseup', this._boundHandlers.pointerUp);
    canvas.removeEventListener('mouseleave', this._boundHandlers.pointerUp);
    canvas.removeEventListener('wheel', this._boundHandlers.wheel);
    canvas.removeEventListener('touchstart', this._boundHandlers.pointerDown);
    canvas.removeEventListener('touchmove', this._boundHandlers.pointerMove);
    canvas.removeEventListener('touchend', this._boundHandlers.pointerUp);
    window.removeEventListener('resize', this._boundHandlers.resize);
    
    this.mountElement.removeChild(this.renderer.domElement);
    this.renderer.dispose();
  }
}