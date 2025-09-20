import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const nationalDestinations = [
    "Munsiyari",
    "Nainital to Mukteshwar", 
    "Teerthanjeevi",
    "Tawang, Arunachal Pradesh",
    "Masuri",
    "Landoor",
    "Rishikesh",
    "Sukhu Valley"
  ];

  const internationalDestinations = [
    "Nepal",
    "Thailand", 
    "Malaysia",
    "Maldives",
    "Sri Lanka"
  ];

  const handleSendInquiry = () => {
    const message = `Hi, I am interested in ${selectedDestination} from ${selectedDate}. ${adults} adults${kids > 0 ? ` and ${kids} kids` : ''} are going.`;
    const whatsappUrl = `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(message)}`;
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
              Select Destination
            </label>
            
            <Tabs defaultValue="national" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-background/50">
                <TabsTrigger value="national" className="text-white data-[state=active]:bg-primary">National</TabsTrigger>
                <TabsTrigger value="international" className="text-white data-[state=active]:bg-primary">International</TabsTrigger>
              </TabsList>
              
              <TabsContent value="national" className="mt-3">
                <Select onValueChange={setSelectedDestination}>
                  <SelectTrigger className="bg-background/30 border-white/20 text-white">
                    <SelectValue placeholder="Choose national destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    {nationalDestinations.map((dest) => (
                      <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TabsContent>
              
              <TabsContent value="international" className="mt-3">
                <Select onValueChange={setSelectedDestination}>
                  <SelectTrigger className="bg-background/30 border-white/20 text-white">
                    <SelectValue placeholder="Choose international destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    {internationalDestinations.map((dest) => (
                      <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TabsContent>
            </Tabs>
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
              className="bg-background/30 border-white/20 text-white"
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