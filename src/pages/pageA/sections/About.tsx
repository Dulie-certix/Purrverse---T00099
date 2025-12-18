import Cloud from '../../../components/Cloud';
import JetCat from '../../../assets/Section 04/Jet Cat.png';
export default function Section4() {
  return (
    <section
      id="About"
      className="relative flex h-auto w-full items-center justify-center py-18 sm:py-16 lg:py-20"
    >
      {/* Background*/}
      <div className="3xl:max-w-[1920px] relative flex w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <Cloud className="3xl:right-[-80px] 3xl:h-[340px] 3xl:w-[555px] 3xl:mt-[-100px] absolute top-0 right-0 mt-[180px] hidden h-48 w-80 opacity-50 md:block lg:opacity-100 xl:right-[-180px] xl:mt-[-200px] xl:h-64 xl:w-96 2xl:mt-[0px]" />
          <Cloud className="3xl:left-[-50px] 3xl:top-[300px] 3xl:h-[325px] 3xl:w-[447px] absolute -left-40 z-1 hidden h-40 w-64 opacity-100 md:top-[300px] md:block xl:mt-[-200px] xl:h-56 xl:w-80 2xl:mt-[0px]" />
          <Cloud className="3xl:left-[659.9px] 3xl:top-[609px] 3xl:h-[198px] 3xl:w-[323.2px] absolute top-[500px] left-1/3 z-10 hidden h-32 w-52 sm:block md:top-[400px] xl:mt-[-200px] 2xl:mt-[0px]" />
        </div>

        {/* About */}
        <div className="3xl:max-w-[1032px] 3xl:mt-[0px] relative z-20 mx-auto mt-[130px] max-w-4xl sm:mt-[250px] md:mt-[100px] lg:-mt-[100px] xl:mt-[0px] 2xl:mt-[150px]">
          {/* Topic */}
          <h2 className="3xl:text-[120px] text-center font-['Good_Pawoo'] text-5xl leading-[210%] font-normal tracking-[0%] text-[#000573] uppercase sm:text-6xl md:text-7xl lg:text-8xl">
            About
          </h2>

          {/* text */}
          <p className="3xl:-mt-[100px] 3xl:text-[24px] 3xl:leading-[48px] -mt-12 text-center align-middle font-['Fredoka'] text-base leading-relaxed font-semibold tracking-[0%] text-[#1D1F2F] sm:text-lg md:text-xl lg:-mt-16">
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
        className="absolute z-30 hidden h-48 w-36 lg:block xl:h-64 xl:w-48"
        style={{
          animation: 'floatImproved 20s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
          right: '5%',
          bottom: '-400px',
        }}
      />
      <style>{`
        @keyframes floatImproved {
          0% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          15% { 
            transform: translate(-25vw, -8vh) rotate(5deg) scale(1.05);
            opacity: 0.95;
          }
          30% { 
            transform: translate(-45vw, 3vh) rotate(-8deg) scale(0.98);
            opacity: 0.9;
          }
          45% { 
            transform: translate(-30vw, -12vh) rotate(10deg) scale(1.02);
            opacity: 0.95;
          }
          60% { 
            transform: translate(-55vw, 5vh) rotate(-5deg) scale(1);
            opacity: 0.92;
          }
          75% { 
            transform: translate(-35vw, -6vh) rotate(12deg) scale(1.03);
            opacity: 0.96;
          }
          90% { 
            transform: translate(-15vw, 2vh) rotate(-3deg) scale(0.99);
            opacity: 0.98;
          }
          100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
