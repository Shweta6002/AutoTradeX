import CTASection from "../sections/CTASection";
import FeatureSection from "../sections/FeatureSection";
import HeroSection from "../sections/HeroSection";
import LogoCarousel from "../sections/LogoCarousel";
import PricingSection from "../sections/PricingSection";
import TestimonialSection from "../sections/TestimonialSection";
import Footer from "../components/Footer";



const HomePage = () => {
  console.log("HomePage rendered");
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
