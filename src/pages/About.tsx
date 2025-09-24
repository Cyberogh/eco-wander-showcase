import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Mountain } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About Thrill Trail</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Adventure Awaits with <span className="gradient-text">Thrill Trail</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are passionate explorers dedicated to creating unforgettable travel experiences 
              that don't hurt your wallet. From pristine mountain peaks to crystal-clear shores, 
              we curate adventures that inspire and transform.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to make luxury travel accessible to everyone, Thrill Trail 
                  began as a small dream to explore the world's most beautiful destinations without 
                  breaking the bank.
                </p>
                <p>
                  We believe that extraordinary experiences shouldn't come with extraordinary price tags. 
                  Our team of travel experts carefully curates each journey, negotiating with local 
                  partners to offer premium experiences at affordable prices.
                </p>
                <p>
                  From the snow-capped peaks of the Himalayas to the serene beaches of tropical 
                  paradises, we've helped thousands of travelers create memories that last a lifetime.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-card border-border">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">25+ Destinations</h3>
                <p className="text-sm text-muted-foreground">Carefully curated locations</p>
              </Card>
              <Card className="p-6 text-center bg-card border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">5000+ Travelers</h3>
                <p className="text-sm text-muted-foreground">Happy adventure seekers</p>
              </Card>
              <Card className="p-6 text-center bg-card border-border">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">4.9/5 Rating</h3>
                <p className="text-sm text-muted-foreground">Customer satisfaction</p>
              </Card>
              <Card className="p-6 text-center bg-card border-border">
                <Mountain className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">50+ Adventures</h3>
                <p className="text-sm text-muted-foreground">Unique experiences</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-card/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meet Our CEO</h2>
              <p className="text-muted-foreground">The visionary behind Thrill Trail's success</p>
            </div>
            
            <Card className="p-8 bg-card border-border">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-card flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                        alt="CEO Portrait"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Rajesh Kumar</h3>
                  <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Founder & CEO</Badge>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      "Travel has the power to transform lives, break barriers, and create connections 
                      that transcend borders. At Thrill Trail, we're not just organizing trips; 
                      we're crafting experiences that enrich souls."
                    </p>
                    <p>
                      With over 15 years in the travel industry, Rajesh founded Thrill Trail with 
                      a simple mission: to make world-class travel experiences accessible to everyone. 
                      His passion for exploration and commitment to excellence drives our company's 
                      vision forward.
                    </p>
                    <p>
                      When he's not planning the next big adventure, you can find Rajesh trekking 
                      in the Himalayas or discovering hidden gems in remote villages across India.
                    </p>
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <Badge variant="secondary">Adventure Enthusiast</Badge>
                    <Badge variant="secondary">Travel Expert</Badge>
                    <Badge variant="secondary">Cultural Explorer</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize luxury travel by providing affordable, high-quality adventure 
                experiences that create lasting memories and foster cultural understanding. 
                We strive to make every journey safe, enriching, and accessible to travelers 
                from all walks of life.
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading travel company that connects people with extraordinary 
                destinations while promoting sustainable tourism and supporting local communities. 
                We envision a world where everyone can explore, discover, and grow through travel.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have discovered the world with Thrill Trail. 
            Your next unforgettable journey is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-emerald hover:scale-105 transition-transform">
              Explore Destinations
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;