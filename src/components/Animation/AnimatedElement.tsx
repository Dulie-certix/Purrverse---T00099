import { ReactNode, cloneElement, isValidElement } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const getAnimationStyles = (animation: AnimationType, isVisible: boolean) => {
  const baseStyle = {
    transition: 'all',
    opacity: isVisible ? 1 : 0,
  };

  if (isVisible) {
    return { ...baseStyle, transform: 'translate(0, 0) scale(1)' };
  }

  switch (animation) {
    case 'fade-up':
      return { ...baseStyle, transform: 'translateY(40px)' };
    case 'fade-down':
      return { ...baseStyle, transform: 'translateY(-40px)' };
    case 'fade-left':
      return { ...baseStyle, transform: 'translateX(40px)' };
    case 'fade-right':
      return { ...baseStyle, transform: 'translateX(-40px)' };
    case 'zoom-in':
      return { ...baseStyle, transform: 'scale(0.95)' };
    case 'zoom-out':
      return { ...baseStyle, transform: 'scale(1.05)' };
    default:
      return baseStyle;
  }
};

export default function AnimatedElement({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const animationStyles = getAnimationStyles(animation, isVisible);

  if (isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      ref,
      style: {
        ...(children.props.style || {}),
        ...animationStyles,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      },
    });
  }

  return children;
}
