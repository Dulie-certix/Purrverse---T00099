
import Hero from  "./pages/pageA/sections/Hero";
import  Section1 from "./pages/pageA/sections/RoadMap";
import Section2 from "./pages/pageA/sections/Tokenomics";
import Section3 from "./pages/pageA/sections/Features";
import About from "./pages/pageA/sections/About";
import Section5 from "./pages/pageA/sections/BuyNow";
import Nav from "./pages/pageA/sections/Nav";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full">
        <div className="bg-[linear-gradient(180deg,_#001821_0%,_#001821_41.06%,_#86CDEA_65.08%,_#86CDEA_89.42%,_#86CDEA_100%)]">
          <Hero />
          <Section1 />
          <Section2 />
          {/* <Section3 />
          <About />
          <Section5 />
          <Nav /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
