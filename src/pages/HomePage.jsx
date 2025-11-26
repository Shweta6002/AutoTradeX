import CTASection from "../sections/CTASection";
import FeatureSection from "../sections/FeatureSection";
import HeroSection from "../sections/HeroSection";
import LogoCarousel from "../sections/LogoCarousel";
import PricingSection from "../sections/PricingSection";
import TestimonialSection from "../sections/TestimonialSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  console.log("HomePage rendered");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const scrollId = searchParams.get("scroll");

    if (!scrollId) return;

    setTimeout(() => {
      if (window.smoother) {
        window.smoother.scrollTo(`#${scrollId}`, true);
      } else {
        gsap.to(window, { duration: 1, scrollTo: `#${scrollId}` });
      }
    }, 300);
  }, [searchParams]);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Logo carousel Section */}
      <LogoCarousel />

      {/* Features Section */}
      <FeatureSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
