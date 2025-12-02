
import React from "react";

interface MaskProps {
  children?: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
}

const TopFadeMask: React.FC<MaskProps> = ({ children, className = "", position = "top" }) => {
  const isBottom = position === "bottom";
  const positionClass = isBottom ? "bottom-0" : "top-0";
  const maskClass = isBottom 
    ? "[mask-image:linear-gradient(to_top,transparent_0%,black_260px,black_100%)] [webkit-mask-image:linear-gradient(to_top,transparent_0%,black_260px,black_100%)]"
    : "[mask-image:linear-gradient(to_bottom,transparent_0%,black_260px,black_100%)] [webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_260px,black_100%)]";

  return (
    <div
      className={`absolute ${positionClass} left-0 w-full h-full object-cover z-0 ${maskClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default TopFadeMask;