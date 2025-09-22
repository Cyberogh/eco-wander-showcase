import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, Users, ArrowRight, Clock4, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const upcomingDestinations = [
  {
    id: "tirthan-jibhi",
    image: "/api/placeholder/600/400",
    title: "Tirthan Jibhi Valley",
    location: "Himachal Pradesh",
    duration: "3 Days 2 Nights",
    rating: 4.9,
    price: "₹6,999",
    groupSize: "8-15",
    badge: "Limited Seats",
    description: "Pristine valley, crystal clear rivers, traditional villages",
    departure: "Sep 26, Friday"
  },
  {
    id: "manali",
    image: "/api/placeholder/600/400", 
    title: "Manali Adventure",
    location: "Himachal Pradesh",
    duration: "4 Days 3 Nights",
    rating: 4.8,
    price: "₹8,499",
    groupSize: "10-20",
    badge: "Almost Full",
    description: "Snow-capped peaks, adventure sports, mountain culture",
    departure: "Sep 26, Friday"
  },
  {
    id: "munsiyari",
    image: "/api/placeholder/600/400",
    title: "Munsiyari Himalayan Base",
    location: "Uttarakhand", 
    duration: "5 Days 4 Nights",
    rating: 4.7,
    price: "₹9,999",
    groupSize: "6-12",
    badge: "Last Chance",
    description: "Panchachuli peaks, glacier views, untouched wilderness",
    departure: "Sep 26, Friday"
  }
];

const UpcomingTravelsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-26T06:00:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-green-950/20 via-emerald-950/20 to-green-950/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header with Urgency */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock4 className="text-green-400 animate-pulse" size={32} />
            <h2 className="text-3xl md:text-5xl font-black text-white">
              <span className="text-green-400">URGENT:</span> Upcoming{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Travels
              </span>
            </h2>
          </div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-semibold">
            🔥 <span className="text-green-400">DEPARTURE IN:</span> Only few seats left! Book NOW before it's too late!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINS', value: timeLeft.minutes },
              { label: 'SECS', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={item.label} className="bg-green-600/20 backdrop-blur-md border border-green-500/30 rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-black text-green-400">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-xs font-bold text-white/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {upcomingDestinations.map((destination) => (
                <CarouselItem key={destination.id} className="pl-4 basis-1/2">
                  <Card className="overflow-hidden bg-gradient-to-br from-green-950/40 to-emerald-950/40 backdrop-blur-md border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105 group">
                    {/* Image */}
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={destination.image}
                        alt={destination.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white font-bold animate-pulse">
                        {destination.badge}
                      </Badge>
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm font-bold text-white">{destination.rating}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-green-600/80 backdrop-blur-md px-3 py-1 rounded-full">
                        <span className="text-sm font-bold text-white">{destination.departure}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <div className="flex items-center gap-1 text-white/80">
                          <Calendar size={14} className="text-green-400" />
                          {destination.duration}
                        </div>
                        <div className="flex items-center gap-1 text-white/80">
                          <Users size={14} className="text-green-400" />
                          {destination.groupSize}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={16} className="text-green-400" />
                        <span className="text-sm text-white/70 font-medium">{destination.location}</span>
                      </div>

                      <h3 className="text-xl font-black text-white mb-2">{destination.title}</h3>
                      <p className="text-white/70 mb-4 font-medium">{destination.description}</p>

                      {/* Urgency Features */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {[
                          "✅ Confirmed Departure",
                          "🚌 Transport Included", 
                          "🏨 Accommodation",
                          "🍽️ All Meals"
                        ].map((feature) => (
                          <div key={feature} className="text-sm text-white/80 font-medium">
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Price and Action */}
                      <div className="flex items-center justify-between pt-4 border-t border-green-500/20">
                        <div>
                          <span className="text-white/60 text-sm font-medium">Starting from</span>
                          <div className="text-xl font-black text-green-400">{destination.price}</div>
                        </div>
                        <Button 
                          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                          size="sm"
                        >
                          BOOK NOW →
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons */}
            <CarouselPrevious className="left-4 bg-green-600/80 border-green-500 hover:bg-green-500 text-white" />
            <CarouselNext className="right-4 bg-green-600/80 border-green-500 hover:bg-green-500 text-white" />
          </Carousel>
        </div>

        {/* Urgent Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-white font-bold mb-4">⚡ LAST MINUTE BOOKINGS!</p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-black px-8 py-3 text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-green-500/30"
            >
              🔥 BOOK ALL DESTINATIONS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTravelsSection;