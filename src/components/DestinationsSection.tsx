import DestinationCard from "./DestinationCard";
import beachImage from "@/assets/destination-beach.jpg";
import templeImage from "@/assets/destination-temple.jpg";
import auroraImage from "@/assets/destination-aurora.jpg";

const DestinationsSection = () => {
  const destinations = [
    {
      image: beachImage,
      title: "Maldives Paradise",
      location: "Maldives Islands",
      duration: "5 Days",
      groupSize: "2-8",
      rating: 4.9,
      price: "$2,500",
      badge: "Popular",
      description: "Crystal clear waters, overwater bungalows, and pristine beaches. Experience luxury in tropical paradise with world-class diving and spa treatments."
    },
    {
      image: templeImage,
      title: "Ancient Temple Trek",
      location: "Cambodia",
      duration: "7 Days", 
      groupSize: "4-12",
      rating: 4.8,
      price: "$1,800",
      badge: "Adventure",
      description: "Explore mystical ancient temples hidden in lush jungles. Discover rich cultural heritage and archaeological wonders of Southeast Asia."
    },
    {
      image: auroraImage,
      title: "Northern Lights Experience",
      location: "Iceland",
      duration: "4 Days",
      groupSize: "2-6", 
      rating: 4.7,
      price: "$3,200",
      badge: "Exclusive",
      description: "Witness the magical aurora borealis dancing across pristine arctic skies. Stay in luxury glass igloos for the ultimate viewing experience."
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            National <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty of incredible destinations with our curated adventures. 
            From mountain peaks to serene lakes, adventure awaits.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={destination.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <DestinationCard {...destination} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-glow transition-colors duration-300">
            Explore Journey →
            <div className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;