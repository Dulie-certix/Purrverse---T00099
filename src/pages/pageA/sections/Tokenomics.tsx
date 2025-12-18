import Section2BG from '../../../assets/Section 02/Section 02 BG.gif';
import PlaneCat from '../../../assets/Section 02/plane cat.png';
import Stone from '../../../components/Section 02/Stone';
import TopFadeMask from '../../../components/TopFadeMask';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function Hero() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.3], [400, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  
  return (
    <section
      id="Section2"
      className="3xl:-mt-[68px] relative flex w-full justify-center py-12 lg:-mt-8 lg:py-20"
    >
      {/* background */}
      <div className="absolute inset-0 z-0">
        <TopFadeMask position="top" fadeIntensity={15} bgColor="#0a0a0a">
          <TopFadeMask position="bottom" fadeIntensity={35} >
            <img
              src={Section2BG}
              alt="Section 2 Background"
              className="h-full w-full object-cover"
            />
          </TopFadeMask>
        </TopFadeMask>
      </div>

      <div className="3xl:max-w-[1920px] relative z-0 h-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="3xl:max-w-[1748px] relative mx-auto h-auto w-full max-w-6xl">
          <motion.img
            ref={ref}
            src={PlaneCat}
            alt="Plane Cat"
            className="3xl:left-[829.9px] 3xl:top-[120px] 3xl:h-[284px] 3xl:w-[260.5px] 3xl:translate-x-0 absolute top-0 left-1/2 mt-[150px] h-32 h-58 w-28 w-50 -translate-x-1/2 lg:mt-[0px]"
            initial={{ opacity: 0, x: 200 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : 300,
              y: isInView ? [0, -30, 0] : 0
            }}
            style={{ x }}
            transition={{ 
              opacity: { duration: 1, ease: "easeOut" },
              x: { duration: 1, ease: "easeOut" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
          />

          <h1 className="3xl:pt-[0px] 3xl:absolute 3xl:left-[632px] 3xl:top-[506px] 3xl:mb-0 3xl:text-[120px] mt-[-50px] mb-12 text-center align-middle font-['Good_Pawoo'] text-5xl leading-[210%] font-normal tracking-[0%] text-white uppercase sm:text-6xl md:text-7xl lg:mt-[0px] lg:mb-16 lg:pt-[200px] lg:text-8xl xl:pt-[250px] 2xl:top-[0px]">
            Tokenomics
          </h1>

          <div className="3xl:h-[1080px] 2xl:h-[200px] relative h-[950px] sm:mt-[-130px] sm:h-[800px] md:h-[700px] lg:mt-[-500px] lg:h-[800px] xl:mt-[-650px] 2xl:mt-[0px]">
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Stone
                className="3xl:left-[119.79px] 3xl:top-[507px] absolute top-[300px] left-[50px] sm:top-[350px] sm:left-[0px] md:top-[300px] md:left-[0px] lg:top-[380px] lg:left-[0px] xl:top-[350px] xl:left-[-30px] 2xl:top-[-253px] 2xl:left-[-100px]"
                textMargin="mx-[30px] sm:mx-[20px] 3xl:mx-[52.21px]"
                title="Total Supply"
                subtitle="1,000,000,000 PURR"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", }}
            >
              <Stone
                className="3xl:left-[769.79px] 3xl:top-[655px] absolute top-[550px] left-[50px] sm:top-[550px] sm:left-[200px] md:top-[400px] md:left-[250px] lg:top-[500px] lg:left-[300px] xl:top-[520px] xl:left-[450px] 2xl:top-[-130px] 2xl:left-[450px]"
                textMargin="mx-[40px] sm:mx-[50px] 3xl:mx-[62.21px]"
                title="Community Rewards"
                subtitle="40% "
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut"}}
            >
              <Stone
                className="3xl:left-[1381px] 3xl:top-[336px] absolute top-[800px] right-[50px] sm:top-[350px] sm:right-[0px] md:top-[200px] md:right-[-10px] lg:top-[380px] lg:right-[0px] xl:top-[280px] xl:right-[-30px] 2xl:top-[-300px] 2xl:right-[-100px]"
                rotation="rotate-[58.65deg]"
                title="Liquidity"
                subtitle="20%"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
