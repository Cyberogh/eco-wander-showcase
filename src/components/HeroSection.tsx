import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Paradise
              <br />
              awaits
              <br />
              <span className="gradient-text">your arrival</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover breathtaking destinations that feel like a dream. 
              From mountain peaks to crystal shores, adventure awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-emerald hover:scale-105 transition-transform duration-300 glow px-8 py-4 text-lg">
                Explore Destinations →
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 bg-background/10 backdrop-blur-md hover:bg-primary/10 px-8 py-4 text-lg"
              >
                Watch Video
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <div className="animate-slide-up">
            <Card className="glass p-6 hover-lift">
              <h3 className="text-xl font-semibold mb-6 text-center">Book Your 3-Day Adventure</h3>
              
              <div className="space-y-4">
                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    Select Destination
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Choose your destination" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mountains">Mountain Retreat</SelectItem>
                      <SelectItem value="beach">Tropical Beach</SelectItem>
                      <SelectItem value="forest">Forest Adventure</SelectItem>
                      <SelectItem value="aurora">Northern Lights</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Dates */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    Select Dates
                  </label>
                  <Input 
                    type="date" 
                    className="bg-background/50"
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    Guests
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="2 guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Search Button */}
                <Button 
                  className="w-full bg-gradient-hero hover:scale-105 transition-transform duration-300 py-3 text-lg font-semibold"
                  size="lg"
                >
                  <Search size={20} className="mr-2" />
                  Find Your Journey →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;