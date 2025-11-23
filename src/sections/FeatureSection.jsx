import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "../assets/data";

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 3000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleHover = (index) => {
    setIsPaused(true);
    setActiveIndex(index);
  };

  const handleLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="container mx-auto px-4 py-24">

      {/* Title */}
      <div className="max-w-2xl mb-20">
        <h2 className="text-5xl md:text-6xl mb-6 tracking-tight clash-display text-left">
          Advanced Training
          <br />
          <span className="font-medium clash-display grad1">
            Features & Tools
          </span>
        </h2>

        <p className="text-lg text-zinc-300/80 text-left">
          Experience professional-grade trading tools and features designed for
          both fresh and experienced users.
        </p>
      </div>

      {/* Feature content */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Left side */}
          <div className="md:col-span-5 space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
                onClick={() => setActiveIndex(index)}
                className={`flex items-start gap-4 cursor-pointer hover:bg-indigo-500/10 p-3 transition-all duration-300 rounded-xl border ${
                  activeIndex === index
                    ? "border-indigo-400/50 bg-indigo-500/10"
                    : "border-transparent"
                }`}
              >
                {/* Icon */}
                <div className="text-indigo-300">{feature.icon}</div>

                {/* Content */}
                <div>
                  <h3 className="text-base clash-display text-indigo-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-300/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="md:col-span-7 min-h-[320px] flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[activeIndex].title}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="glass rounded-xl overflow-hidden w-full relative">
                <div className="inset-0 bg-gradient-to-br from-indigo-500 to-transparent">
                  <img
                    src={features[activeIndex].image}
                    alt="feature-image"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
