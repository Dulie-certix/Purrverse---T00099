import Grass from "../../../assets/Section 05/Grass.png"
import Cat from "../../../assets/Section 05/c 1 copy 1.png"
import BtnBuy from "../../../assets/Section 05/Btn Buy Now.png"
import Butterfly from "../../../assets/Section 05/Butterfly.gif"
import Arrow from "../../../assets/Section 05/Arrow.png"
export default function Section4() {
  return (
    <section id="Section5" className="flex h-full w-full justify-center">
      {/* Background*/}
      <div className="relative flex h-full max-h-[942px] w-full max-w-[1920px] flex-col justify-center">
        {/* Image */}
        <img
          src={Grass}
          alt="Grass Ground"
          className="relative z-20 mt-[130px] h-full w-full object-cover"
        />
        {/* text */}
        <h2 className="z-0 mt-[-790px] text-center font-['Good_Pawoo'] text-[240px] font-normal text-[#FFFFFF] uppercase [-webkit-text-stroke:1px_#000000]">
          Purrverse
        </h2>

        <img
          src={BtnBuy}
          alt="GBuy Now Button"
          className="z-20 mx-auto mt-[-400px] h-[85px] w-[229px]"
        />

        <img
          src={Butterfly}
          alt="Butterflies"
          className="z-20 mt-[100px] ml-[-153px] h-[295px] w-[690px]"
        />

        <img
          src={Cat}
          alt="cat Image"
          className="z-20 mx-auto mt-[-290px] h-[468px] w-[466px]"
        />
        <button
          className="z-20 mx-auto"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex flex-row">
            {/* text */}
            <h2 className="z-20 mt-[0px] text-center font-['Good_Pawoo'] text-[64px] leading-[210%] font-normal text-[#23431D] uppercase">
              Paws Up
            </h2>
            <img
              src={Arrow}
              alt="Arrow Up Image"
              className="mt-[40px] ml-[10px] h-[34px] w-[31px]"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
