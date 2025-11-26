import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // IMPORTANT: Your homepage is "/HomePage", not "/"
  const isHomePage = location.pathname.toLowerCase() === "/homepage";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -----------------------------------------------------
  //  FIXED MAIN SCROLLER — SAFEST VERSION
  // -----------------------------------------------------
  const goToSection = (id) => {
    const smoother = window.smoother;
    const target = document.querySelector(`#${id}`);

    // 👉 If we are NOT on homepage → navigate + pass scroll param
    if (!isHomePage) {
      navigate(`/HomePage?scroll=${id}`);
      return;
    }

    // 👉 If target doesn't exist yet → avoid GSAP error
    if (!target) return;

    // 👉 When on homepage → scroll using smoother (if exists)
    if (smoother && smoother.scrollTo) {
      smoother.scrollTo(target, true, "top top");
    } else {
      gsap.to(window, { duration: 1, scrollTo: target });
    }
  };

  return (
    <header
      className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "h-14 bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl"
          : "h-14 bg-[#1b1b1b] w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="centered-row justify-between h-full">
          {/* Logo */}
          <Link
            to="/HomePage"
            className="centered-row gap-2 hover:-translate-y-1 transition-all ease-out duration-200"
          >
            <img src="/logo.png" className="w-5 h-5" />
            <span className="font-bold text-base clash-display">
              AutoTradeX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex centered-row gap-6">
            <button
              onClick={() => goToSection("features")}
              className="text-sm hover:text-indigo-300/90 transition-all duration-300"
            >
              Features
            </button>

            <button
              onClick={() => goToSection("pricing")}
              className="text-sm hover:text-indigo-300/90 transition-all duration-300"
            >
              Pricing
            </button>

            <button
              onClick={() => goToSection("testimonials")}
              className="text-sm hover:text-indigo-300/90 transition-all duration-300"
            >
              Testimonials
            </button>

            {/* CTA */}
            <Link
              to="/login"
              className="clash-display text-base bg-gradient-to-r from-[#2563ea] to-[#143680] px-4 py-2 rounded-full hover:-translate-y-0.5 transition-all ease-out duration-200 hover:shadow-lg hover:shadow-indigo-900"
            >
              Start Trading
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden glass p-1 rounded-md">
            <img src="/menu.svg" alt="menu.icon" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
