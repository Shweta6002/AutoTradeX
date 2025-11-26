import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  setTimeout(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });

    window.smoother = smoother;
  }, 200); // smoother needs DOM to be ready
}, []);


  return (
    <div className="bg-[#0f0f10] text-zinc-100">
      {/* ✔ Navbar only when NOT on dashboard */}
      {!location.pathname.toLowerCase().startsWith("/dashboard") && <NavBar />}

      <div id="smooth-wrapper">
        <div id="smooth-content" className="bg-[#0f0f10] text-zinc-100">
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
