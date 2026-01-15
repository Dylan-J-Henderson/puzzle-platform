import { useState, useRef, useCallback, useEffect } from 'react';

export default function VirtualJoystick({ onMove, visible }) {
  const [knobPosition, setKnobPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  const maxDistance = 40;

  const handleStart = useCallback((e) => {
    e.preventDefault();
    setIsActive(true);
  }, []);

  const handleMove = useCallback((e) => {
    if (!isActive || !containerRef.current) return;
    
    e.preventDefault();
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    let dx = clientX - centerX;
    let dy = clientY - centerY;
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > maxDistance) {
      dx = (dx / distance) * maxDistance;
      dy = (dy / distance) * maxDistance;
    }
    
    setKnobPosition({ x: dx, y: dy });
    
    // Emit movement
    if (onMove) {
      onMove({
        x: dx / maxDistance,
        y: dy / maxDistance
      });
    }
  }, [isActive, onMove]);

  const handleEnd = useCallback(() => {
    setIsActive(false);
    setKnobPosition({ x: 0, y: 0 });
    if (onMove) {
      onMove({ x: 0, y: 0 });
    }
  }, [onMove]);

  useEffect(() => {
    if (!isActive) return;
    
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('touchend', handleEnd);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    
    return () => {
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
    };
  }, [isActive, handleMove, handleEnd]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="joystick-area touch-none select-none"
      onTouchStart={handleStart}
      onMouseDown={handleStart}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full border border-white/20" />
      </div>
      <div
        className="joystick-knob transition-transform duration-75"
        style={{
          transform: `translate(${knobPosition.x}px, ${knobPosition.y}px)`,
        }}
      />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/40 whitespace-nowrap">
        Orbit Camera
      </div>
    </div>
  );
}
