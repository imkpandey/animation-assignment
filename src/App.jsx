import Navbar from "./components/Navbar";
import TextAnimation from "./components/TextAnimation";
import Lenis from "@studio-freight/lenis";

import "./App.css";

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Navbar />
      <TextAnimation />
    </>
  );
}

export default App;
