import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <DestinationsSection />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default Index;
