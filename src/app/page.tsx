
import About from "./Components/about";
import CardV from "./Components/card";
import Diff from "./Components/diff";
import Hero from "./Components/hero";
import Hero2 from "./Components/hero2";
import Hero3 from "./Components/hero3";
import MainCard from "./Components/maincard";
import Questions from "./Components/Questions";
import Services from "./Components/services";
import GetStarted from "./Components/getStarted";
// import ShapesAnimation from "./Components/ShapesAnimation";

export default function Home() {
  return (
    <>
    {/* <ShapesAnimation/> */}
    <Hero/>
    <Hero2/>
    <About/>
    <Services/>
    <Hero3/>
    <CardV/>
    <Diff/>
    <MainCard/>
    <br />
    <Questions/>
    <br />
    <GetStarted/>
    </>
  );
}
