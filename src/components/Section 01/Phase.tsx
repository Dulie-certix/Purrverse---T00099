
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  text?: string;
  text1?: string;
  contentText?: string;
  listItems?: string[];
  imageSrc?: string;
  imageWidth?: string;
  isInRoadmap?: boolean;
}

const Phase: React.FC<Props> = ({ text1, text, contentText, listItems, imageSrc, imageWidth, isInRoadmap = false }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isClicked || !isInRoadmap) return;

    const handleScroll = () => setIsClicked(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClicked, isInRoadmap]);

  return (
    <>
      <AnimatePresence>
        {isClicked && isInRoadmap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsClicked(false)}
            className="fixed inset-0 z-[9999] backdrop-blur-md bg-black/50"
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        onClick={() => isInRoadmap && setIsClicked(!isClicked)}
        className={`3xl:h-[526px] 3xl:w-[386px] w-[280px] rounded-3xl bg-[#FFFFFF33] p-5 shadow-[0px_0px_16px_4px_#FFFFFF40_inset] transition-all duration-300 sm:w-[360px] md:w-[360px] lg:w-[370px] 2xl:h-auto 2xl:w-[336px] ${isInRoadmap ? 'cursor-pointer hover:scale-110 hover:shadow-[0px_0px_32px_8px_#FFFFFF80_inset] hover:bg-[#FFFFFF40] hover:ring-2 hover:ring-white/60' : 'hover:scale-105 hover:shadow-[0px_0px_24px_6px_#FFFFFF60_inset]'} ${isClicked && isInRoadmap ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] scale-110 shadow-[0px_0px_32px_8px_#FFFFFF80_inset] ring-4 ring-white/50' : 'relative'}`}
        whileHover={isInRoadmap ? { scale: 1, y: -10 } : { scale: 1.05 }}
        animate={isClicked && isInRoadmap ? { scale: 1 } : { scale: 1 }}
        transition={{ layout: { duration: 0.3 }, type: isInRoadmap ? 'spring' : 'tween', stiffness: 300 }}
      >
      <div className="flex w-full flex-col gap-5">
        {/* Topic  */}
        <div className="3xl:h-[69px] 3xl:w-[180px] flex h-14 w-36 items-center justify-center gap-2 rounded-2xl bg-[#00000099] sm:h-16 sm:w-40">
          <div className="3xl:text-[40px] flex items-center justify-center text-center text-3xl font-normal text-[#FFFFFF] uppercase sm:text-4xl">
            <div className="mt-3 font-['Good_Pawoo']">{text}</div>
            <div className="mb-1 ml-2 font-['Fredoka_One']">{text1}</div>
          </div>
        </div>

        {/* Content Topic */}
        <div className="flex flex-col">
          <div className="3xl:text-[32px] flex items-center font-['Good_Pawoo'] text-2xl leading-none font-normal tracking-normal text-[#FFFFFF] uppercase sm:text-3xl">
            {contentText}
          </div>

          {/* Content */}
          <div className="3xl:text-[16px] 3xl:leading-8 flex items-center font-['Fredoka'] text-sm leading-7 font-semibold tracking-normal text-white sm:text-base 2xl:text-[16px]">
            <ul className="list-inside list-disc space-y-1">
              {listItems?.map((item, index) => (
                <li key={index} className="marker:text-[#FFFFFF]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <motion.img
          src={imageSrc}
          alt="Phase image"
          className={`h-auto ${imageWidth}`}
          whileHover={{
            y: [0, -15, 0],
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        />
      </div>
      </motion.div>
    </>
  );
};

export default Phase;