import Cloud from '../../../components/Cloud';
import JetCat from '../../../assets/Section 04/Jet Cat.png';
import Hill from '../../../assets/Section 04/Hill.png';
import TopFadeMask from '../../../components/TopFadeMask';

export default function Section4() {
  return (
    <section
      id="Section4"
      className="relative flex h-full min-h-screen w-full min-w-screen justify-center"
    >
      {/* Background*/}
      <div className="relative flex h-full max-h-[1078px] w-full max-w-[1920px] flex-col justify-center">
        <div>
          <Cloud className="absolute left-[1440px] h-[340px] w-[555px] overflow-hidden" />
          <Cloud className="absolute top-[423px] left-[-50px] z-10 h-[325px] w-[447px]" />
          <Cloud className="absolute top-[659px] left-[659.9px] z-10 h-[198px] w-[323.2px]" />
        </div>

        {/* About */}
        <div className="absolute top-[250px]">
          <div className="absolute left-[445px] h-[247px] w-[1031px] gap-[40px]">
            {/* Topic */}
            <h2 className="mt-[-70px] text-center font-['Good_Pawoo'] text-[120px] leading-[210%] font-normal tracking-[0%] text-[#000573] uppercase">
              About
            </h2>

            {/* text */}
            <p className="mt-[-80px] text-center align-middle font-['Fredoka'] text-[24px] leading-[48px] font-semibold tracking-[0%] text-[#1D1F2F]">
              Purrverse is a playful yet powerful Web3 ecosystem led by a
              community of curious cats and crypto lovers. We blend adorable
              design with serious blockchain utility—staking, swapping, and
              exploring the DeFi multiverse with a smile. Built on fun, fueled
              by innovation, and ruled by cats.
            </p>
          </div>
          {/* Image */}
          <TopFadeMask className="relative">
            <img
              src={Hill}
              alt="Hill"
              className="mt-[308px] h-[1076px] w-full"
            />
          </TopFadeMask>
          <img
            src={JetCat}
            alt="Jet Cat"
            className="mt-[-1065px] absolute ml-[1658px] h-[364px] w-[263px]"
          />
        </div>
      </div>
    </section>
  );
}
