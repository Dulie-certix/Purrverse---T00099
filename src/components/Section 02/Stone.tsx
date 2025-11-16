import StoneImg from "../../assets/Section 02/Stone.png"

interface StoneProps {
  className?: string;
  title?: string;
  subtitle?: string;
  textMargin?: string;
  rotation?: string;
}

export default function Stone({ className = "", title = "", subtitle = "", textMargin = "", rotation = "" }: StoneProps) {
    return (
      <div className={`w-[380px] h-[340px] flex justify-center items-center  ${className}`}>
        <img  
          src={StoneImg} 
          alt="Stone"
          className={rotation}
        />
        <div className={`absolute rounded-2xl p-5 gap-2.5 bg-[#00000099] ${textMargin}`}>
            <div className="font-['Good_Pawoo'] font-normal text-[40px] leading-[100%] tracking-[0%] text-center align-middle uppercase text-white">
              {title}
            </div>
            <div className="font-['Fredoka'] font-semibold text-[24px] leading-[48px] tracking-[0%] text-center align-middle text-white">
              {subtitle}
            </div>

        </div>
      </div>
    );
  }