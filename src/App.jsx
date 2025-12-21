import Hero from "./sections/Hero";
import WhySpecial from "./sections/WhySpecial";
import EasterEgg from "./components/EasterEgg";
import song from "./assets/music/song.mp3";
import "./styles/theme.css";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div>
      <Hero />
      <WhySpecial />
      <MusicPlayer src = {song}/>
      <EasterEgg />
    </div>
  );
}

export default App;
