
import Hero from  "./pages/pageA/sections/Hero";
import  Section1 from "./pages/pageA/sections/Section1";
import Section2 from "./pages/pageA/sections/Section2";
import Section3 from "./pages/pageA/sections/Section3";

function App() {
  return (
    <div className="bg-[linear-gradient(180deg,_#001821_0%,_#001821_61.06%,_#86CDEA_73.08%,_#86CDEA_89.42%,_#86CDEA_100%)]  bg-blend-screen">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
