import CatFace from '../../../assets/Nav Bar/Cat Face.png';
import SignUp from '../../../assets/Nav Bar/BTN Sign Up.png';
import NavTag from '../../../components/Nav Bar/NavTag';

export default function Section4() {
  return (
    <section
      id="Nav"
      className="fixed bottom-0 left-0 z-30 flex w-full justify-center bg-[#00000099] backdrop-blur-lg"
    >
      {/* Background*/}
      <div className="flex h-full w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:py-6 lg:px-8 3xl:max-w-[1920px] 3xl:px-[120px] 3xl:py-0">
        <div className="flex items-center">
          <img src={CatFace} alt="Cat Face" className="h-10 w-12 sm:h-12 sm:w-14 3xl:h-[62px] 3xl:w-[72px]" />
          <h2 className="bg-gradient-to-b from-[#DD9395] to-[#A7606E] bg-clip-text font-['Good_Pawoo'] text-2xl font-normal uppercase leading-[210%] tracking-[0%] text-transparent [-webkit-text-stroke:1px_#000000] sm:text-3xl 3xl:text-[40px]">
            Purrverse
          </h2>
        </div>
        <div className="hidden flex-row gap-6 md:flex lg:gap-8 3xl:gap-[48px]">
          <NavTag link="#Section5" text="Home" />
          <NavTag link="#Section4" text="about Us" />
          <NavTag link="#Section3" text="Key features" />
          <NavTag link="#Section2" text="tokenomics" />
          <NavTag link="#Section1" text="Roadmap" />
        </div>

        <img
          src={SignUp}
          alt="Sing Up Button"
          className="h-14 w-28 sm:h-16 sm:w-32 3xl:h-[85px] 3xl:w-[165px]"
        />
      </div>
    </section>
  );
}
