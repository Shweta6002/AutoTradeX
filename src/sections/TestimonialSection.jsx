import {useRef} from "react";
import { testimonials } from "../assets/data";

const TestimonialSection = () => {

  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {

    //pause marquee on hover
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty('--marquee-play-state', 'paused');
    }
  };

    //Resume marquee on mouse leave
    const handleMouseLeave = () => {
      if (marqueeRef.current) {
        marqueeRef.current.style.setProperty('--marquee-play-state', 'running');
      }
  };

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 ">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal mb-4 clash-display ">
            Trusted by traders
          </h2>
          <p className="text-zinc-400/90 text-lg">
            Join thousands of satisfied traders on AutoTradeX
          </p>
        </div>

        {/* MARQUEE */}
        <div className="relative flex flex-col antialised">
          {/* Container */}
          <div ref={marqueeRef} className="relative flex gap-12 overflow-hidden py-4">
            {/* Moving part */}
            <div className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8" style={{animationPlayState: 'var(--marquee-play-state)'}}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-[400px] cursor-pointer shrink-0 bg-[#0f0f10] backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl"
                >
                  {/* Image & name */}
                  <div className="centered-row gap-4 mb-6">
                    {/* Img */}
                    <div className="h-12 w-12 overflow-clip rounded-full text-xl center-item text-center bg-pink-500 ">
                      {!testimonial.image ? (
                        testimonial.name[0]
                      ) : (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className=""
                        />
                      )}
                    </div>

                    {/* name & role */}
                    <div className="">
                      <h4 className="font-medium text-lg clash-display text-white/90 ">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-white/60 ">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
            {/* Duplicate:moving part */}

            <div className="animate-marquee min-w-full flex shrink-0 items-stretch gap-8" style={{animationPlayState: 'var(--marquee-play-state)'}}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-[400px] cursor-pointer shrink-0 bg-[#0f0f10] backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8 border-2 rounded-xl">
                  {/* Image & name */}
                  <div className="centered-row gap-4 mb-6">
                    {/* Img */}
                    <div className="h-12 w-12 overflow-clip rounded-full text-xl center-item text-center bg-pink-500 ">
                      {!testimonial.image ? (
                        testimonial.name[0]
                      ) : (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className=""
                        />
                      )}
                    </div>

                    {/* name & role */}
                    <div className="">
                      <h4 className="font-medium text-lg clash-display text-white/90 ">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-white/60 ">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decor Smooth Edges */}
          <div className="absolute h-full w-25 md:w-50 bg-gradient-to-r from-[#0f0f10] to-transparent left-0"></div>
          <div className="absolute h-full w-25 md:w-50 bg-gradient-to-l from-[#0f0f10] to-transparent right-0"></div>
          

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
