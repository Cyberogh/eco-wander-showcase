import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { TimelineDialog } from "./TimelineDialog";

const InternationalSection = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            International <span className="gradient-text">Escapes</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Cross borders, not budgets. Carefully crafted international experiences that make every moment count in just 72 hours.
          </p>
        </div>

        {/* Featured Destination - Colombo */}
        <div className="mb-16">
          <Card className="overflow-hidden glass-card border-border/20">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-auto">
                <img 
                  src="/api/placeholder/600/400"
                  alt="Colombo Sri Lanka"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1">
                  SRI LANKA
                </Badge>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Colombo</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    The pearl of the Indian Ocean. Ancient temples, vibrant spices, and pink seas. 
                    Prepare yourself to be transformed.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-white/60">
                      <span className="text-sm">Top Restaurants</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <span className="text-sm">Ancient Temples</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <span className="text-sm">Colonial Drives</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <span className="text-sm">Wildlife Safari</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Preview */}
                <div className="bg-background/30 rounded-lg p-4 mb-6">
                  <h4 className="text-white font-semibold mb-3">Your 3-Day Itinerary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white">1</div>
                      <span className="text-white/70">Arrival & City Tour</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white">2</div>
                      <span className="text-white/70">Adventure & Culture</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white">3</div>
                      <span className="text-white/70">Relaxation & Departure</span>
                    </div>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-white text-sm">4.7</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} className="text-primary" />
                      <span className="text-white/70 text-sm">Up to 8 guests</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-white">₹35,999</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <Button 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-transform duration-300 flex-1"
                    size="lg"
                    onClick={() => setSelectedDestination('colombo')}
                  >
                    Explore Journey →
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/30 bg-primary/10 backdrop-blur-md hover:bg-primary/20 text-white"
                    size="lg"
                  >
                    Book Experience →
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other International Destinations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Nepal", price: "₹25,999", rating: 4.8, image: "/api/placeholder/300/200" },
            { name: "Thailand", price: "₹42,999", rating: 4.9, image: "/api/placeholder/300/200" },
            { name: "Malaysia", price: "₹38,999", rating: 4.7, image: "/api/placeholder/300/200" },
            { name: "Maldives", price: "₹75,999", rating: 4.9, image: "/api/placeholder/300/200" }
          ].map((dest, index) => (
            <Card key={dest.name} className="group overflow-hidden hover-lift glass-card border-border/20">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 glass-card px-2 py-1 rounded-full">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-white">{dest.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">{dest.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{dest.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-gradient-emerald hover:scale-105 transition-transform duration-300 text-xs"
                    onClick={() => setSelectedDestination(dest.name.toLowerCase())}
                  >
                    Explore <ArrowRight size={12} className="ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
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

export default InternationalSection;
