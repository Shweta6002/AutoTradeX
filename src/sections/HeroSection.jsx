import { Command, ArrowRight } from "lucide-react";

const HeroSection = () => {
  console.log("HeroSection rendered");
  return (
    <section className="relative container mx-auto px-4 pt-40 pb-20 justify-center items-center flex flex-col">
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
        <div className="glass rounded-xl overflow-hidden">
          <img src="/chart2.png" alt="hero-image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
