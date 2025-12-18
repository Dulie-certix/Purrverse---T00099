import { motion } from 'framer-motion';
import Section1BG from '../../../assets/Section 01/Section 01 BG.gif';
import CatImage from '../../../assets/Section 01/cat.png';
import SchoolCatImage from '../../../assets/Section 01/School Cat.png';
import RoboCatImage from '../../../assets/Section 01/Robo Cat.png';
import BlackCatImage from '../../../assets/Section 01/Black Cat.png';
import NASACatImage from '../../../assets/Section 01/NASA Cat.png';
import TopFadeMask from '../../../components/TopFadeMask';
import AnimatedElement from '../../../components/Animation/AnimatedElement';
import Phase from '../../../components/Section 01/Phase';
export default function Section1() {
  return (
    <section
      id="Section1"
      className="3xl:-mt-[260px] relative z-10 -mt-20 flex h-full items-center justify-center overflow-visible md:-mt-40"
    >
      {/* BackGround */}
      <TopFadeMask position="top">
        <TopFadeMask position="bottom" bgColor="#0a0a0a">
          <img
            src={Section1BG}
            alt="Section 1 Background"
            className="h-full w-full object-cover"
          />
        </TopFadeMask>
      </TopFadeMask>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1920px] flex-col items-center justify-center">
        <div className="3xl:px-[0px] 3xl:mb-[68px] 3xl:h-[1080px] mx-4 mb-10 w-full max-w-[1680px] md:mb-12 md:px-[0px] lg:px-[100px] xl:px-[200px] 2xl:px-[60px]">
          {/* NASA Cat */}
          <AnimatedElement animation="fade-right" duration={800}>
            <motion.img
              src={NASACatImage}
              alt="NASA Cat"
              className="3xl:w-[285px] 3xl:mt-[250px] mt-10 ml-4 h-auto w-32 sm:mt-24 sm:ml-8 sm:w-40 md:mt-32 md:ml-12 md:w-48 lg:ml-20 lg:w-56 2xl:mt-[194px] 2xl:ml-[202px]"
              animate={{
                y: [50, -20, 50],
                x: [-300, 90, -300],
                rotate: [0, 20, 0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200} duration={800}>
            <div className="-mt-6 mb-6 flex items-center justify-center text-center font-['Good_Pawoo'] text-5xl leading-[210%] font-normal tracking-normal text-white uppercase sm:-mt-20 sm:text-6xl md:-mt-32 md:mb-8 md:text-7xl lg:text-8xl 2xl:-mt-[185px] 2xl:mb-[40px] 2xl:text-[120px]">
              Roadmap
            </div>
          </AnimatedElement>

          <div className="xl:flex-warp 3xl:gap-[45px] mt-0 flex w-full flex-col items-center justify-center gap-6 px-[20px] sm:gap-8 sm:px-[100px] sm:px-[150px] md:grid md:gap-8 md:px-[0px] lg:grid-cols-2 lg:gap-20 2xl:-mt-[54px] 2xl:flex 2xl:h-[526px] 2xl:flex-row 2xl:gap-[25px]">
            {/* Phases */}
            <AnimatedElement animation="zoom-in" delay={0} duration={700}>
              <Phase
                text="Phase"
                text1="1"
                contentText="Catnap Awakening"
                listItems={[
                  'Brand & mascot creation',
                  'Launch of official website & whitepaper',
                  'Community building: Discord, X, Telegram',
                  'Token launch: $PURR goes live',
                  'Initial airdrop campaign begins',
                ]}
                imageSrc={CatImage}
                imageWidth="w-[150px]"
                isInRoadmap={true}
              />
            </AnimatedElement>
            <AnimatedElement animation="zoom-in" delay={150} duration={700}>
              <Phase
                text="Phase"
                text1="2"
                contentText="Pawprints on the Blockchain"
                listItems={[
                  'DEX listings & liquidity pool launch',
                  'Staking system with cute NFT rewards',
                  'Release of limited-edition Cat NFTs',
                  'Launch of Cat Council DAO governance',
                  'First community proposals & voting',
                ]}
                imageSrc={SchoolCatImage}
                imageWidth="w-[79px]"
                isInRoadmap={true}
              />
            </AnimatedElement>
            <AnimatedElement animation="zoom-in" delay={300} duration={700}>
              <Phase
                text="Phase"
                text1="3"
                contentText="Purrverse Expansion"
                listItems={[
                  'Cross-chain bridging integration',
                  'Gamified missions & leaderboard',
                  'NFT marketplace beta launch',
                  'PurrMap: interactive explorer for holders',
                  'Strategic partnerships with Web3 projects',
                ]}
                imageSrc={RoboCatImage}
                imageWidth="w-[150px]"
                isInRoadmap={true}
              />
            </AnimatedElement>
            <AnimatedElement animation="zoom-in" delay={450} duration={700}>
              <Phase
                text="Phase"
                text1="4"
                contentText="Cosmic Catventures"
                listItems={[
                  'Full Purrverse metaverse experience begins',
                  'Play-to-Earn minigames go live',
                  'Mobile app for managing assets & NFTs',
                  'IRL merch + collabs',
                  'Continuous growth, updates, and surprises',
                ]}
                imageSrc={BlackCatImage}
                imageWidth="w-[150px]"
                isInRoadmap={true}
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
