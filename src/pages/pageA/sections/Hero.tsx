import HeroLogo from '../../../components/Hero/Hero Logo';
import heroBG from '../../../assets/Hero/heroBG.mp4';
import EngelCat from '../../../assets/Hero/Engel Cat.png';
import Logo1 from '../../../assets/Hero/Logo1.png';
import Logo4 from '../../../assets/Hero/Logo4.png';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoTelegram } from 'react-icons/bi';
import Ring from '../../../assets/Hero/Engel Ring.png';
import Cloud from '../../../components/Cloud';
import TopFadeMask from '@/components/TopFadeMask';

export default function Hero() {
  return (
    <section
      id="Hero"
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden"
    >
      <TopFadeMask position="bottom" className="w-screen">
        <video
          className="absolute h-full w-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={heroBG} type="video/mp4" />
        </video>
      </TopFadeMask>
     

      <div className="justify-top 3xl:min-h-[1181px] relative z-20 flex max-h-[1080px] min-h-[600px] max-w-[1920px] flex-col items-center sm:min-h-[800px] md:min-h-[900px] lg:min-h-[1000px] xl:min-h-[1100px]">
        {/* Cat  */}
        <div className="3xl:mt-[100px] 3xl:max-h-[836px] 3xl:max-w-[783px] mt-[50px] max-h-[400px] max-w-[350px] sm:mt-[60px] sm:max-h-[500px] sm:max-w-[450px] md:mt-[70px] md:max-h-[600px] md:max-w-[550px] lg:mt-[80px] lg:max-h-[700px] lg:max-w-[650px] xl:mt-[90px] xl:max-h-[750px] xl:max-w-[700px]">
          <img
            src={EngelCat}
            alt="Engel Cat"
            className="h-full w-full object-contain"
          />
        </div>

        {/* logo set */}
        <div className="3xl:mt-[-525px] 3xl:h-[248px] 3xl:max-w-[1000px] mt-[-250px] flex h-[120px] w-[280px] w-full max-w-[280px] flex-col justify-between sm:mt-[-300px] sm:h-[150px] sm:max-w-[600px] md:mt-[-390px] md:h-[180px] md:max-w-[600px] lg:mt-[-400px] lg:h-[200px] lg:max-w-[800px] xl:mt-[-450px] xl:h-[220px] xl:max-w-[900px]">
          <div className="flex items-start justify-between">
            <HeroLogo>
              <img
                src={Logo1}
                alt="Logo 1"
                className="3xl:h-[37px] 3xl:w-[37px] h-[20px] w-[20px] sm:h-[25px] sm:w-[25px] md:h-[30px] md:w-[30px] lg:h-[33px] lg:w-[33px]"
              />
            </HeroLogo>
            <HeroLogo>
              <BiLogoTelegram className="3xl:h-[45px] 3xl:w-[45px] h-[22px] w-[22px] sm:h-[28px] sm:w-[28px] md:h-[35px] md:w-[35px] lg:h-[40px] lg:w-[40px]" />
            </HeroLogo>
          </div>
          <div className="3xl:mx-[60px] 3xl:mt-[120px] mx-[30px] mt-[60px] flex items-end justify-between sm:mx-[40px] sm:mt-[75px] md:mx-[45px] md:mt-[90px] lg:mx-[50px] lg:mt-[100px] xl:mx-[55px] xl:mt-[110px]">
            <HeroLogo>
              <FaXTwitter className="3xl:h-[50px] 3xl:w-[50px] h-[25px] w-[25px] sm:h-[30px] sm:w-[30px] md:h-[38px] md:w-[38px] lg:h-[43px] lg:w-[43px]" />
            </HeroLogo>
            <HeroLogo>
              <img
                src={Logo4}
                alt="Logo 4"
                className="3xl:h-[53px] 3xl:w-[53px] h-[28px] w-[28px] sm:h-[35px] sm:w-[35px] md:h-[42px] md:w-[42px] lg:h-[47px] lg:w-[47px]"
              />
            </HeroLogo>
          </div>
        </div>

        {/* Ring */}
        <div>
          <img
            src={Ring}
            alt="Ring"
            className="3xl:mt-[-555px] 3xl:ml-[40px] 3xl:w-[350px] mt-[-200px] ml-[10px] h-auto w-[130px] sm:mt-[-330px] sm:ml-[15px] sm:w-[170px] md:mt-[-390px] md:ml-[20px] md:w-[210px] lg:mt-[-460px] lg:ml-[25px] lg:w-[260px] xl:mt-[-500px] xl:ml-[30px] xl:w-[300px]"
          />
        </div>

        {/* cloud set */}
        <div className="justify-left 3xl:h-[375px] 3xl:max-w-[1252px] z-[-10] mt-[-520px] h-[100px] w-full max-w-[650px] sm:h-[250px] sm:max-w-[800px] md:h-[250px] md:max-w-[750px] lg:mx-auto lg:mt-[-575px] lg:h-[320px] lg:max-w-[1050px] xl:mt-[-610px] xl:h-[350px] xl:max-w-[1150px]">
          <Cloud className="3xl:mt-[700px] 3xl:ml-[370px] 3xl:h-[340px] 3xl:w-[555px] mt-[570px] ml-[20px] h-[100px] w-[150px] sm:mt-[550px] sm:ml-[150px] sm:h-[220px] sm:w-[280px] md:mt-[585px] md:ml-[180px] md:h-[230px] md:w-[300px] lg:mt-[600px] lg:ml-[220px] lg:h-[300px] lg:w-[420px] xl:mt-[650px] xl:ml-[280px] xl:h-[320px] xl:w-[480px]" />
          <Cloud className="3xl:mt-[-375px] 3xl:h-[340px] 3xl:w-[555px] mt-[-100px] ml-[120px] h-[100px] w-[150px] sm:mt-[-200px] sm:ml-[0px] sm:h-[220px] sm:w-[280px] md:mt-[-250px] md:h-[230px] md:w-[300px] lg:mt-[-320px] lg:h-[300px] lg:w-[420px] xl:mt-[-350px] xl:h-[320px] xl:w-[480px]" />
          <Cloud className="3xl:mt-[-300px] 3xl:ml-[700px] 3xl:h-[340px] 3xl:w-[555px] mt-[-100px] ml-[180px] h-[100px] w-[120px] sm:mt-[-200px] sm:ml-[300px] sm:h-[220px] sm:w-[280px] md:mt-[-210px] md:ml-[400px] md:h-[230px] md:w-[300px] lg:mt-[-270px] lg:ml-[480px] lg:h-[300px] lg:w-[420px] xl:mt-[-270px] xl:ml-[580px] xl:h-[320px] xl:w-[480px]" />
        </div>
      </div>
    </section>
  );
}
