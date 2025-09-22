import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UpcomingTravelsSection from "@/components/UpcomingTravelsSection";
import NationalDestinations from "@/components/NationalDestinations";
import InternationalSection from "@/components/InternationalSection";
import TrekkingSection from "@/components/TrekkingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <UpcomingTravelsSection />
      <NationalDestinations />
      <InternationalSection />
      <TrekkingSection />
      <WhyChooseSection />
      <Footer />
    </div>
  );
};

export default Index;