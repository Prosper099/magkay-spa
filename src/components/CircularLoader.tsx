import React from 'react';

export interface CircularLoaderProps {
  /** Size preset or pixel number */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Primary accent color of the spinning arc */
  color?: string;
  /** Background track color */
  trackColor?: string;
  /** Thickness of the stroke */
  strokeWidth?: number;
  /** Additional CSS classes */
  className?: string;
  /** Accessibility label */
  ariaLabel?: string;
}

const sizeMap = {
  xs: 16,
  sm: 24,
  md: 36,
  lg: 48,
  xl: 64,
};

export const CircularLoader: React.FC<CircularLoaderProps> = ({
  size = 'md',
  color = '#DE1B76',
  trackColor = 'rgba(255, 255, 255, 0.08)',
  strokeWidth,
  className = '',
  ariaLabel = 'Loading',
}) => {
  const dimension = typeof size === 'number' ? size : sizeMap[size] || 36;
  const stroke = strokeWidth || (dimension <= 24 ? 3 : dimension <= 48 ? 3.5 : 4);
  const radius = (dimension - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: dimension, height: dimension }}
    >
      <svg
        className="animate-spin"
        viewBox={`0 0 ${dimension} ${dimension}`}
        width={dimension}
        height={dimension}
        style={{ animationDuration: '0.85s' }}
      >
        {/* Background Track Circle */}
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        {/* Animated Rotating Arc (Open Ring with Round Cap, No Logo/Picture) */}
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.72} // ~28% visible arc
          strokeLinecap="round"
        />
      </svg>
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};
