
import CloudImg from "../../assets/Hero/Cloud.png";

interface CloudProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function Cloud({  className = "" }: CloudProps) {
    return (
      <div  >
        <img 
          src={CloudImg} 
          alt="Cloud" 
          className={className}
        />
      </div>
    );
  }