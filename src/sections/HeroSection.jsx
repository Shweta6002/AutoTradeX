import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  console.log("HeroSection rendered");

  const sectionRef = useRef(null);

  const { scrollYProgress: pageScroll } = useScroll();
  const rotateX = useTransform(pageScroll, [0, 0.2], [30, 0]);

  // Refs for scroll animation
  const imgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // SVG PATH LENGTH AUTO-DETECTION
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(3000);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
    }
  }, []);

  const initialVisible = pathLength * 1.7; // 8% of line visible on load

  // Scroll-driven animation values
  const strokeOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [initialVisible, 0]
  );
  const lineOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id=""
      className=" container mx-auto px-4 pt-40 pb-20 justify-center items-center flex flex-col"
    >
      {/* BACKGROUND SVG LINE */}
      <motion.svg
        className="absolute left-0 top-0 w-full pointer-events-none z-0"
        style={{
          top: imgRef.current?.offsetTop ?? 800,
        }}
        viewBox="0 0 1940 2000"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          ref={pathRef}
          d="M-84.3155 20C761.659 89.482 333.563 677.742 207.918 516.066C82.2732 354.39 495.301 60.8212 654.371 241.674C813.441 422.527 610 815.458 933 592.979C1256 370.5 891.5 1404.5 1150.5 1544.5C1409.5 1684.5 1919 696 1497 790C1075 884 1749 1356 2038 1331C2327 1306 2285.5 1086 2285.5 1086"
          stroke="url(#paint0_linear_3_33)"
          strokeWidth="40"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          filter="url(#glow)"
          /** ✔ Fully hidden on load */
          initial={{
            strokeDashoffset: pathLength,
            opacity: 0,
          }}
          /** ✔ Only scroll changes visibility/drawing */
          style={{
            strokeDashoffset: strokeOffset,
            opacity: lineOpacity,
          }}
        />

        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 1 0"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id="paint0_linear_3_33"
            x1="-1"
            y1="-28"
            x2="1427"
            y2="723"
          >
            <stop offset="0.09" stopColor="#2563EB" />
            <stop offset="0.25" stopColor="#2F6AEC" />
            <stop offset="0.51" stopColor="#5283EF" />
            <stop offset="0.82" stopColor="#86A8F4" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Decorative: Sub-title */}
      <div className="flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass ">
        <span className="text-sm font-medium text-zinc-300">
          <img src="/logo.png" className="w-4 h-4 inline-block mr-4" />
          India's #1 Advanced Auto Trading Platform
        </span>
      </div>
      {/* Hero Text*/}
      <div className="max-w-8xl relative z-10">
        {/* Heading*/}
        <h1 className="text-5xl md:text-8xl mb-4 tracking-tight text-center">
          <span className="clash-display grad1">Trade with AutoTradeX</span>
          <br />
          <span className="text-zinc-50 clash-display ">Reliable & Secure</span>
        </h1>
        {/* Para*/}
        <p className="text-lg text-zinc-300/80 mb-8 max-w-2xl text-center mx-auto">
          Experience seamless and automated trading with AutoTradeX, your
          trusted partner in the market.
          <span className="text-zinc-200"> Start Trading in minutes</span>
        </p>
        {/*Buttons*/}
        <div className="col sm:flex-row gap-4 items-center centered-row justify-center flex flex-col sm:flex-row">
          <button className="bg-[#2563ea] text-base clash-display px-4 py-3 rounded-full cursor-pointer hover:-translate-y-1 transition2 hover:bg-indigo-500/20">
            Start Trading Now
          </button>
          <button
            onClick={() =>
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#0f0f10] text-zinc-50 text-base clash-display glass px-8 centered-row gap-2 py-3 rounded-full cursor-pointer hover:-translate-y-1 transition2 hover:bg-indigo-500/20"
          >
            View Pricing <ArrowRight className="" />
          </button>
        </div>
      </div>
      {/* Hero Image */}
      <div className="relative mx-auto max-w-5xl mt-20">
        <div
          className="relative mx-auto max-w-5xl mt-5"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            style={{ rotateX, transformStyle: "preserve-3d" }}
            className="glass rounded-xl overflow-hidden shadow-2xl"
          >
            <img src="/chart2.png" className="w-full h-auto opacity-[0.5]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
