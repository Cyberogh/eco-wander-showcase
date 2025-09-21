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
    if (!selectedDestination || !selectedDate) {
      alert("Please select destination and date");
      return;
    }
    
    const message = `Hi, I am interested in ${selectedDestination} from ${selectedDate}. ${adults} adults${kids > 0 ? ` and ${kids} kids` : ''} are going.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-background/95 backdrop-blur-md border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-white text-xl font-bold">Book Your Adventure</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Destination Selection with Tabs */}
          <div className="space-y-3">
            <label className="text-sm font-medium flex items-center gap-2 text-white/90">
              <MapPin size={16} className="text-primary" />
              Select Destination
            </label>
            
            <Tabs defaultValue="national" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-background/50 border border-white/20">
                <TabsTrigger 
                  value="national" 
                  className="text-white data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  National
                </TabsTrigger>
                <TabsTrigger 
                  value="international" 
                  className="text-white data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  International
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="national" className="mt-3">
                <Select onValueChange={setSelectedDestination} value={selectedDestination}>
                  <SelectTrigger className="bg-background/50 border-white/20 text-white h-12">
                    <SelectValue placeholder="Choose national destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-md border-border z-50">
                    {nationalDestinations.map((dest) => (
                      <SelectItem 
                        key={dest} 
                        value={dest}
                        className="text-white hover:bg-primary/20 focus:bg-primary/20"
                      >
                        {dest}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TabsContent>
              
              <TabsContent value="international" className="mt-3">
                <Select onValueChange={setSelectedDestination} value={selectedDestination}>
                  <SelectTrigger className="bg-background/50 border-white/20 text-white h-12">
                    <SelectValue placeholder="Choose international destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-background/95 backdrop-blur-md border-border z-50">
                    {internationalDestinations.map((dest) => (
                      <SelectItem 
                        key={dest} 
                        value={dest}
                        className="text-white hover:bg-primary/20 focus:bg-primary/20"
                      >
                        {dest}
                      </SelectItem>
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
              className="bg-background/50 border-white/20 text-white h-12"
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
            <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-white/20">
              <span className="text-white font-medium">Adults</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
                >
                  <Minus size={16} className="text-white" />
                </button>
                <span className="text-white w-8 text-center font-semibold text-lg">{adults}</span>
                <button 
                  onClick={() => setAdults(adults + 1)}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
                >
                  <Plus size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Kids */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-white/20">
              <span className="text-white font-medium">Kids</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setKids(Math.max(0, kids - 1))}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
                >
                  <Minus size={16} className="text-white" />
                </button>
                <span className="text-white w-8 text-center font-semibold text-lg">{kids}</span>
                <button 
                  onClick={() => setKids(kids + 1)}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-glow transition-colors"
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
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-transform duration-300 py-4 text-lg font-semibold h-14 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            size="lg"
          >
            Send Inquiry →
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};