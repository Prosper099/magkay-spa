import React, { useEffect, useState } from 'react';
import { CircularLoader } from './CircularLoader';

interface InitialSplashLoaderProps {
  onFinish?: () => void;
  minDuration?: number;
}

export const InitialSplashLoader: React.FC<InitialSplashLoaderProps> = ({ 
  onFinish,
  minDuration = 1000
}) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 400);
    }, minDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [minDuration, onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0E] text-white transition-opacity duration-400 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading"
      role="status"
    >
      {/* Pure Circular Loader Animation without any logo or picture */}
      <div className="relative flex items-center justify-center">
        <CircularLoader size={48} strokeWidth={3.5} color="#DE1B76" trackColor="rgba(255, 255, 255, 0.08)" />
      </div>
    </div>
  );
};

