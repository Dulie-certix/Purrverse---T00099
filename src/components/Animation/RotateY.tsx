import { ReactNode } from 'react';

interface RotateYProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

export default function RotateY({ children, duration = 4, className = '' }: RotateYProps) {
  return (
    <div
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        animation: `spin-y ${duration}s linear infinite`,
      }}
    >
      {children}
    </div>
  );
}
