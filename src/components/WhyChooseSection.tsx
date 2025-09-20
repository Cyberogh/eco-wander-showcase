import { Heart, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Curated Experiences",
    description: "Every destination has been handpicked for authentic, unique experiences that elevate your journey."
  },
  {
    icon: Sparkles,
    title: "Hassle-Free Planning",
    description: "From booking to boarding, we handle every detail so you can focus on making memories."
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Connect with local guides who know the hidden gems and authentic culture of each destination."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Why Choose <span className="gradient-text">Thrill Trail</span>?
          </h2>
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