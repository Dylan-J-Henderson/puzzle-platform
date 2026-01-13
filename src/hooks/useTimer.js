// src/hooks/useTimer.js
import { useState, useRef, useEffect } from 'react';

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerIntervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - elapsedTime;
      timerIntervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [isRunning, elapsedTime]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  return {
    isRunning,
    elapsedTime,
    start,
    stop,
    reset,
  };
};

export const formatTime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
};