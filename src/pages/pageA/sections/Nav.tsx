import CatFace from "../../../assets/Nav Bar/Cat Face.png"
import SignUp from "../../../assets/Nav Bar/BTN Sign Up.png"
import NavTag from "../../../components/Nav Bar/NavTag"

export default function Section4() {
  return (
    <section
      id="Nav"
      className="fixed bottom-0 left-0 z-20 flex w-full bg-[#00000099] backdrop-blur-lg"
    >
      {/* Background*/}
      <div className="mx-[120px] flex h-full max-h-[125px] w-full max-w-[1920px] items-center justify-between">
        <div className="flex">
          <img src={CatFace} alt="Cat Face" className="h-[62px] w-[72px]" />
          <h2 className="bg-gradient-to-b from-[#DD9395] to-[#A7606E] bg-clip-text font-['Good_Pawoo'] text-[40px] leading-[210%] font-normal tracking-[0%] text-transparent uppercase [-webkit-text-stroke:1px_#000000]">
            Purrverse
          </h2>
        </div>
        <div className="flex flex-row gap-[48px]">
          <NavTag link="#Section5" text="Home" />
          <NavTag link="#Section4" text="about Us" />
          <NavTag link="#Section3" text="Key features" />
          <NavTag link="#Section2" text="tokenomics" />
          <NavTag link="#Section1" text="Roadmap" />
        </div>

        <img
          src={SignUp}
          alt="Sing Up Button"
          className="m-[20px] h-[85px] w-[165px]"
        />
      </div>
    </section>
  );
};