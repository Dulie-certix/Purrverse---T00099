
import HeroLogo from "../../../components/Hero/Hero Logo";
import heroBG from "../../../assets/Hero/heroBG.mp4";
import EngelCat from "../../../assets/Hero/Engel Cat.png";
import Logo1 from "../../../assets/Hero/Logo1.png";
import Logo4 from "../../../assets/Hero/Logo4.png";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import Ring from "../../../assets/Hero/Engel Ring.png";
import Cloud from "../../../components/Hero/Cloud";
import Mask from "../../../components/FadeMask";


export default function Hero() {
  return (
      <section id="Hero" className="w-full h-full min-h-screen w-full flex items-center justify-center relative">
      <Mask>
        <video
          className="w-full h-full object-cover mix-blend-screen"
          autoPlay
          muted
          loop
        >
          <source src={heroBG} type="video/mp4" />
        </video>
      </Mask>

      <div className="relative z-20 max-w-[1920px] min-h-[1181px]  flex flex-col justify-top items-center mx-[20px]">

        {/* Cat  */}
        <div  className="max-w-[783px] max-h-[836px] mt-[100px]" >
          <img src={EngelCat} alt="Engel Cat"/>
        </div>

        {/* logo set */}
        <div className="w-[1000px] h-[248px] flex flex-col justify-between mt-[-525px]">
          <div className="flex justify-between items-start">
              <HeroLogo>
                <img src={Logo1} alt="Logo 1" className="w-[37px] h-[37px]" />
              </HeroLogo>
              <HeroLogo>
                <BiLogoTelegram size={45}/>
              </HeroLogo>
          </div>
          <div className="flex justify-between items-end mt-[120px] mx-[60px]">
              <HeroLogo>
                <FaXTwitter size={50} />
              </HeroLogo> 
              <HeroLogo>
                <img src={Logo4} alt="Logo 4" className="w-[53px] h-[53px]          " />
              </HeroLogo>
          </div>
        </div>

        {/* Ring */}
        <div >
          <img src={Ring} alt="Ring" className="w-[350px] h-auto mt-[-555px]  ml-[40px]"/>         
        </div>

      {/* cloud set */}
      <div className="w-[1252px] h-[375px] absolute z-[-10]"> 
        <Cloud className="w-[555px] h-[340px] ml-[370px] mt-[700px]" />
        <Cloud className="w-[555px] h-[340px] ml-[0px] mt-[-375px]" />
        <Cloud className="w-[555px] h-[340px] ml-[700px] mt-[-300px]" />
      </div>
      </div>
      </section>
  );
};