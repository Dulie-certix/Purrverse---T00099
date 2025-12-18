
import ShieldImg from "../../assets/Section 03/shield.png";
import { motion } from 'framer-motion';

interface FeatureCardProps {
  className?: string;
  title?: string;
  description?: string;
}

export default function FeatureCard({  className = "", title = "", description = "" }: FeatureCardProps) {
  return (
    <motion.div 
      layout
      className={`flex w-full max-w-full gap-4 sm:gap-5 3xl:h-[120px] 3xl:max-w-[588px] 3xl:gap-[20px] transition-transform duration-300 hover:scale-105 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ layout: { duration: 0.3 } }}
    >
        <motion.img 
            src={ShieldImg} 
            alt="Shield" 
            className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 md:h-24 md:w-24 3xl:h-[120px] 3xl:w-[120px]"
            animate={{ 
              rotate: 360,
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
        />
        <div className="flex flex-col justify-center">
            {title && (
            <h3 className="font-['Good_Pawoo'] align-middle text-2xl font-normal uppercase leading-tight text-[#000573] sm:text-3xl md:text-4xl 3xl:text-[40px] 3xl:leading-[210%]">
                {title}
            </h3>
            )}
            {description && (
            <p className="font-['Fredoka'] -mt-2 align-middle text-sm font-semibold leading-relaxed text-[#1D1F2F] sm:text-base md:text-lg 3xl:-mt-[30px] 3xl:text-[24px] 3xl:leading-[48px]">
                {description}
            </p>
            )}
        
        </div>
    </motion.div>
  );
}
