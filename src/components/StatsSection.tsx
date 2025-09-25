import { useEffect, useState, useRef } from "react";
import { Globe, FileText, Clock, Gift } from "lucide-react";

interface AnimationCounter {
  target: number;
  current: number;
  increment: number;
}

const StatsSection = () => {
  const [counters, setCounters] = useState<AnimationCounter[]>([
    { target: 100, current: 0, increment: 2 },
    { target: 500, current: 0, increment: 10 },
    { target: 3, current: 0, increment: 1 },
    { target: 50, current: 0, increment: 1 }
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Globe,
      label: "Tours and Treks",
      suffix: "+"
    },
    {
      icon: FileText,
      label: "Travellers",
      suffix: "+"
    },
    {
      icon: Clock,
      label: "Years of Service",
      suffix: "+"
    },
    {
      icon: Gift,
      label: "Best Deals",
      suffix: "+"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = counters.map((_, index) => {
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index].current < newCounters[index].target) {
            newCounters[index].current = Math.min(
              newCounters[index].current + newCounters[index].increment,
              newCounters[index].target
            );
          }
          return newCounters;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible, counters]);

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-emerald rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Icon size={28} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {counters[index].current}{stat.suffix}
                </div>
                <p className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;