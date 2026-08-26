import React, { useState } from 'react';

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
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src || fallbackSrc);

  React.useEffect(() => {
    if (src) {
      setImgSrc(src);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <img
        src={imgSrc || fallbackSrc}
        alt={alt}
        className={className}
        onError={(e) => {
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


