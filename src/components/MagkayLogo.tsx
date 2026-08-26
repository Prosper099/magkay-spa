import React, { useState } from 'react';
import { Flower2 } from 'lucide-react';
import { SPA_ASSETS } from '../data/spaData';

interface MagkayLogoProps {
  className?: string;
  variant?: 'icon' | 'full' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const MagkayLogo: React.FC<MagkayLogoProps> = ({ 
  className = '', 
  variant = 'full',
  size = 'md' 
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9 sm:w-11 sm:h-11',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  }[size];

  const logoGraphic = (
    <div className={`relative rounded-xl overflow-hidden bg-[#0A0A0C] border border-[#DE1B76]/40 flex items-center justify-center p-0.5 shrink-0 shadow-sm ${sizeClasses}`}>
      {hasError ? (
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#DE1B76] to-[#800F44] flex items-center justify-center text-white">
          <Flower2 className="w-1/2 h-1/2 text-white animate-pulse" />
        </div>
      ) : (
        <img 
          src={SPA_ASSETS.logo} 
          alt="MagKay Spa Official Logo" 
          className="w-full h-full object-cover rounded-lg"
          loading="eager"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );

  // Icon only variant
  if (variant === 'icon' || variant === 'image') {
    return (
      <div className={className}>
        {logoGraphic}
      </div>
    );
  }

  // Full Variant: Logo Icon + Official 'MagKay Spa' Typography
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {logoGraphic}

      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
          <span className="text-lg sm:text-2xl font-bold tracking-wider text-white">
            MAGKAY
          </span>
          <span className="text-lg sm:text-2xl font-bold font-serif italic text-[#DE1B76]">
            SPA
          </span>
        </div>
        <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-400 font-medium mt-1 truncate">
          Unisex Salon & Wellness Center
        </span>
      </div>
    </div>
  );
};
