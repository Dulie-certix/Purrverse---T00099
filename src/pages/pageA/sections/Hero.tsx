import React from "react";
import HeroLogo from "../../../components/HeroLogo";
import heroBg from "../../../assets/Hero/heroBG.mp4"
import EngelCat from "../../../assets/Hero/Engel Cat.png"



export default function Hero() {
  return (
    <section id="Hero" className="w-full h-auto relative">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted 
        loop
      >
        <source src={heroBg} type="video/mp4" />
      </video>
      <div className="relative z-10 max-w-[1920px] max-h-[1181px] h-screen flex flex-col justify-top items-center  mx-[20px]">
        <img src={EngelCat} alt="Enge Cat" className="max-w-[513px] max-h-[536px] mt-[100px]"/>

        <HeroLogo 
          logo={require("../../../assets/Logos/Logo1.png")} 
          title="Logo 1"
          mleft="ml-[-200px]"
          mtop="mt-[20px]"
          />
      
        


        
      </div>
    </section>
  );
};