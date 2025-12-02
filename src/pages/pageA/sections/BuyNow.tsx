import Grass from '../../../assets/Section 05/Grass.png';
import Cat from '../../../assets/Section 05/c 1 copy 1.png';
import BtnBuy from '../../../assets/Section 05/Btn Buy Now.png';
import Butterfly from '../../../assets/Section 05/Butterfly.gif';
import Arrow from '../../../assets/Section 05/Arrow.png';
import Shadow from '../../../assets/Section 05/shadow.png';
import TopFadeMask from '@/components/TopFadeMask';
import Hill from "../../../assets/Section 04/Hill.png"
export default function Section4() {
  return (
    <section
      id="Section5"
      className="mt-96 flex min-h-screen w-full justify-center sm:mt-[500px] lg:mt-[600px] 3xl:mt-[821px]"
    >
      <div className="absolute z-[0] -mt-32 w-full bg-[#86CDEA] sm:-mt-48 lg:-mt-64 3xl:-mt-[280px]">
        <img
          src={Hill}
          alt="Hill"
          className="h-auto w-full object-cover [mask-image:linear-gradient(to_bottom,transparent_0%,black_100px,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_100px,black_100%)]"
        />
      </div>
      <img
        src={Grass}
        alt="Grass Ground"
        className="absolute z-20 mt-32 h-auto w-full object-cover sm:mt-40 lg:mt-48 3xl:mt-[230px]"
      />
      {/* Background*/}
      <div className="absolute mt-0 flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 3xl:max-w-[1920px]">
        {/* text */}
        <h2 className="z-[0] mt-96 text-center font-['Good_Pawoo'] text-6xl font-normal uppercase text-[#FFFFFF] [-webkit-text-stroke:1px_#000000] sm:mt-[500px] sm:text-8xl md:text-9xl lg:mt-[700px] lg:text-[180px] 3xl:mt-[870px] 3xl:text-[240px] 3xl:[-webkit-text-stroke:2px_#000000]">
          Purrverse
        </h2>

        <img
          src={BtnBuy}
          alt="Buy Now Button"
          className="z-20 mx-auto -mt-48 h-14 w-36 sm:-mt-64 sm:h-16 sm:w-44 lg:-mt-80 3xl:-mt-[400px] 3xl:h-[85px] 3xl:w-[229px]"
        />

        <img
          src={Butterfly}
          alt="Butterflies"
          className="z-20 -ml-8 mt-12 h-32 w-72 sm:-ml-16 sm:mt-16 sm:h-40 sm:w-80 lg:mt-20 lg:h-56 lg:w-[500px] 3xl:-ml-[153px] 3xl:mt-[100px] 3xl:h-[295px] 3xl:w-[690px]"
        />

        <img
          src={Cat}
          alt="cat Image"
          className="z-30 mx-auto -mt-32 h-48 w-48 sm:-mt-40 sm:h-64 sm:w-64 lg:-mt-56 lg:h-80 lg:w-80 3xl:-mt-[280px] 3xl:h-[468px] 3xl:w-[466px]"
        />
        <img
          src={Shadow}
          alt="Shadow"
          className="z-20 mx-auto -mt-12 h-8 w-24 sm:-mt-16 sm:h-10 sm:w-32 lg:h-12 lg:w-40 3xl:-mt-[110px] 3xl:h-[60px] 3xl:w-[200px]"
        />

        <button
          className="z-20 mx-auto"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex flex-row items-center">
            {/* text */}
            <h2 className="z-20 text-center font-['Good_Pawoo'] text-3xl font-normal uppercase leading-[210%] text-[#23431D] sm:text-4xl md:text-5xl 3xl:text-[64px]">
              Paws Up
            </h2>
            <img
              src={Arrow}
              alt="Arrow Up Image"
              className="ml-2 mt-4 h-4 w-4 sm:ml-3 sm:mt-6 sm:h-5 sm:w-5 3xl:ml-[10px] 3xl:mt-[40px] 3xl:h-[34px] 3xl:w-[31px]"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
