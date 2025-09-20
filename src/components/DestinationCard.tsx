import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  badge?: string;
  description: string;
}

const DestinationCard = ({
  image,
  title,
  location,
  duration,
  groupSize,
  rating,
  price,
  badge,
  description
}: DestinationCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift glass border-border/20">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {badge}
          </Badge>
        )}
        <div className="absolute top-3 right-3 flex items-center gap-1 glass px-2 py-1 rounded-full">
          <Star size={14} className="text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">{duration}</span>
          <Users size={16} className="text-primary ml-2" />
          <span className="text-sm text-muted-foreground">{groupSize}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-primary mb-3">{location}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <span className="text-muted-foreground">from </span>
            <span className="text-lg font-bold text-primary">{price}</span>
          </div>
          <Button 
            size="sm" 
            className="bg-gradient-emerald hover:scale-105 transition-transform duration-300"
          >
            Explore <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;