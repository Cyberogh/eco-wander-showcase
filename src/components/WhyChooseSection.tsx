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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
            Why Choose <span className="gradient-text">Thrill Trail</span>?
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed">
              "Adventure begins where Thrill Trail leads – India to Asia, one trail at a time."
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Unveiling raw beauty from the Himalayas to Southeast Asia.
            </p>
            <div className="pt-4">
              <p className="text-white/80 text-lg leading-relaxed mb-3">
                Discover unforgettable journeys through the serene mountains of Uttarakhand and Himachal, 
                the untouched beauty of the North East, and tropical escapes across Asia.
              </p>
              <p className="text-white font-semibold text-xl">
                Curated adventures. Local soul. Real thrill.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-emerald rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
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