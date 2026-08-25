import React, { useEffect, useState } from 'react';
import { MagkayLogo } from './MagkayLogo';
import { Sparkles, Flower2 } from 'lucide-react';

interface InitialSplashLoaderProps {
  onFinish?: () => void;
  minDuration?: number;
}

export const InitialSplashLoader: React.FC<InitialSplashLoaderProps> = ({ 
  onFinish,
  minDuration = 1200
}) => {
  const [progress, setProgress] = useState(15);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 10;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500);
    }, minDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [minDuration, onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090C] text-white transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading MagKay Spa & Salon"
      role="status"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#DE1B76]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#B38B6D]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center max-w-sm mx-auto px-6 text-center">
        
        {/* Animated Emblem Ring Container */}
        <div className="relative mb-6 flex items-center justify-center animate-float-gentle">
          {/* Outer rotating decorative ring */}
          <div className="absolute -inset-4 rounded-full border border-[#DE1B76]/30 animate-spin" style={{ animationDuration: '8s' }} />
          
          {/* Pulsing glow behind logo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#DE1B76]/30 to-[#FF4B99]/20 blur-xl animate-pulse" />
          
          {/* Logo Seal */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#14141C] border-2 border-[#DE1B76] flex items-center justify-center p-3 shadow-2xl shadow-[#DE1B76]/30">
            <MagkayLogo className="w-full h-full object-contain" />
          </div>

          {/* Sparkle badge */}
          <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#DE1B76] text-white flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Brand Name & Tagline */}
        <h2 className="text-2xl sm:text-3xl font-serif-luxury tracking-wider text-white font-bold mb-1">
          MAGKAY
        </h2>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-pink-400 mb-6 flex items-center gap-1.5 justify-center">
          <Flower2 className="w-3.5 h-3.5 animate-spin text-[#DE1B76]" style={{ animationDuration: '6s' }} />
          <span>Spa, Beauty & Skincare</span>
        </p>

        {/* Smooth Loading Progress Bar */}
        <div className="w-56 sm:w-64 bg-stone-900/90 rounded-full h-2 p-0.5 border border-stone-800 relative overflow-hidden shadow-inner mb-3">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-[#DE1B76] via-[#FF4B99] to-[#25D366] transition-all duration-300 ease-out shimmer-wrapper relative"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="flex items-center justify-between w-56 sm:w-64 text-[10px] font-semibold uppercase tracking-widest text-stone-400">
          <span>Preparing luxury sanctuary...</span>
          <span className="text-pink-400 font-mono">{progress}%</span>
        </div>

      </div>

      {/* Footer CAC Badge */}
      <div className="absolute bottom-8 text-[11px] text-stone-500 font-medium tracking-wide">
        KM 5 LASU-Isheri Road, Lagos • RC: 7215984
      </div>
    </div>
  );
};
