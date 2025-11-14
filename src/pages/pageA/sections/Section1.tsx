import React from "react";
import Section1BG from "../../../assets/Section 01/Section 01 BG.gif";
import CatImage from "../../../assets/Section 01/cat.png";
import SchoolCatImage from "../../../assets/Section 01/School Cat.png";
import RoboCatImage from "../../../assets/Section 01/Robo Cat.png";
import BlackCatImage from "../../../assets/Section 01/Black Cat.png";
import NASACatImage from "../../../assets/Section 01/NASA Cat.png";
import TopFadeMask from "../../../components/TopFadeMask";
import Phase from "../../../components/Section 01/Phase";
export default function Section1() {
  return (
    <section id="Section1" className="w-full h-full min-h-screen relative -mt-[260px]">
        
        {/* BackGround */}
        <TopFadeMask>
          <img src={Section1BG} alt="Section 1 Background" className="w-full h-full object-cover" />
        </TopFadeMask>

        {/* Content */}
        <div className="relative z-10 max-w-[1920px] max-h-[1080px] w-full h-full flex flex-col justify-center items-center mx-[20px]">
        <div className="w-[1680px] h-[1080px] mb-[68px] mx-[100px]">

          {/* NASA Cat */}
          <img 
            src={NASACatImage} 
            alt="NASA Cat" 
            className="w-[285px] h-auto mt-[194px] ml-[202px]"/>

          <div className=" font-['Good_Pawoo'] font-normal text-[120px] leading-[210%] tracking-normal text-center uppercase flex item-center justify-center text-white mt-[-245px] mb-[40px]">
            Roadmap
          </div>

        
        <div className="w-full h-[526px] mt-[-54px] rotate-0 opacity-100 gap-[45px] flex">

          {/* Phases */}
          <Phase 
            text="Phase"
            text1="1"
            contentText="Catnap Awakening"
            listItems={["Brand & mascot creation","Launch of official website & whitepaper","Community building: Discord, X, Telegram", "Token launch: $PURR goes live", "Initial airdrop campaign begins"]}
            imageSrc={CatImage}
            imageWidth="w-[150px]"
          />
          <Phase 
            text="Phase"
            text1="2"
            contentText="Pawprints on the Blockchain"
            listItems={["DEX listings & liquidity pool launch","Staking system with cute NFT rewards", "Release of limited-edition Cat NFTs", "Launch of Cat Council DAO governance", "First community proposals & voting"]}
            imageSrc={SchoolCatImage}
            imageWidth="w-[79px]"
          />
          <Phase 
            text="Phase"
            text1="3"
            contentText="Purrverse Expansion"
            listItems={["Cross-chain bridging integration","Gamified missions & leaderboard", "NFT marketplace beta launch", "PurrMap: interactive explorer for holders", "Strategic partnerships with Web3 projects"]}
            imageSrc={RoboCatImage}
            imageWidth="w-[150px]"
          />
          <Phase 
            text="Phase"
            text1="4"
            contentText="Cosmic Catventures"
            listItems={["Full Purrverse metaverse experience begins","Play-to-Earn minigames go live","Mobile app for managing assets & NFTs", "IRL merch + collabs", "Continuous growth, updates, and surprises"]}
            imageSrc={BlackCatImage}
            imageWidth="w-[150px]"
          />
          </div>
        </div>
        </div>
    </section>
  );
};
