import Grass from '../../../assets/Section 05/Grass.png';
import Cat from '../../../assets/Section 05/c 1 copy 1.png';
import BtnBuy from '../../../assets/Section 05/Btn Buy Now.png';
import Butterfly from '../../../assets/Section 05/Butterfly.gif';
import Arrow from '../../../assets/Section 05/Arrow.png';
import Shadow from '../../../assets/Section 05/shadow.png';
import Hill from "../../../assets/Section 04/Hill.png"
import { motion } from 'framer-motion';
export default function Section4() {
  return (
    <section
      id="Section5"
      className="3xl:mt-[1121px] mt-90 flex h-auto w-full justify-center sm:mt-[500px] lg:mt-[600px]"
    >
      <div className="3xl:-mt-[1000px] absolute z-[0] -mt-68 h-auto w-full bg-[#86CDEA] sm:-mt-100 md:-mt-128 lg:-mt-100 xl:mt-[-580px]">
        <img
          src={Hill}
          alt="Hill"
          className="h-auto w-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_100px,black_100%)] object-cover [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_100px,black_100%)]"
        />
      </div>
      <img
        src={Grass}
        alt="Grass Ground"
        className="3xl:mt-[-480px] absolute z-20 -mt-38 h-auto w-full object-cover sm:-mt-50 md:-mt-75 lg:mt-[-130px] xl:mt-[-180px]"
      />
      {/* Background*/}
      <div className="3xl:max-w-[1920px] 3xl:-mt-305 absolute -mt-190 h-full w-full max-w-7xl flex-col items-center justify-center px-4 sm:-mt-167 sm:px-6 md:mt-[-740px] lg:mt-[-1080px] lg:px-8 xl:-mt-280 2xl:-mt-230">
        {/* text */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="3xl:mt-[880px] 3xl:text-[240px] z-[0] mt-142 text-center font-['Good_Pawoo'] text-6xl font-normal text-[#FFFFFF] uppercase [-webkit-text-stroke:1.5px_#000000] sm:mt-[500px] sm:text-8xl md:text-8xl lg:mt-[1030px] lg:text-[120px] xl:mt-[990px] xl:text-[200px] 2xl:mt-[850px]"
        >
          Purrverse
        </motion.h2>

        <motion.img
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -5, 5, -5, 0],
            filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
            filter: [
              "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
              "drop-shadow(0 0 20px rgba(191, 115, 115, 0.8))",
              "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))"
            ]
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          onClick={() => window.open('_blank')}
          src={BtnBuy}
          alt="Buy Now Button"
          className="3xl:-mt-[400px] 3xl:h-[85px] 3xl:w-[229px] relative z-10 mx-auto -mt-37 h-10 w-25 sm:-mt-44 md:mt-[-170px] lg:-mt-[210px] lg:h-12 lg:w-30 xl:-mt-[330px] xl:h-16 xl:w-44 cursor-pointer"
        />

        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          src={Butterfly}
          alt="Butterflies"
          className="3xl:ml-[-150px] 3xl:mt-[100px] 3xl:h-[295px] 3xl:w-[690px] relative z-30 mt-22 -ml-18 h-22 w-52 sm:-ml-30 sm:mt-5 sm:h-40 sm:w-80 lg:h-56 lg:w-[500px] xl:mt-25 xl:ml-[-100px] 2xl:mt-16 2xl:ml-[-200px] lg:ml-[-150px] lg:mt-[0px]"
        />

        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          src={Cat}
          alt="cat Image"
          className="3xl:-mt-[260px] 3xl:h-[468px] 3xl:w-[466px] relative z-30 mx-auto -mt-30 h-48 w-48 sm:-mt-38 sm:h-64 sm:w-64 lg:-mt-62 lg:h-80 lg:w-80 xl:-mt-[170px] xl:h-[368px] xl:w-[366px] animate-float"
        />
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          src={Shadow}
          alt="Shadow"
          className="3xl:-mt-[110px] relative z-20 mx-auto -mt-12 h-8 w-24 sm:-mt-16 sm:h-10 sm:w-32 md:mt-[-65px] lg:mt-[-80px] lg:h-12 lg:w-40 xl:-mt-[90px] xl:h-[60px] xl:w-[200px]"
        />

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1 }}
          className="z-20 flex w-full cursor-pointer justify-center text-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="hidden sm:flex -mt-[20px] flex-row items-center sm:mb-[15px] md:mb-[80px] lg:-mt-[0px]">
            {/* text */}
            <div className="3xl:text-[64px] z-20 text-center font-['Good_Pawoo'] text-3xl leading-[210%] font-normal text-[#23431D] uppercase sm:text-4xl md:text-3xl xl:text-5xl">
              Paws Up
            </div>
            <img
              src={Arrow}
              alt="Arrow Up Image"
              className="3xl:ml-[10px] 3xl:mt-[-20px] 3xl:h-[34px] 3xl:w-[31px] relative z-20 mt-4 ml-2 h-4 w-4 sm:mt-6 sm:ml-3 sm:h-5 sm:w-5 md:mt-[-20px] xl:h-7 xl:w-7"
            />
          </div>
        </motion.button>
      </div>
    </section>
  );
}
