import React, { useState } from 'react';
import { CircularLoader } from './CircularLoader';

interface ImageWithLoadingProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
  fallbackSrc?: string;
}

const SPA_DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop';

export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  src,
  alt = 'MagKay Spa & Salon visual',
  className = '',
  wrapperClassName = '',
  fallbackSrc = SPA_DEFAULT_FALLBACK,
  onError,
  onLoad,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src || fallbackSrc);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  React.useEffect(() => {
    if (src) {
      setImgSrc(src);
      setIsLoaded(false);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#14141C] ${wrapperClassName}`}>
      {/* Circular spinner while image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#14141C] z-10">
          <CircularLoader size={28} strokeWidth={3} color="#DE1B76" trackColor="rgba(255, 255, 255, 0.06)" />
        </div>
      )}

      <img
        src={imgSrc || fallbackSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) {
            onLoad(e);
          }
        }}
        onError={(e) => {
          setIsLoaded(true);
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
          if (onError) {
            onError(e);
          }
        }}
        loading="lazy"
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};



