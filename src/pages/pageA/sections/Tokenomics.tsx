import Section2BG from '../../../assets/Section 02/Section 02 BG.gif';
import PlaneCat from '../../../assets/Section 02/plane cat.png';
import Stone from '../../../components/Section 02/Stone';
import TopFadeMask from '../../../components/TopFadeMask';
export default function Hero() {
  return (
    <section
      id="Section2"
      className="relative flex min-h-screen w-full items-center justify-center py-12 sm:py-16 lg:-mt-8 lg:py-20 3xl:-mt-[68px]"
    >
      {/* background */}
      <TopFadeMask position="bottom">
        <img
          src={Section2BG}
          alt="Section 2 Background"
          className="absolute h-full w-full object-cover"
        />
      </TopFadeMask>

      <div className="relative z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8 3xl:max-w-[1920px]">
        <div className="relative mx-auto w-full max-w-6xl 3xl:max-w-[1748px]">
          <img
            src={PlaneCat}
            alt="Plane Cat"
            className="absolute left-1/2 top-0 hidden h-32 w-28 -translate-x-1/2 md:block lg:h-48 lg:w-40 3xl:left-[829.9px] 3xl:top-0 3xl:h-[284px] 3xl:w-[260.5px] 3xl:translate-x-0"
          />

          <h1 className="mb-12 text-center align-middle font-['Good_Pawoo'] text-5xl font-normal uppercase leading-[210%] tracking-[0%] text-white sm:text-6xl md:text-7xl lg:mb-16 lg:text-8xl 3xl:absolute 3xl:left-[632px] 3xl:top-[506px] 3xl:mb-0 3xl:text-[120px]">
            Tokenomics
          </h1>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 3xl:block">
            <Stone
              className="3xl:absolute 3xl:left-[119.79px] 3xl:top-[527px]"
              textMargin="mx-[52.21px]"
              title="Total Supply"
              subtitle="1,000,000,000 PURR"
            />
            <Stone
              className="3xl:absolute 3xl:left-[769.79px] 3xl:top-[655px]"
              textMargin="mx-[62.21px]"
              title="Community Rewards"
              subtitle="40% "
            />
            <Stone
              className="sm:col-span-2 lg:col-span-1 3xl:absolute 3xl:left-[1381px] 3xl:top-[336px]"
              rotation="3xl:rotate-[58.65deg]"
              title="Liquidity"
              subtitle="20%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
