import React from 'react';

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
  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        className={className}
        onError={(e) => {
          if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
            e.currentTarget.src = fallbackSrc;
          }
          if (onError) {
            onError(e);
          }
        }}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};

