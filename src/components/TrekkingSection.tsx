import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Users, ArrowRight, Mountain } from "lucide-react";
import { useState } from "react";
import { TimelineDialog } from "./TimelineDialog";

const trekkingDestinations = [
  {
    id: "dayara-valley",
    image: "/api/placeholder/500/300",
    title: "Dayara Valley Trek",
    location: "Uttarakhand",
    duration: "4 Days",
    difficulty: "Moderate",
    rating: 4.8,
    price: "₹8,499",
    groupSize: "6-12",
    badge: "Popular",
    description: "Valley of flowers, snow-capped peaks, camping under stars"
  },
  {
    id: "khaliya-top",
    image: "/api/placeholder/500/300", 
    title: "Khaliya Top Trek",
    location: "Uttarakhand",
    duration: "4 Days",
    difficulty: "Moderate", 
    rating: 4.7,
    price: "₹7,999",
    groupSize: "4-10",
    badge: "Adventure",
    description: "Himalayan meadows, Panchachuli peaks, alpine adventure"
  }
];

const TrekkingSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="text-primary" size={32} />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Trekking <span className="gradient-text">Adventures</span>
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Challenge yourself with our curated trekking expeditions. From valley floors to mountain peaks, discover the thrill of the trail.
          </p>
        </div>

        {/* Trekking Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {trekkingDestinations.map((trek, index) => (
            <Card key={trek.id} className="overflow-hidden glass-card border-border/20 hover-lift group">
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={trek.image}
                  alt={trek.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {trek.badge && (
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {trek.badge}
                  </Badge>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-1 glass-card px-2 py-1 rounded-full">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">{trek.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 glass-card px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-white">{trek.difficulty}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <div className="flex items-center gap-1 text-white/70">
                    <Calendar size={14} className="text-primary" />
                    {trek.duration}
                  </div>
                  <div className="flex items-center gap-1 text-white/70">
                    <Users size={14} className="text-primary" />
                    {trek.groupSize}
                  </div>
                  <div className="flex items-center gap-1 text-white/70">
                    <Mountain size={14} className="text-primary" />
                    {trek.location}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{trek.title}</h3>
                <p className="text-white/60 mb-4">{trek.description}</p>

                {/* Trek Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    "Professional Guide",
                    "Safety Equipment", 
                    "Camping Gear",
                    "All Permits"
                  ].map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-white/70">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-border/20">
                  <div>
                    <span className="text-white/60 text-sm">Starting from</span>
                    <div className="text-2xl font-bold text-white">{trek.price}</div>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-transform duration-300"
                    size="lg"
                    onClick={() => setSelectedDestination(trek.id)}
                  >
                    Explore Journey →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 bg-primary/10 backdrop-blur-md hover:bg-primary/20 text-white px-8"
          >
            View All Treks
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

export default TrekkingSection;