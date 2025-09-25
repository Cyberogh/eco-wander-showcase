import { Mountain, MapPin, Diamond, Building2 } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Why Choose Us",
    description: "Crafted journeys, real connections, unforgettable mountain moments."
  },
  {
    icon: MapPin,
    title: "What We Offer",
    description: "Offbeat trails, curated trips, culture, and adventure combined."
  },
  {
    icon: Diamond,
    title: "How We Do It",
    description: "Local guides, small groups, seamless travel from start."
  },
  {
    icon: Building2,
    title: "Where We Take You",
    description: "Uttarakhand, Himachal, Northeast, Malaysia, Thailand, Sri Lanka, Nepal, Vietnam, Hong-Kong, Maldives."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-white/90 mb-4 italic">
            "Adventure begins where Thrill Trail leads – India to Asia, one trail at a time."
          </p>
          <p className="text-base md:text-lg text-white/70 mb-8">
            Unveiling raw beauty from the Himalayas to Southeast Asia.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Beyond Destinations. Into the Experience.
          </h2>
          <p className="text-white/80 max-w-4xl mx-auto mb-4">
            Discover unforgettable journeys through the serene mountains of Uttarakhand and Himachal, 
            the untouched beauty of the North East, and tropical escapes across Asia.
          </p>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            <strong>Curated adventures. Local soul. Real thrill.</strong>
          </p>
          <h3 className="text-xl font-semibold text-white mb-12">Start Your Journey</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-emerald rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;