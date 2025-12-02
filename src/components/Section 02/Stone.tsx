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
      <div className={`flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 3xl:h-[340px] 3xl:w-[380px] ${className}`}>
        <img  
          src={StoneImg} 
          alt="Stone"
          className={`h-full w-full ${rotation}`}
        />
        <div className={`absolute gap-2 rounded-2xl bg-[#00000099] p-3 sm:p-4 3xl:p-5 ${textMargin}`}>
            <div className="font-['Good_Pawoo'] text-center align-middle text-2xl font-normal uppercase leading-[100%] tracking-[0%] text-white sm:text-3xl 3xl:text-[40px]">
              {title}
            </div>
            <div className="font-['Fredoka'] text-center align-middle text-lg font-semibold leading-relaxed tracking-[0%] text-white sm:text-xl 3xl:text-[24px] 3xl:leading-[48px]">
              {subtitle}
            </div>

        </div>
      </div>
    );
  }