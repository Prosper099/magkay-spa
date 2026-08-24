import React from 'react';
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
  // If explicitly requested as the loaded image or as a fallback
  if (variant === 'image') {
    const sizeClasses = {
      sm: 'w-8 h-8',
      md: 'w-11 h-11',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    }[size];

    return (
      <div className={`rounded-xl overflow-hidden bg-black flex items-center justify-center shrink-0 border border-pink-500/20 ${sizeClasses} ${className}`}>
        <img 
          src={SPA_ASSETS.logo} 
          alt="MagKay Spa Official Logo" 
          className="w-full h-full object-cover" 
        />
      </div>
    );
  }

  // Crisp SVG Vector rendering of the exact MagKay Spa logo
  // (Hot pink lotus arch with star on top, masseuse massage silhouette inside, and MagKay Spa typography)
  const iconSizes = {
    sm: { width: 32, height: 32 },
    md: { width: 44, height: 44 },
    lg: { width: 56, height: 56 },
    xl: { width: 80, height: 80 },
  }[size];

  if (variant === 'icon') {
    return (
      <div className={`relative rounded-xl overflow-hidden bg-[#0A0A0C] border border-[#DE1B76]/30 flex items-center justify-center p-1.5 shrink-0 shadow-sm ${className}`}>
        <svg
          viewBox="0 0 160 160"
          width={iconSizes.width}
          height={iconSizes.height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top 4-pointed Star */}
          <path
            d="M80 6 L84 20 L98 24 L84 28 L80 42 L76 28 L62 24 L76 20 Z"
            fill="#DE1B76"
          />

          {/* Stylized Outer Lotus Petals */}
          <path
            d="M80 34 C94 48 116 70 126 102 C120 86 106 72 90 62 C104 80 114 102 108 128 C96 114 88 100 80 78 C72 100 64 114 52 128 C46 102 56 80 70 62 C54 72 40 86 34 102 C44 70 66 48 80 34 Z"
            fill="#DE1B76"
          />

          {/* Silhouette: Masseuse and Client on Spa Massage Bed */}
          {/* Masseuse head/bun */}
          <circle cx="80" cy="80" r="6" fill="#DE1B76" />
          <circle cx="78" cy="74" r="3" fill="#DE1B76" />
          
          {/* Masseuse body leaning over */}
          <path
            d="M74 86 C77 84 83 84 86 86 C90 92 88 102 82 106 C78 104 74 96 74 86 Z"
            fill="#DE1B76"
          />
          {/* Arms reaching down in massage motion */}
          <path
            d="M84 90 C92 94 96 102 92 108 C86 104 82 98 80 94 Z"
            fill="#DE1B76"
          />

          {/* Client lying face-down on table */}
          {/* Client head on left */}
          <ellipse cx="64" cy="112" rx="5" ry="4" fill="#DE1B76" />
          {/* Client relaxed body on massage table */}
          <path
            d="M60 114 C72 110 88 110 102 114 C98 118 70 118 60 114 Z"
            fill="#DE1B76"
          />
          {/* Spa table line */}
          <line x1="50" y1="120" x2="110" y2="120" stroke="#DE1B76" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // Full Variant: Logo Icon + Official 'MagKay Spa' Typography
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative rounded-xl overflow-hidden bg-[#0A0A0C] border border-[#DE1B76]/30 flex items-center justify-center p-1 shrink-0 shadow-sm ${
        size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : size === 'xl' ? 'w-20 h-20' : 'w-11 h-11'
      }`}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M80 6 L84 20 L98 24 L84 28 L80 42 L76 28 L62 24 L76 20 Z" fill="#DE1B76" />
          <path
            d="M80 34 C94 48 116 70 126 102 C120 86 106 72 90 62 C104 80 114 102 108 128 C96 114 88 100 80 78 C72 100 64 114 52 128 C46 102 56 80 70 62 C54 72 40 86 34 102 C44 70 66 48 80 34 Z"
            fill="#DE1B76"
          />
          <circle cx="80" cy="80" r="6" fill="#DE1B76" />
          <circle cx="78" cy="74" r="3" fill="#DE1B76" />
          <path d="M74 86 C77 84 83 84 86 86 C90 92 88 102 82 106 C78 104 74 96 74 86 Z" fill="#DE1B76" />
          <path d="M84 90 C92 94 96 102 92 108 C86 104 82 98 80 94 Z" fill="#DE1B76" />
          <ellipse cx="64" cy="112" rx="5" ry="4" fill="#DE1B76" />
          <path d="M60 114 C72 110 88 110 102 114 C98 118 70 118 60 114 Z" fill="#DE1B76" />
          <line x1="50" y1="120" x2="110" y2="120" stroke="#DE1B76" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-xl sm:text-2xl font-bold tracking-wider text-white">
            MAGKAY
          </span>
          <span className="text-xl sm:text-2xl font-bold font-serif italic text-[#DE1B76]">
            SPA
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-medium mt-1">
          Unisex Salon & Wellness Center
        </span>
      </div>
    </div>
  );
};
