import { Card } from "@/components/ui/card";
import { Heart, Calendar, Map } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Curated Experiences",
      description: "Every destination is handpicked for premium travel enthusiasts looking for unique experiences and lasting memories."
    },
    {
      icon: Calendar,
      title: "Hassle-Free Planning",
      description: "From booking to boarding, we handle every detail of your journey so you can focus on creating memories."
    },
    {
      icon: Map,
      title: "Local Expertise",
      description: "Connect with local guides who know the hidden gems and secret spots that make each destination truly special."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Green Trail</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about creating extraordinary travel experiences that go beyond the ordinary.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="text-center p-8 hover-lift glass h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-emerald mb-6 animate-glow-pulse">
                  <feature.icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;