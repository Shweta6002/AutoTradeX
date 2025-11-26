import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

import Login from "./pages/Login";
import Register from "./pages/Register";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
    });

    window.smoother = smoother;
  }, []);


  return (
    <div className="bg-[#0f0f10] text-zinc-100">
      <NavBar />

      {/* GSAP REQUIRED STRUCTURE */}
      <div id="smooth-wrapper">
        <div id="smooth-content" className="bg-[#0f0f10] text-zinc-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
