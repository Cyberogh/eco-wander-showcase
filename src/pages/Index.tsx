import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UpcomingTravelsSection from "@/components/UpcomingTravelsSection";
import NationalDestinations from "@/components/NationalDestinations";
import InternationalSection from "@/components/InternationalSection";
import TrekkingSection from "@/components/TrekkingSection";
import StatsSection from "@/components/StatsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AdditionalInfoSection from "@/components/AdditionalInfoSection";
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
      <StatsSection />
      <div id="reviews">
        <GoogleReviewsSection />
      </div>
      <WhyChooseSection />
      <AdditionalInfoSection />
      <Footer />
    </div>
  );
};

export default Index;