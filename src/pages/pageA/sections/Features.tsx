import Cloud from '../../../components/Cloud';
import FeatureCard from '../../../components/Section 03/FeatureCard';
import ShieldCat from '../../../assets/Section 03/shield Cat.png';

export default function Section3() {
  return (
    <section
      id="Section3"
      className="relative flex min-h-screen w-full items-center justify-center py-12 sm:py-16 lg:py-20"
    >
      {/* Background*/}
      <div className="relative flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 3xl:max-w-[1920px]">
        <div>
          <Cloud className="absolute left-[10%] top-[100px] z-0 hidden h-40 w-64 opacity-70 md:block xl:h-56 xl:w-80 3xl:left-[258.81px] 3xl:top-[182px] 3xl:h-[290px] 3xl:w-[473.38px]" />
          <Cloud className="absolute right-[10%] top-[500px] z-0 hidden h-36 w-60 opacity-70 lg:block 3xl:left-[1040.19px] 3xl:top-[737px] 3xl:h-[254px] 3xl:w-[414.62px]" />
          <Cloud className="absolute bottom-0 left-[5%] z-0 hidden h-48 w-80 opacity-70 md:block 3xl:left-[156px] 3xl:top-[928px] 3xl:h-[340px] 3xl:w-[555px]" />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-6xl 3xl:max-w-[1684px]">
          {/* Image */}
          <img
            src={ShieldCat}
            alt="Shield Cat"
            className="absolute left-1/2 top-20 z-10 hidden h-48 w-48 -translate-x-1/2 object-contain md:block lg:h-64 lg:w-64 3xl:left-[651px] 3xl:top-[127px] 3xl:h-[379px] 3xl:w-[379px] 3xl:translate-x-0"
          />

          {/* Topic */}
          <div className="text-center align-middle font-['Good_Pawoo'] text-5xl font-normal uppercase leading-[210%] tracking-[0%] text-[#000573] sm:text-6xl md:text-7xl lg:text-8xl 3xl:-mt-[70px] 3xl:text-[120px]">
            Features
          </div>
          {/* Features card */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12 lg:gap-16 3xl:-mt-[30px] 3xl:gap-x-[506px] 3xl:gap-y-[80px]">
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
