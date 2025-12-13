
import React from "react";

interface MaskProps {
  children?: React.ReactNode;
  className?: string;
  position?: 'top' | 'bottom';
  fadeIntensity?: number;
  bgColor?: string;
}

const TopFadeMask: React.FC<MaskProps> = ({
  children,
  className = '',
  position = 'top',
  fadeIntensity = 20,
  bgColor = 'transparent',
}) => {
  const isBottom = position === 'bottom';
  const direction = isBottom ? 'to top' : 'to bottom';
  
  const maskStyle = {
    maskImage: `linear-gradient(${direction}, ${bgColor} 0%, black ${fadeIntensity}%, black 100%)`,
    WebkitMaskImage: `linear-gradient(${direction}, ${bgColor} 0%, black ${fadeIntensity}%, black 100%)`,
  };

  return (
    <div
      className={`absolute inset-0 h-full w-full ${className}`}
      style={maskStyle}
    >
      {children}
    </div>
  );
};

export default TopFadeMask;
