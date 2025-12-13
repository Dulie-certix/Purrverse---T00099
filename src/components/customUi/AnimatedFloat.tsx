import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimatedFloatProps extends Omit<HTMLMotionProps<'div'>, 'animate' | 'transition'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function AnimatedFloat({
  children,
  delay = 0,
  duration = 4,
  yOffset = 20,
  ...props
}: AnimatedFloatProps) {
  return (
    <motion.div
      animate={{ y: [0, -yOffset, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
