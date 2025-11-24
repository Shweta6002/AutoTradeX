import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="bg-[#0f0f10] text-zinc-100">
      <NavBar />

      {/* GSAP REQUIRED STRUCTURE */}
      <div id="smooth-wrapper">
        <div id="smooth-content" className="bg-[#0f0f10] text-zinc-100">
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default App;
