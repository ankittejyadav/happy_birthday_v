import Hero from "./sections/Hero";
import WhySpecial from "./sections/WhySpecial";
import EasterEgg from "./components/EasterEgg";
import Gallery from "./sections/Gallery";
import "./styles/theme.css";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <WhySpecial />
      {/* <Gallery /> */}
      <EasterEgg />
    </div>
  );
}

export default App;
