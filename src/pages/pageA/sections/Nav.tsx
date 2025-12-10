import CatFace from '../../../assets/Nav Bar/Cat Face.png';
import SignUp from '../../../assets/Nav Bar/BTN Sign Up.png';
import NavTag from '../../../components/Nav Bar/NavTag';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Section4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (link: string) => {
    // First restore scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.documentElement.style.overflow = '';
    
    // Then navigate
    setTimeout(() => {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
    // Close menu
    setIsMenuOpen(false);
  };

  
  return (
    <section
      id="Nav"
      className="fixed bottom-0 left-0 z-30 flex w-full justify-center bg-[#00000099] backdrop-blur-lg"
    >
      {/* Background*/}
      <div className="3xl:max-w-[1920px] 3xl:px-[120px] flex h-full w-full max-w-7xl items-center justify-between px-4 py-1 sm:px-6 md:py-2 lg:px-8 lg:py-4">
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
        <div>
          {/* Desktop Navigation Links */}
          <div className="3xl:gap-[48px] hidden flex-row gap-6 lg:flex lg:gap-8">
            <NavTag link="#Section5" text="Home" />
            <NavTag link="#About" text="about Us" />
            <NavTag link="#Section3" text="Key features" />
            <NavTag link="#Section2" text="tokenomics" />
            <NavTag link="#Section1" text="Roadmap" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto block p-2 text-white lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute bottom-full left-0 flex w-full items-center justify-center bg-[#00000099] backdrop-blur-lg lg:hidden">
              <div className="flex flex-col gap-4 p-4 text-center">
                <div onClick={() => handleNavClick('#Section5')}>
                  <NavTag link="#Section5" text="Home" />
                </div>
                <div onClick={() => handleNavClick('#About')}>
                  <NavTag link="#About" text="about Us" />
                </div>
                <div onClick={() => handleNavClick('#Section3')}>
                  <NavTag link="#Section3" text="Key features" />
                </div>
                <div onClick={() => handleNavClick('#Section2')}>
                  <NavTag link="#Section2" text="tokenomics" />
                </div>
                <div onClick={() => handleNavClick('#Section1')}>
                  <NavTag link="#Section1" text="Roadmap" />
                </div>

                <img
                  src={SignUp}
                  alt="Sing Up Button"
                  className="h-14 w-28 sm:h-16 sm:w-32"
                />
              </div>
            </div>
          )}
        </div>
        <img
          src={SignUp}
          alt="Sing Up Button"
          className="3xl:h-[85px] 3xl:w-[165px] hidden h-14 w-28 sm:h-16 sm:w-32 lg:block"
        />
      </div>
    </section>
  );
}
