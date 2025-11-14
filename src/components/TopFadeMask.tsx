import React from "react";

interface MaskProps {
  children?: React.ReactNode;
  className?: string;
}

const TopFadeMask: React.FC<MaskProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-screen [mask-image:linear-gradient(to_bottom,transparent_0%,black_260px,black_100%)] [webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_260px,black_100%)] ${className}`}
    >
      {children}
    </div>
  );
};

export default TopFadeMask;