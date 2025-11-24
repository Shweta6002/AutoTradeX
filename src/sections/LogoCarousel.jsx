import { motion } from "framer-motion";

const LogoCarousel = () => {
  const logos = [
    "/log1.png",
    "/log2.png",
    "/log3.png",
    "/log4.png",
    "/log5.png",
  ];

  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="opacity-[0.7] w-full overflow-hidden cursor-pointer bg-[#0f0f10] backdrop-blur-sm py-12 mt-10">
      <motion.div
        className="flex gap-40"
        initial={{ opacity: 1, x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          x: { duration: 15, repeat: Infinity, ease: "linear" },
        }}
      >
        {extendedLogos.map((item, index) => (
          <motion.img
            key={index}
            src={item}
            alt="logo"
            className="h-8 object-contain"
            initial={{ opacity: 0.6 }}
            whileHover={{
              opacity: 1,
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
