import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { TimelineDialog } from "./TimelineDialog";

const destinations = [
  {
    id: "munsiyari",
    image: "/api/placeholder/300/200",
    title: "Munsiyari",
    location: "Uttarakhand",
    duration: "5 Days",
    groupSize: "4-8",
    rating: 4.8,
    price: "₹15,999",
    badge: "Popular",
    description: "Himalayan village known for panoramic views of the Panchachuli peaks"
  },
  {
    id: "nainital",
    image: "/api/placeholder/300/200", 
    title: "Nainital to Mukteshwar",
    location: "Uttarakhand",
    duration: "3 Days",
    groupSize: "2-6",
    rating: 4.6,
    price: "₹8,999",
    badge: "Trending",
    description: "Lake district and serene hill stations with breathtaking mountain views"
  },
  {
    id: "teerthanjeevi",
    image: "/api/placeholder/300/200",
    title: "Teerthan Jibhi - Manali",
    location: "Himachal Pradesh", 
    duration: "5 Days",
    groupSize: "4-8",
    rating: 4.9,
    price: "₹12,999",
    badge: "Adventure",
    description: "Offbeat Himalayan valleys with pristine nature and peaceful vibes"
  },
  {
    id: "tawang",
    image: "/api/placeholder/300/200",
    title: "Saurabh Arunachal Pradesh",
    location: "Arunachal Pradesh",
    duration: "7 Days", 
    groupSize: "6-12",
    rating: 4.7,
    price: "₹18,999",
    badge: "Exclusive",
    description: "Buddhist monasteries and high-altitude landscapes in India's northeast"
  }
];

const NationalDestinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const handleExploreJourney = (destinationId: string) => {
    setSelectedDestination(destinationId);
  };

  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            National <span className="gradient-text">Destinations</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover the beauty of India with our curated itineraries. From mountain peaks to serene lakes, adventure awaits.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group overflow-hidden hover-lift glass-card border-border/20">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {destination.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary text-white">
                      {destination.badge}
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 flex items-center gap-1 glass-card px-2 py-1 rounded-full">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">{destination.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <Clock size={14} className="text-primary" />
                    <span className="text-white/70">{destination.duration}</span>
                    <Users size={14} className="text-primary ml-2" />
                    <span className="text-white/70">{destination.groupSize}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-1 text-white">{destination.title}</h3>
                  <p className="text-sm text-primary mb-2">{destination.location}</p>
                  <p className="text-xs text-white/60 mb-3 line-clamp-2">{destination.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-white/60">from </span>
                      <span className="text-base font-bold text-white">{destination.price}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-emerald hover:scale-105 transition-transform duration-300 text-xs px-3 py-1"
                      onClick={() => handleExploreJourney(destination.id)}
                    >
                      Explore Journey <ArrowRight size={12} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 bg-primary/10 backdrop-blur-md hover:bg-primary/20 text-white px-8"
          >
            View More Destinations
          </Button>
        </div>
      </div>

      {/* Timeline Dialog */}
      <TimelineDialog 
        destinationId={selectedDestination} 
        onClose={() => setSelectedDestination(null)} 
      />
    </section>
  );
};

export default NationalDestinations;