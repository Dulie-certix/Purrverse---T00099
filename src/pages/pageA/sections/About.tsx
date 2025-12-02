import Cloud from '../../../components/Cloud';
import JetCat from '../../../assets/Section 04/Jet Cat.png';
export default function Section4() {
  return (
    <section
      id="About"
      className="relative flex min-h-screen w-full items-center justify-center py-12 sm:py-16 lg:py-20"
    >
      {/* Background*/}
      <div className="relative flex w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 3xl:max-w-[1920px]">
        <div className="overflow-hidden">
          <Cloud className="absolute right-0 top-0 hidden h-48 w-80 opacity-50 lg:block xl:h-64 xl:w-96 3xl:right-[480px] 3xl:h-[340px] 3xl:w-[555px]" />
          <Cloud className="absolute left-0 top-[200px] z-1 hidden h-40 w-64 opacity-50 md:block xl:h-56 xl:w-80 3xl:left-[-50px] 3xl:top-[423px] 3xl:h-[325px] 3xl:w-[447px]" />
          <Cloud className="absolute left-1/3 top-[400px] z-10 hidden h-32 w-52 opacity-50 lg:block 3xl:left-[659.9px] 3xl:top-[659px] 3xl:h-[198px] 3xl:w-[323.2px]" />
        </div>

        {/* About */}
        <div className="relative z-20 mx-auto max-w-4xl 3xl:max-w-[1032px]">
          {/* Topic */}
          <h2 className="text-center font-['Good_Pawoo'] text-5xl font-normal uppercase leading-[210%] tracking-[0%] text-[#000573] sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-[120px]">
            About
          </h2>

          {/* text */}
          <p className="-mt-12 text-center align-middle font-['Fredoka'] text-base font-semibold leading-relaxed tracking-[0%] text-[#1D1F2F] sm:text-lg md:text-xl lg:-mt-16 3xl:-mt-[100px] 3xl:text-[24px] 3xl:leading-[48px]">
            Purrverse is a playful yet powerful Web3 ecosystem led by a
            community of curious cats and crypto lovers. We blend adorable
            design with serious blockchain utility—staking, swapping, and
            exploring the DeFi multiverse with a smile. Built on fun, fueled by
            innovation, and ruled by cats.
          </p>
        </div>
      </div>

      {/* Image */}
      <img
        src={JetCat}
        alt="Jet Cat"
        className="absolute bottom-0 right-4 z-10 hidden h-48 w-36 lg:block xl:h-64 xl:w-48 3xl:bottom-[-436px] 3xl:right-[262px] 3xl:h-[364px] 3xl:w-[263px]"
      />
    </section>
  );
}
