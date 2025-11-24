import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import line from "/line.svg"; // your SVG

const AnimatedLine = () => {
  const ref = useRef(null);

  // track scroll only while line is visible
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 80%", "1 20%"],
  });

  // line draw effect (Lusion style)
  const draw = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // slight horizontal stretch
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  // gentle float
  const translateY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <section
      ref={ref}
      className="w-full flex items-center justify-center py-24"
    >
      <motion.img
        src={line}
        alt="animated-line"
        className="w-[90%] max-w-5xl"
        style={{
          scaleX,
          y: translateY,
          filter: "drop-shadow(0 0 12px rgba(37,99,235,0.4))",
          maskImage: `linear-gradient(to right, black calc(100% * ${draw.get()}), transparent)`,
          WebkitMaskImage: `linear-gradient(to right, black calc(100% * ${draw.get()}), transparent)`,
        }}
      />
    </section>
  );
};

export default AnimatedLine;
