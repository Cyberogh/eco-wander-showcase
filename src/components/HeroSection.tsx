import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users, Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Hls from "hls.js";
import heroImage from "@/assets/hero-mountain.jpg";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Your HLS video URL - update this to your actual .m3u8 URL
    const videoSrc = "/videos/hero-video.m3u8";

    // Check for native HLS support (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
    } else if (Hls.isSupported()) {
      // Configure HLS with optimized settings for smoother playback
      const hls = new Hls({
        maxBufferLength: 30,        // Buffer 30 seconds ahead
        maxMaxBufferLength: 60,     // Maximum buffer of 60 seconds
        maxBufferSize: 60 * 1000 * 1000, // 60 MB buffer
        maxBufferHole: 0.5,         // Maximum gap in buffer
        enableWorker: true,         // Use web worker for better performance
        lowLatencyMode: false,      // Prioritize smooth playback over latency
        backBufferLength: 10,       // Keep 10 seconds of back buffer
      });

      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      
      // Error handling
      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.error('Fatal HLS error:', data);
          // Try to recover
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      hlsRef.current = hls;
    }

    // Cleanup
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, []);

  const nationalDestinations = [
    "Munsiyari",
    "Nainital to Mukteshwar",
    "Tirthan Jibhi",
    "Tawang, Arunachal Pradesh",
    "Mussoorie - Landour - Rishikesh",
    "Dzukou Valley",
  ];

  const internationalDestinations = [
    "Nepal",
    "Thailand",
    "Malaysia",
    "Maldives",
    "Sri Lanka",
  ];

  const handleSendInquiry = () => {
    if (!selectedDestination || !selectedDate) {
      alert("Please select destination and date");
      return;
    }

    const message = `Hi, I am interested in ${selectedDestination} trip from ${selectedDate} onwards. For ${adults} adults${
      kids > 0 ? ` and ${kids} kids.` : ""
    } Please send details, cost and availability.`;
    const whatsappUrl = `https://wa.me/918960186655?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          poster={heroImage}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
             <Button
  size="lg"
  className="bg-gradient-emerald hover:scale-105 transition-transform duration-300 glow px-8 py-4 text-lg"
  onClick={() => {
    const section = document.getElementById("destinations");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Explore Destinations →
</Button>

            </div>
            {/* Rating Widgets */}
<div className="flex flex-col sm:flex-row gap-7 items-center justify-center lg:justify-start mt-7">
  {/* TripAdvisor Widget */}
  <div className="flex items-center gap-3 bg-white/100 backdrop-blur-md px-5 py-3 rounded-lg border border-blue/30">
    <div className="w-9 h-9 rounded overflow-hidden flex items-center justify-center">
      <img 
        src="/images/tripadvisor.jpeg" 
        alt="TripAdvisor" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <span className="text-yellow-400">★★★★★</span>
        <span className="text-black text-sm font-semibold">4.8</span>
      </div>
      <span className="text-black/80 text-xs">TripAdvisor</span>
    </div>
  </div>

  {/* Google Rating Widget */}
  <div className="flex items-center gap-3 bg-white/100 backdrop-blur-md px-5 py-3 rounded-lg border border-blue/30">
    <div className="w-9 h-9 rounded border border-gray-300 overflow-hidden flex items-center justify-center bg-white">
      <img 
        src="/images/Google.png" 
        alt="Google" 
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        <span className="text-yellow-400">★★★★★</span>
        <span className="text-black text-sm font-semibold">4.7</span>
      </div>
      <span className="text-black/80 text-xs">Google Reviews</span>
    </div>
  </div>
</div>


          </div>

          {/* Booking Form */}
          <div className="animate-slide-up">
            <Card className="glass-card p-4 sm:p-5 md:p-6 hover-lift space-y-5 scale-95">
              <h3 className="text-lg md:text-xl font-semibold text-center text-white">
                Book Your Adventure
              </h3>

              {/* Destination */}
              <div className="space-y-3">
                <label className="text-sm font-medium flex items-center gap-2 text-white/90">
                  <MapPin size={16} className="text-primary" />
                  Select Destination
                </label>
                <Tabs defaultValue="national" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-background/50 border border-white/20">
                    <TabsTrigger
                      value="national"
                      className="text-white data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      National
                    </TabsTrigger>
                    <TabsTrigger
                      value="international"
                      className="text-white data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      International
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="national" className="mt-3">
                    <Select
                      onValueChange={setSelectedDestination}
                      value={selectedDestination}
                    >
                      <SelectTrigger className="bg-background/50 border-white/20 text-white h-10">
                        <SelectValue placeholder="Choose national destination" />
                      </SelectTrigger>
                      <SelectContent className="bg-background/95 backdrop-blur-md border-border z-50">
                        {nationalDestinations.map((dest) => (
                          <SelectItem
                            key={dest}
                            value={dest}
                            className="text-white hover:bg-primary/20 focus:bg-primary/20"
                          >
                            {dest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TabsContent>

                  <TabsContent value="international" className="mt-3">
                    <Select
                      onValueChange={setSelectedDestination}
                      value={selectedDestination}
                    >
                      <SelectTrigger className="bg-background/50 border-white/20 text-white h-10">
                        <SelectValue placeholder="Choose international destination" />
                      </SelectTrigger>
                      <SelectContent className="bg-background/95 backdrop-blur-md border-border z-50">
                        {internationalDestinations.map((dest) => (
                          <SelectItem
                            key={dest}
                            value={dest}
                            className="text-white hover:bg-primary/20 focus:bg-primary/20"
                          >
                            {dest}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2 text-white/90">
                  <Calendar size={16} className="text-primary" />
                  Select Date
                </label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="bg-background/50 border-white/20 text-white h-10"
                  onClick={(e) => e.currentTarget.showPicker?.()}
                />
              </div>

              {/* Guests */}
              <div className="space-y-3">
                <label className="text-sm font-medium flex items-center gap-2 text-white/90">
                  <Users size={16} className="text-primary" />
                  Guests
                </label>

                {/* Adults */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-white/20">
                  <span className="text-white font-medium">Adults</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
                    >
                      <Minus size={16} className="text-white" />
                    </button>
                    <span className="text-white w-6 text-center font-semibold text-lg">
                      {adults}
                    </span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
                    >
                      <Plus size={16} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Kids */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-white/20">
                  <span className="text-white font-medium">Kids</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setKids(Math.max(0, kids - 1))}
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
                    >
                      <Minus size={16} className="text-white" />
                    </button>
                    <span className="text-white w-6 text-center font-semibold text-lg">
                      {kids}
                    </span>
                    <button
                      onClick={() => setKids(kids + 1)}
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
                    >
                      <Plus size={16} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Send Inquiry */}
              <Button
                onClick={handleSendInquiry}
                disabled={!selectedDestination || !selectedDate}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-transform duration-300 py-3 text-lg font-semibold h-12 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                size="lg"
              >
                Send Inquiry →
              </Button>
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
    </section>
  );
};

export default HeroSection;
