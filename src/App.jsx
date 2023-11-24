import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Features from "./components/Features";
import FigSection from "./components/FigSection";
import History from "./components/History";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Progress from "./components/Progress";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <About />
      <FigSection />
      <Progress />
      <Pricing />
      <History />
      <Video />
    </>
  );
}

export default App;
