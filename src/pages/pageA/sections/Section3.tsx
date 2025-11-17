
import Cloud from "../../../components/Cloud";
import FeatureCard from "../../../components/Section 03/FeatureCard";
import ShieldCat from "../../../assets/Section 03/shield Cat.png"

export default function Section3() {
  return (
    <section id="Section3" className="w-full h-full min-w-screen flex items-center justify-center relative ">
        
        {/* Background*/}
        <div className=" max-w-[1920px] max-h-[991px] mb-[63px] w-full h-full flex flex-col justify-center items-center relative">
          <div>
            <Cloud className="absolute z-0 w-[473.38px] h-[290px] mt-[182px] left-[258.81px] opacity-70" />
            <Cloud className="absolute z-0 w-[414.62px] h-[254px] top-[737px] left-[1040.19px] opacity-70" />
            <Cloud className="absolute z-0 w-[555px] h-[340px] top-[928px] left-[156px] opacity-70" />
          </div>
            
            {/* Content */}
          <div className="w-[1684px] h-[506px] ml-[119px] mt-[225px] relative z-20">

              {/* Image */}
              <img src={ShieldCat} alt="Shield Cat" className="absolute left-[651px] top-[127px] w-[379px] h-[379px] object-contain z-10" />

              {/* Topic */}
              <div className="mt-[-70px] font-['Good_Pawoo'] font-normal text-[120px] leading-[210%] tracking-[0%] text-center align-middle uppercase text-[#000573] "> 
                Features
              </div>
              {/* Features card */}
            <div className="grid grid-cols-2 gap-x-[506px] gap-y-[80px] mt-[-30px]">
              <FeatureCard title="Paw-wered DeFi" description="Stake, swap, and earn with ease" />
              <FeatureCard title="Secure Wallets" description="Keep assets safe with multi-sig support" />
              <FeatureCard title="Fast Swaps" description="Low fees and instant swaps" />
              <FeatureCard title="Yield Farming" description="Maximise returns with AMM pools" />
            </div>

          </div>

        </div>
    </section>
  );
}
