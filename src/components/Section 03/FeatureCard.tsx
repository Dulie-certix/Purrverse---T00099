
import ShieldImg from "../../assets/Section 03/shield.png";

interface FeatureCardProps {
  className?: string;
  title?: string;
  description?: string;
}

export default function FeatureCard({  className = "", title = "", description = "" }: FeatureCardProps) {
  return (
    <div className={`w-[588px] h-[120px] flex gap-[20px] opacity-100 ${className}`}>
        <img 
            src={ShieldImg} 
            alt="Shield" 
            className="w-[120px] h-[120px]"/>
        <div className="ml-[20px] flex flex-col justify-center my-[20px]">
            {title && (
            <h3 className="font-['Good_Pawoo'] font-normal text-[40px] leading-[210%] align-middle uppercase text-[#000573]">
                {title}
            </h3>
            )}
            {description && (
            <p className="font-['Fredoka'] font-semibold text-[24px] leading-[48px] align-middle text-[#1D1F2F] mt-[-30px]">
                {description}
            </p>
            )}
        
        </div>
    </div>
  );
}
