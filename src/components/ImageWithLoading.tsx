import React, { useState } from 'react';
import { Flower2 } from 'lucide-react';

interface ImageWithLoadingProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Loading Skeleton & Shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#161622] flex items-center justify-center shimmer-wrapper z-0">
          <Flower2 className="w-6 h-6 text-stone-700 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};
