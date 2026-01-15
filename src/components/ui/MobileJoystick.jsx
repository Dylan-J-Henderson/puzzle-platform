import React, { useEffect, useRef } from 'react';
import nipplejs from 'nipplejs';

const MobileJoystick = ({ onMove }) => {
  const joystickRef = useRef(null);
  const joystickInstanceRef = useRef(null);

  useEffect(() => {
    // Only show on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice || !joystickRef.current) return;

    joystickInstanceRef.current = nipplejs.create({
      zone: joystickRef.current,
      mode: 'static',
      position: { left: '50%', top: '50%' },
      color: 'rgba(255, 255, 255, 0.5)',
      size: 100,
    });

    joystickInstanceRef.current.on('move', (evt, data) => {
      if (onMove) {
        onMove(data);
      }
    });

    joystickInstanceRef.current.on('end', () => {
      if (onMove) {
        onMove({ force: 0, angle: { radian: 0 } });
      }
    });

    return () => {
      if (joystickInstanceRef.current) {
        joystickInstanceRef.current.destroy();
      }
    };
  }, [onMove]);

  // Only render on touch devices
  const isTouchDevice = typeof window !== 'undefined' && 
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  if (!isTouchDevice) return null;

  return (
    <div
      ref={joystickRef}
      className="joystick-zone"
      style={{ touchAction: 'none' }}
    />
  );
};

export default MobileJoystick;
