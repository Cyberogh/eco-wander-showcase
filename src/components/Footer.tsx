import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-emerald flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-white">Thrill Trail</span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Crafting unforgettable travel experiences since 2024.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <div className="text-white/60 text-sm">
            © 2024 Thrill Trail. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;