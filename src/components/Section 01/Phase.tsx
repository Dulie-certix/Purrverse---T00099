
import React from 'react';

interface Props {
  text?: string;
  text1?: string;
  contentText?: string;
  listItems?: string[];
  imageSrc?: string;
  imageWidth?: string;
}

const Phase: React.FC<Props> = ({ text1, text, contentText, listItems, imageSrc, imageWidth }) => {
  return (
    <div className="flex w-full max-w-[300px] flex-col justify-between rounded-3xl bg-[#FFFFFF33] p-5 shadow-[0px_0px_16px_4px_#FFFFFF40_inset] sm:max-w-[340px] md:max-w-[360px] 3xl:h-[526px] 3xl:max-w-[386px]">
      <div className="flex flex-col gap-5">

        {/* Topic  */}
        <div className="flex h-14 w-36 items-center justify-center gap-2 rounded-2xl bg-[#00000099] sm:h-16 sm:w-40 3xl:h-[69px] 3xl:w-[180px]">
          <div className="flex items-center justify-center text-center text-3xl font-normal uppercase text-[#FFFFFF] sm:text-4xl 3xl:text-[40px]">
            <div className="font-['Good_Pawoo'] mt-3" >
              {text}
            </div>
            <div className="font-['Fredoka_One'] mb-1 ml-2">
              {text1}
            </div>
          </div>
        </div>

        {/* Content Topic */}
        <div className="flex flex-col gap-2 px-5">
          <div className="font-['Good_Pawoo'] flex items-center text-2xl font-normal uppercase leading-none tracking-normal text-[#FFFFFF] sm:text-3xl 3xl:text-[32px]">
            {contentText}
          </div>

          {/* Content */}
          <div className="font-['Fredoka'] flex items-center text-sm font-semibold leading-7 tracking-normal text-white sm:text-base 3xl:text-[16px] 3xl:leading-8">
            <ul className="list-inside list-disc space-y-1">
              {listItems?.map((item, index) => (
                <li key={index} className="marker:text-[#FFFFFF]">{item}</li>
              )) }
            </ul>
          </div>
        </div>
      </div>

      {/* Image */}
        <div className="flex justify-center">
          <img 
            src={imageSrc} 
            alt="Phase image" 
            className={`h-auto ${imageWidth}`}
          />
        </div>
    </div>
  );
};

export default Phase;