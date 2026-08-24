import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ 
  className = "w-5 h-5", 
  size 
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.59 20.15 9.17 19.77 7.92 19.03L7.62 18.85L4.5 19.67L5.33 16.62L5.13 16.31C4.32 15.02 3.8 13.5 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.03 12.23C8.15 12.4 9.74 14.86 12.18 15.91C12.76 16.16 13.22 16.31 13.57 16.42C14.16 16.61 14.7 16.58 15.12 16.52C15.6 16.45 16.59 15.92 16.8 15.34C17.01 14.75 17.01 14.25 16.95 14.15C16.89 14.04 16.73 13.98 16.49 13.86C16.24 13.74 15.04 13.15 14.82 13.07C14.59 12.99 14.43 12.95 14.27 13.19C14.1 13.44 13.63 13.98 13.49 14.15C13.34 14.31 13.2 14.33 12.96 14.21C12.71 14.09 11.93 13.83 11 13C10.28 12.36 9.79 11.56 9.65 11.32C9.5 11.08 9.63 10.94 9.76 10.82C9.87 10.71 10.01 10.53 10.13 10.39C10.25 10.24 10.29 10.14 10.37 9.98C10.45 9.81 10.41 9.67 10.35 9.55C10.29 9.43 9.82 8.27 9.62 7.79C9.43 7.33 9.23 7.39 9.08 7.38C8.94 7.38 8.78 7.37 8.62 7.37L8.53 7.33Z" />
    </svg>
  );
};

export const WhatsAppBadge: React.FC<{ className?: string; iconClassName?: string }> = ({
  className = "w-10 h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg",
  iconClassName = "w-6 h-6 text-white"
}) => {
  return (
    <div className={className}>
      <WhatsAppIcon className={iconClassName} />
    </div>
  );
};
