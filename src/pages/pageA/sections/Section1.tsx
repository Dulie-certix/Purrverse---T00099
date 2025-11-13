import React from "react";
import Section1BG from "../../../assets/Section 01/Section 01 BG.gif";
import Mask from "../../../components/FadeMask";
export default function Section1() {
  return (
    <section id="Section1" className="w-full h-full min-h-screen flex items-center justify-center relative -mt-[260px]">
        
        <div className="max-w-[1920px] max-h-[820px] w-full h-full flex flex-col justify-center items-center mx-[20px] ">

        {/* BackGround */}
         
        <Mask>
          <img src={Section1BG} alt="Section 1 Background" className="w-full h-full object-cover mix-blend-screen" />
        </Mask>
         

        </div>
    </section>
    
  );
};
