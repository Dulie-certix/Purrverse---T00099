import React from "react";

interface MaskProps {
  children?: React.ReactNode;
  className?: string;
}

const Mask: React.FC<MaskProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-screen [mask-image:linear-gradient(to_bottom,black_0%,black_calc(100%-260px),transparent_100%)] [webkit-mask-image:linear-gradient(to_bottom,black_0%,black_calc(100%-260px),transparent_100%)] ${className}`}
    >
      {children}
    </div>
  );
};

export default Mask;
