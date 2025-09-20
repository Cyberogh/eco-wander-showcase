import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Search, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { BookingDialog } from "./BookingDialog";
import heroImage from "@/assets/hero-mountain.jpg";

const HeroSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Mountain landscape with flowers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Paradise
              <br />
              awaits
              <br />
              <span className="gradient-text">your arrival</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Tropical destinations that feel like a dream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-emerald hover:scale-105 transition-transform duration-300 glow px-8 py-4 text-lg"
                onClick={() => setIsBookingOpen(true)}
              >
                Explore Destinations →
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 px-8 py-4 text-lg text-white"
              >
                Watch Video
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <div className="animate-slide-up">
            <Card className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-center text-white">Book Your 3-Day Adventure</h3>
              
              <div className="space-y-4">
                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2 text-white/90">
                    <MapPin size={16} className="text-primary" />
                    Select Destination
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background/30 border-white/20 text-white">
                      <SelectValue placeholder="Choose your destination" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="munsiyari">Munsiyari</SelectItem>
                      <SelectItem value="nainital">Nainital to Mukteshwar</SelectItem>
                      <SelectItem value="teerthanjeevi">Teerthanjeevi</SelectItem>
                      <SelectItem value="tawang">Tawang, Arunachal Pradesh</SelectItem>
                      <SelectItem value="masuri">Masuri</SelectItem>
                      <SelectItem value="landoor">Landoor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dates */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2 text-white/90">
                    <Calendar size={16} className="text-primary" />
                    Select Dates
                  </label>
                  <Input 
                    type="date" 
                    className="bg-background/30 border-white/20 text-white"
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2 text-white/90">
                    <Users size={16} className="text-primary" />
                    2 Guests
                  </label>
                  <div className="flex items-center justify-between p-3 rounded-md bg-background/30 border border-white/20">
                    <span className="text-white">2 guests</span>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Minus size={16} className="text-white" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <Plus size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <Button 
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-transform duration-300 py-3 text-lg font-semibold"
                  size="lg"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Search size={20} className="mr-2" />
                  Send Inquiry →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Booking Dialog */}
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  );
};

export default HeroSection;