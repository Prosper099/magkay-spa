import React, { useState } from 'react';
import { Flower2, ImageOff } from 'lucide-react';

interface ImageWithLoadingProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  fallbackSrc?: string;
}

export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  src,
  alt = 'MagKay Spa & Salon visual',
  className = '',
  wrapperClassName = '',
  fallbackSrc,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [isCompletelyBroken, setIsCompletelyBroken] = useState(false);

  // Sync if prop src changes
  React.useEffect(() => {
    setCurrentSrc(src);
    setHasTriedFallback(false);
    setIsCompletelyBroken(false);
    setIsLoaded(false);
  }, [src]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasTriedFallback && fallbackSrc && fallbackSrc !== currentSrc) {
      setHasTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setIsCompletelyBroken(true);
      setIsLoaded(true);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#161622] ${wrapperClassName}`}>
      {/* Loading Skeleton & Shimmer */}
      {!isLoaded && !isCompletelyBroken && (
        <div className="absolute inset-0 bg-[#161622] flex items-center justify-center shimmer-wrapper z-10">
          <Flower2 className="w-6 h-6 text-[#DE1B76]/50 animate-spin" style={{ animationDuration: '4s' }} />
        </div>
      )}

      {/* Fallback Display if both primary and fallback failed */}
      {isCompletelyBroken ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#14141A] text-stone-400">
          <ImageOff className="w-8 h-8 text-stone-600 mb-2" />
          <span className="text-xs text-stone-500 font-medium">Image unavailable</span>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          referrerPolicy="no-referrer"
          {...props}
        />
      )}
    </div>
  );
};
