import { Command } from "lucide-react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="centered-row gap-2 hover:-translate-y-1 transition-all ease-out duration-200">
            <img src="/logo.png" className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-base clash-display">
              AutoTradeX
            </span>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex centered-row gap-6">
            {["Features", "Pricing", "Testimonials"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-sm hover:text-indigo-300/90 hover:-translate-y-1 ease-out transition-all duration-300"
              >
                {item}
              </a>
            ))}

            {/* Button */}

            <button className="clash-display text-base bg-gradient-to-r from-[#2563ea] to-[#143680] px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 transition-all ease-out duration-200 hover:shadow-lg hover:shadow-xl hover:shadow-indigo-900">
              Start Trading
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden glass p-1 rounded-md">
            <img src="/menu.svg" alt="menu.icon" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
