import AnimatedFloat from './customUi/AnimatedFloat';
import CloudImg from '../assets/cloud.png';

interface CloudProps {
  className?: string;
  delay?: number;
}

export default function Cloud({ className = '', delay = 0 }: CloudProps) {
  return (
    <AnimatedFloat className={className} delay={delay}>
      <img src={CloudImg} alt="Cloud" className="h-full w-full object-contain" />
    </AnimatedFloat>
  );
}