import React, { useCallback } from 'react';
import PuzzleScene from '../components/common/PuzzleScene';
import PuzzleControls from '../components/ui/PuzzleControls';
import MobileJoystick from '../components/ui/MobileJoystick';

const Index = () => {
  const handleJoystickMove = useCallback((data) => {
    // This will be handled by the scene through context or events
    window.dispatchEvent(new CustomEvent('joystick-move', { detail: data }));
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-background">
      <PuzzleScene />
      <PuzzleControls />
      <MobileJoystick onMove={handleJoystickMove} />
    </div>
  );
};

export default Index;
