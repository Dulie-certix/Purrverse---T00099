import Cloud from '../../../components/Cloud';
import FeatureCard from '../../../components/Section 03/FeatureCard';
import ShieldCat from '../../../assets/Section 03/shield Cat.png';

export default function Section3() {
  return (
    <section
      id="Section3"
      className="relative flex min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background Clouds */}
      <div className="relative mt-[-100px] flex h-auto w-full max-w-[1920px] flex-col items-center justify-center sm:mt-[-200px] lg:mt-[-300px]">
        {/* 1 */}
        <Cloud
          delay={0.5}
          className="3xl:top-[0px] 3xl:left-[258.81px] absolute top-[400px] left-[-100px] z-0 ml-[130px] h-[130px] w-[190px] opacity-70 sm:h-[200px] sm:w-[300px] md:top-[500px] md:left-[-100px] md:h-[200px] md:w-[300px] lg:top-[50px] lg:left-[-100px] lg:h-[240px] lg:w-[373.38px] xl:top-[50px] xl:left-[-50px] 2xl:top-[-30px] 2xl:left-[08.81px] 2xl:ml-[0px] 2xl:h-[290px] 2xl:w-[473.38px]"
        />

        {/* 2 */}
        <Cloud
          delay={0}
          className="3xl:left-[1040.19px] 3xl:top-[537px] absolute top-[650px] left-[100px] z-0 h-[130px] w-[190px] opacity-70 md:top-[800px] md:left-[400px] md:h-[150px] md:w-[250px] lg:top-[450px] lg:left-[500px] lg:h-[200px] lg:w-[303.38px] xl:top-[437px] xl:left-[740.19px] xl:h-[220px] xl:w-[350.38px] 2xl:left-[840.19px] 2xl:h-[254px] 2xl:w-[414.62px]"
        />

        {/* 3 */}
        <Cloud
          delay={0.5}
          className="3xl:left-[156px] absolute top-[900px] left-[0px] z-0 h-[130px] w-[190px] opacity-70 sm:top-[1000px] sm:left-[00px] sm:h-[200px] sm:w-[300px] lg:top-[650px] lg:left-[0px] lg:h-[260px] lg:w-[423.38px] xl:left-[56px] 2xl:top-[728px] 2xl:left-[156px] 2xl:h-[340px] 2xl:w-[555px]"
        />

        {/* Content */}
        <div className="relative z-20 w-full max-w-[1684px]">
          {/* Image */}
          <img
            src={ShieldCat}
            alt="Shield Cat"
            className="3xl:left-[651px] animate-scale-in animate-float absolute top-[60px] top-[280px] left-1/2 z-10 h-[200px] w-[200px] -translate-x-1/2 object-contain sm:top-[280px] sm:h-[250px] sm:w-[250px] md:top-[350px] md:h-[300px] md:w-[300px] lg:top-[77px] lg:left-[301px] lg:translate-x-0 xl:left-[381px] xl:h-[379px] xl:w-[379px] 2xl:left-[501px]"
          />

          {/* Topic */}
          <div className="animate-slide-up mt-[180px] text-center align-middle font-['Good_Pawoo'] text-[48px] leading-[210%] font-normal tracking-[0%] text-[#000573] uppercase sm:mt-[200px] sm:text-[64px] md:mt-[220px] md:text-[80px] lg:-mt-[70px] lg:text-[100px] xl:text-[120px]">
            Features
          </div>
          {/* Features card */}
          <div className="3xl:gap-x-[506px] 3xl:gap-y-[80px] 3xl:ml-[0px] lg:mt-[0px mt-8 mt-60 grid grid-cols-1 gap-6 sm:mt-60 sm:grid-cols-2 sm:gap-8 md:mt-[300px] md:gap-12 lg:-mt-[30px] lg:gap-x-[300px] lg:gap-y-[60px] xl:gap-x-[400px] xl:gap-y-[70px] 2xl:ml-[100px] 2xl:gap-x-[300px] 2xl:gap-y-[75px]">
            <FeatureCard
              title="Paw-wered DeFi"
              description="Stake, swap, and earn with ease"
            />
            <FeatureCard
              title="Secure Wallets"
              description="Keep assets safe with multi-sig support"
            />
            <FeatureCard
              title="Fast Swaps"
              description="Low fees and instant swaps"
            />
            <FeatureCard
              title="Yield Farming"
              description="Maximise returns with AMM pools"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
