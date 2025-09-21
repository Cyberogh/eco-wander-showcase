import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);

  const destinations = [
    { label: "--- National Destinations ---", value: "", disabled: true },
    { label: "Munsiyari", value: "Munsiyari" },
    { label: "Nainital to Mukteshwar", value: "Nainital to Mukteshwar" },
    { label: "Teerthanjeevi", value: "Teerthanjeevi" },
    { label: "Tawang, Arunachal Pradesh", value: "Tawang, Arunachal Pradesh" },
    { label: "Masuri", value: "Masuri" },
    { label: "Landoor", value: "Landoor" },
    { label: "Rishikesh", value: "Rishikesh" },
    { label: "Sukhu Valley", value: "Sukhu Valley" },
    { label: "--- International Destinations ---", value: "", disabled: true },
    { label: "Nepal", value: "Nepal" },
    { label: "Thailand", value: "Thailand" },
    { label: "Malaysia", value: "Malaysia" },
    { label: "Maldives", value: "Maldives" },
    { label: "Sri Lanka", value: "Sri Lanka" }
  ];

  const handleSendInquiry = () => {
    const message = `Hi, I am interested in ${selectedDestination} from ${selectedDate}. ${adults} adults${kids > 0 ? ` and ${kids} kids` : ''} are going.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-white">Book Your Adventure</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Destination Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center gap-2 text-white/90">
              <MapPin size={16} className="text-primary" />
              Choose Your Destination
            </label>
            
            <Select onValueChange={setSelectedDestination}>
              <SelectTrigger className="bg-background/30 border-white/20 text-white">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border">
                {destinations.map((dest) => (
                  <SelectItem 
                    key={dest.label} 
                    value={dest.value}
                    disabled={dest.disabled}
                    className={dest.disabled ? "text-primary font-semibold" : ""}
                  >
                    {dest.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2 text-white/90">
              <Calendar size={16} className="text-primary" />
              Select Date
            </label>
            <Input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-background/30 border-white/20 text-white cursor-pointer"
              onClick={(e) => e.currentTarget.showPicker?.()}
            />
          </div>

          {/* Guest Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center gap-2 text-white/90">
              <Users size={16} className="text-primary" />
              Guests
            </label>
            
            {/* Adults */}
            <div className="flex items-center justify-between p-3 rounded-md bg-background/30 border border-white/20">
              <span className="text-white">Adults</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow"
                >
                  <Minus size={16} className="text-white" />
                </button>
                <span className="text-white w-8 text-center">{adults}</span>
                <button 
                  onClick={() => setAdults(adults + 1)}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow"
                >
                  <Plus size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Kids */}
            <div className="flex items-center justify-between p-3 rounded-md bg-background/30 border border-white/20">
              <span className="text-white">Kids</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setKids(Math.max(0, kids - 1))}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow"
                >
                  <Minus size={16} className="text-white" />
                </button>
                <span className="text-white w-8 text-center">{kids}</span>
                <button 
                  onClick={() => setKids(kids + 1)}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow"
                >
                  <Plus size={16} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Send Inquiry Button */}
          <Button 
            onClick={handleSendInquiry}
            disabled={!selectedDestination || !selectedDate}
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-transform duration-300 py-3 text-lg font-semibold"
            size="lg"
          >
            Send Inquiry →
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};