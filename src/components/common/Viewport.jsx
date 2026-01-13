// src/components/common/Viewport.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Viewport = ({ scene, onRotate, cameraDistance = 5 }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (!scene) return; // Don't initialize without a scene

    // Get container dimensions with fallback
    const getSize = () => {
      const container = containerRef.current;
      if (!container) return { width: 800, height: 600 };
      
      const width = container.clientWidth || container.offsetWidth || 800;
      const height = container.clientHeight || container.offsetHeight || 600;
      
      return { width, height };
    };

    const { width, height } = getSize();

    // Scene setup
    const threeScene = new THREE.Scene();
    threeScene.background = new THREE.Color(0x0a0a0f);
    sceneRef.current = threeScene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    camera.position.set(cameraDistance, cameraDistance, cameraDistance);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting with shadows
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    threeScene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight1.position.set(10, 10, 10);
    directionalLight1.castShadow = true;
    directionalLight1.shadow.camera.left = -10;
    directionalLight1.shadow.camera.right = 10;
    directionalLight1.shadow.camera.top = 10;
    directionalLight1.shadow.camera.bottom = -10;
    directionalLight1.shadow.mapSize.width = 2048;
    directionalLight1.shadow.mapSize.height = 2048;
    threeScene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-5, -5, -5);
    threeScene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.2);
    directionalLight3.position.set(0, -10, 0);
    threeScene.add(directionalLight3);

    // Add scene to viewport
    threeScene.add(scene);

    // Mouse controls for rotation
    const onMouseDown = (e) => {
      if (e.button === 0) {
        isDraggingRef.current = true;
        previousMouseRef.current = { x: e.clientX, y: e.clientY };
        e.preventDefault();
      }
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current || !scene) return;
      e.preventDefault();

      const deltaX = e.clientX - previousMouseRef.current.x;
      const deltaY = e.clientY - previousMouseRef.current.y;

      scene.rotation.y += deltaX * 0.01;
      scene.rotation.x += deltaY * 0.01;

      previousMouseRef.current = { x: e.clientX, y: e.clientY };

      if (onRotate) {
        onRotate({ x: scene.rotation.x, y: scene.rotation.y, z: scene.rotation.z });
      }
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onContextMenu = (e) => {
      e.preventDefault();
    };

    const canvas = renderer.domElement;
    canvas.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('contextmenu', onContextMenu);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      renderer.render(threeScene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      
      const { width, height } = getSize();
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Force resize after a brief delay to ensure container is properly sized
    const resizeTimeout = setTimeout(() => handleResize(), 100);

    // Cleanup
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('contextmenu', onContextMenu);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (containerRef.current && renderer.domElement && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, [scene, onRotate, cameraDistance]);

  if (!scene) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white text-lg">Loading puzzle...</p>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full" style={{ minHeight: '100%' }} />;
};

export default Viewport;