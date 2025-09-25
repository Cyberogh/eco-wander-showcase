import { Shield, Gem, HeadphonesIcon } from "lucide-react";

const AdditionalInfoSection = () => {
  const sections = [
    {
      icon: Shield,
      title: "Safety and Security",
      content: "Your safety is our top priority. We work with trusted individuals and partners who prioritize your security, ensuring you embark on a journey with complete peace of mind. Travel with confidence, knowing that every aspect of your trip is carefully planned with safety in mind."
    },
    {
      icon: Gem,
      title: "Value-Added Adventures",
      content: "Experience a custom-tailored safari adventure that offers excellent value. No need to join a group; we create personalized trips that align with your unique expectations and budget. Discover that your dream safari is well within reach."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Top-Notch Support",
      content: "We understand that emergencies can happen anytime, anywhere. With us, you have round-the-clock support. Our experts are dedicated to providing exceptional service, promptly addressing any travel emergencies that may arise."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Why travel with <span className="gradient-text">Thrill Trail</span>?
          </h2>
          <p className="text-lg text-white/90 mb-8">Offering unforgettable experiences</p>
          
          <div className="bg-background/30 rounded-lg p-6 mb-12 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Thrill Trail - Where Every Journey Leads to the Mountains
            </h3>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              At Thrill Trail, we believe travel should be more than just sightseeing — it should be a story worth telling. 
              That's why we take you beyond the usual tourist spots to offbeat, untouched destinations across Uttarakhand, 
              Himachal, the Northeast, and select parts of Asia. Our adventures are carefully crafted with small groups to 
              ensure personalized, immersive experiences led by seasoned guides who live and breathe the mountains. With a 
              perfect blend of local authenticity and global standards, we offer curated itineraries that cater to thrill-seekers, 
              nature lovers, and culture chasers alike. We prioritize responsible, eco-friendly travel and believe in giving back 
              to the communities we explore. From snow-laden treks to lush forest trails and tropical escapes, there's a Thrill 
              Trail for every kind of wanderlust. And while you chase the views, we handle the logistics — all you need to do is 
              pack your spirit of adventure. With us, it's not just about the miles you cover, but the memories you make.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="text-center group animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-emerald rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
                  {section.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfoSection;