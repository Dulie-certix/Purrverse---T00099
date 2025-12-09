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
      <div className="3xl:max-w-[1920px] 3xl:px-[120px] xl:py-4 lg:flex-hidden flex h-full w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-6 md:py-3 lg:px-8 ">
        <div className="flex items-center">
          <img
            src={CatFace}
            alt="Cat Face"
            className="3xl:h-[62px] 3xl:w-[72px] h-10 w-12 sm:h-12 sm:w-14"
          />
          <h2 className="3xl:text-[40px] bg-gradient-to-b from-[#DD9395] to-[#A7606E] bg-clip-text font-['Good_Pawoo'] text-2xl leading-[210%] font-normal tracking-[0%] text-transparent uppercase [-webkit-text-stroke:1px_#000000] sm:text-3xl">
            Purrverse
          </h2>
        </div>
        <div className="3xl:gap-[48px] hidden flex-row gap-6 xl:flex lg:gap-8">
          <NavTag link="#Section5" text="Home" />
          <NavTag link="#About" text="about Us" />
          <NavTag link="#Section3" text="Key features" />
          <NavTag link="#Section2" text="tokenomics" />
          <NavTag link="#Section1" text="Roadmap" />
        </div>

        <img
          src={SignUp}
          alt="Sing Up Button"
          className="3xl:h-[85px] 3xl:w-[165px] h-14 w-28 sm:h-16 sm:w-32"
        />
      </div>
    </section>
  );
}
