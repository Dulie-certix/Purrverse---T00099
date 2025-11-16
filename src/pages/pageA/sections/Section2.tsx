import Section2BG from "../../../assets/Section 02/Section 02 BG.gif";
import PlaneCat from "../../../assets/Section 02/plane cat.png";
import TopFadeMask from "../../../components/TopFadeMask";
import Stone from "../../../components/Section 02/Stone";

export default function Hero() {
  return (
      <section id="Section2" className="w-full h-full mt-[-68px] min-h-screen flex items-center justify-center relative">

            {/* background */}
            
                    <img src={Section2BG} alt="Section 2 Background" className="w-full h-full absolute object-cover" />
           
                    
        <div className="relative z-20 w-[1920px] h-[1080px]">
          <div className="w-[1748px] h-[812px] mt-[183px] ml-[119px] mb-[85px] mr-[51px]">

            <img 
              src={PlaneCat} 
              alt="Plane Cat" 
              className="absolute w-[260.5px] h-[284px] left-[829.9px]"
            />

            <h1 className="font-['Good_Pawoo'] font-normal text-[120px] leading-[210%] tracking-[0%] text-center align-middle uppercase text-white absolute top-[506px] left-[632px]">
              Tokenomics
            </h1>
            <Stone className="absolute top-[527px] left-[119.79px]" textMargin="mx-[52.21px]" title="Total Supply" subtitle="1,000,000,000 PURR" />
            <Stone className="absolute top-[655px] left-[769.79px]" textMargin="mx-[62.21px]" title="Community Rewards" subtitle="40% " />
            <Stone className="absolute top-[336px] left-[1381px]" rotation="-rotate-[58.65deg]" title="Liquidity" subtitle="20%" />
          </div>
        </div>
      </section>

  )
}