import { ReactNode } from 'react';

interface ShadowProps {
  children: ReactNode;
  size?: number;
  color?: string;
  blur?: number;
}

export default function Shadow({ children, size , color , blur }: ShadowProps) {
  const shadowStyle = {
    boxShadow: `0 ${size}px ${blur}px ${color}`
  };

  return (
    <div style={shadowStyle}>
      {children}
    </div>
  );
}