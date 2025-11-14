
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
    <div className="w-[386px] h-[526px] flex flex-col justify-between rotate-0 opacity-100 rounded-[36px] pt-5 pb-5 bg-[#FFFFFF33] shadow-[0px_0px_16px_4px_#FFFFFF40_inset]">
      <div className="w-[386px] h-[316px] flex flex-col rotate-0 opacity-100 gap-5">

        {/* Topic  */}
        <div className="w-[180px] h-[69px] rotate-0 opacity-100 gap-[10px] rounded-[16px] ml-[20px] flex justify-center items-center bg-[#00000099]">
          <div className="font-normal text-[40px] text-center uppercase flex items-center justify-center text-[#FFFFFF]">
            <div className="font-['Good_Pawoo'] mt-4 " >
              {text}
            </div>
            <div className="font-['Fredoka_One'] ml-2 mb-1 ">
              {text1}
            </div>
          </div>
        </div>

        {/* Content Topic */}
        <div className="w-[386px] h-[227px] rotate-0 opacity-100 gap-[10px] rounded-[16px] px-5 flex flex-col">
          <div className="font-['Good_Pawoo'] font-normal text-[32px] text-[#FFFFFF] leading-none tracking-normal uppercase flex items-center ">
            {contentText}
          </div>

          {/* Content */}
          <div className="font-['Fredoka'] font-semibold text-[16px] leading-8 tracking-normal flex items-center text-white">
            <ul className="list-disc list-inside space-y-1">
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