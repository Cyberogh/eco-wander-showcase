import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, Plus, Minus, Send } from "lucide-react";
import { useState } from "react";

interface CustomizeTripDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destinationTitle: string;
}

export const CustomizeTripDialog = ({ open, onOpenChange, destinationTitle }: CustomizeTripDialogProps) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);

  const handleSubmit = () => {
    const message = `Hi! I'd like to customize a trip for ${destinationTitle}.
    
Details:
📅 Start Date: ${startDate || 'Not selected'}
📅 End Date: ${endDate || 'Not selected'}
👥 Adults: ${adults}
👶 Kids: ${kids}

Please help me customize this package according to my requirements.`;

    const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    onOpenChange(false);
  };

  const adjustCount = (type: 'adults' | 'kids', operation: 'add' | 'subtract') => {
    if (type === 'adults') {
      if (operation === 'add') {
        setAdults(prev => Math.min(prev + 1, 10));
      } else {
        setAdults(prev => Math.max(prev - 1, 1));
      }
    } else {
      if (operation === 'add') {
        setKids(prev => Math.min(prev + 1, 10));
      } else {
        setKids(prev => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Customize Your Trip
          </DialogTitle>
          <p className="text-muted-foreground">
            Planning trip to <span className="text-primary font-semibold">{destinationTitle}</span>
          </p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Date Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-date" className="text-sm font-medium flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                Start Date
              </Label>
              <Input
                id="start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-card border-border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="end-date" className="text-sm font-medium flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                End Date
              </Label>
              <Input
                id="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-card border-border"
              />
            </div>
          </div>

          {/* Guest Count */}
          <div className="space-y-4">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Users size={16} className="text-primary" />
              Travelers
            </Label>
            
            {/* Adults */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
              <div>
                <span className="font-medium text-foreground">Adults</span>
                <p className="text-sm text-muted-foreground">Age 13+</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => adjustCount('adults', 'subtract')}
                  disabled={adults <= 1}
                >
                  <Minus size={16} />
                </Button>
                <span className="w-8 text-center font-medium">{adults}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => adjustCount('adults', 'add')}
                  disabled={adults >= 10}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>

            {/* Kids */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
              <div>
                <span className="font-medium text-foreground">Kids</span>
                <p className="text-sm text-muted-foreground">Age 2-12</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => adjustCount('kids', 'subtract')}
                  disabled={kids <= 0}
                >
                  <Minus size={16} />
                </Button>
                <span className="w-8 text-center font-medium">{kids}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => adjustCount('kids', 'add')}
                  disabled={kids >= 10}
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
            size="lg"
          >
            <Send size={20} className="mr-2" />
            Send Customization Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};