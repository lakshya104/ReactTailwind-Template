import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Features from "./components/Features";
import FigSection from "./components/FigSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Progress from "./components/Progress";

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
    </>
  );
}

export default App;
