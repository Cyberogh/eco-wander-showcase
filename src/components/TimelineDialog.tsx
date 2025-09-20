import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, CheckCircle, XCircle, Backpack } from "lucide-react";

interface TimelineDialogProps {
  destinationId: string | null;
  onClose: () => void;
}

const itinerariesData = {
  munsiyari: {
    title: "Munsiyari Adventure",
    duration: "5 Days",
    timeline: [
      {
        day: 1,
        title: "Arrival & City Tour",
        activities: ["Arrive at Kathgodam", "Drive to Munsiyari", "Local village exploration", "Sunset views of Panchachuli peaks"]
      },
      {
        day: 2,
        title: "Khaliya Top Trek", 
        activities: ["Early morning trek to Khaliya Top", "Panoramic mountain views", "Alpine meadows exploration", "Photography session"]
      },
      {
        day: 3,
        title: "Adventure & Culture",
        activities: ["Visit Birthi Falls", "Local temple visit", "Traditional handicraft shopping", "Cultural evening with locals"]
      },
      {
        day: 4,
        title: "Nature Exploration",
        activities: ["Maheshwari Kund visit", "Forest trekking", "Bird watching", "Camping under stars"]
      },
      {
        day: 5,
        title: "Departure",
        activities: ["Sunrise photography", "Breakfast with mountain views", "Journey back to Kathgodam", "Trip memories sharing"]
      }
    ],
    inclusions: [
      "Accommodation in comfortable hotels/camps",
      "All meals (breakfast, lunch, dinner)",
      "Transportation in AC vehicle",
      "Professional guide",
      "Trekking permits",
      "First aid kit"
    ],
    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Tips for guide/driver",
      "Emergency evacuation",
      "Items not mentioned in inclusions"
    ],
    thingsToCarry: [
      "Warm clothing and layers", 
      "Trekking shoes",
      "Sunscreen and sunglasses",
      "Personal medication",
      "Camera and extra batteries",
      "Water bottle",
      "Small backpack for day trips"
    ]
  },
  nainital: {
    title: "Nainital to Mukteshwar",
    duration: "3 Days",
    timeline: [
      {
        day: 1,
        title: "Nainital Exploration",
        activities: ["Arrival at Nainital", "Naini Lake boating", "Mall Road shopping", "Sunset at Snow View Point"]
      },
      {
        day: 2,
        title: "Adventure Day",
        activities: ["Cable car to Snow View", "Tiffin Top trek", "Eco Cave Gardens", "Evening at Thandi Sadak"]
      },
      {
        day: 3,
        title: "Mukteshwar Journey",
        activities: ["Drive to Mukteshwar", "Mukteshwar Temple visit", "Chauli Ki Jali viewpoint", "Departure"]
      }
    ],
    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Sightseeing as per itinerary", 
      "Transportation",
      "Entry tickets"
    ],
    exclusions: [
      "Lunch and dinner",
      "Personal expenses",
      "Adventure activities",
      "Travel insurance"
    ],
    thingsToCarry: [
      "Light woolens",
      "Comfortable walking shoes", 
      "Camera",
      "Sunscreen",
      "Personal medication"
    ]
  },
  teerthanjeevi: {
    title: "Teerthan Jibhi - Manali",
    duration: "5 Days", 
    timeline: [
      {
        day: 1,
        title: "Arrival & Nature Walk",
        activities: ["Arrive at Jibhi", "Check-in to riverside stay", "Nature walk along Tirthan River", "Evening bonfire"]
      },
      {
        day: 2,
        title: "Serolsar Lake Trek",
        activities: ["Trek to Serolsar Lake", "Forest trail experience", "Lake meditation time", "Return to Jibhi"]
      },
      {
        day: 3,
        title: "Cultural Immersion",
        activities: ["Village homestay experience", "Traditional Himachali cooking", "Local temple visits", "Folk music evening"]
      },
      {
        day: 4,
        title: "Adventure Activities",
        activities: ["River crossing", "Rock climbing", "Forest camping", "Star gazing session"]
      },
      {
        day: 5,
        title: "Departure to Manali",
        activities: ["Morning yoga by river", "Drive to Manali", "Manali local sightseeing", "Departure"]
      }
    ],
    inclusions: [
      "Homestay accommodation",
      "All meals with local cuisine",
      "Trekking guide",
      "Adventure equipment",
      "Cultural activities"
    ],
    exclusions: [
      "Personal gear",
      "Insurance",
      "Tips",
      "Personal shopping"
    ],
    thingsToCarry: [
      "Trekking gear",
      "Warm clothes",
      "Rain jacket",
      "Sturdy boots",
      "Torch/headlamp"
    ]
  },
  tawang: {
    title: "Saurabh Arunachal Pradesh",
    duration: "7 Days",
    timeline: [
      {
        day: 1,
        title: "Journey Begins",
        activities: ["Fly to Guwahati", "Drive to Bomdila", "Acclimatization", "Local monastery visit"]
      },
      {
        day: 2,
        title: "High Altitude Adventure", 
        activities: ["Drive to Tawang", "Sela Pass crossing", "Mountain lake views", "High altitude adaptation"]
      },
      {
        day: 3,
        title: "Monastery Exploration",
        activities: ["Tawang Monastery visit", "Largest monastery in India", "Buddhist teachings", "Monk interactions"]
      },
      {
        day: 4,
        title: "War Memorial & Culture",
        activities: ["Tawang War Memorial", "Museum visit", "Local market exploration", "Traditional dance performance"]
      },
      {
        day: 5,
        title: "Nature & Adventure",
        activities: ["Madhuri Lake visit", "Bumla Pass excursion", "India-China border", "High altitude trekking"]
      },
      {
        day: 6,
        title: "Return Journey",
        activities: ["Tawang to Bomdila", "Scenic mountain drive", "Photography stops", "Rest and relaxation"]
      },
      {
        day: 7,
        title: "Departure",
        activities: ["Bomdila to Guwahati", "Airport transfer", "Flight departure", "End of journey"]
      }
    ],
    inclusions: [
      "Domestic flights",
      "All ground transportation",
      "Hotel accommodations",
      "All meals",
      "Permits and permissions",
      "Professional guide"
    ],
    exclusions: [
      "International flights",
      "Personal expenses", 
      "Tips and gratuities",
      "Travel insurance",
      "Emergency evacuation"
    ],
    thingsToCarry: [
      "Heavy winter clothing",
      "High altitude medication",
      "Oxygen masks (provided)",
      "Sturdy winter boots",
      "Sun protection",
      "Valid ID proofs"
    ]
  }
};

export const TimelineDialog = ({ destinationId, onClose }: TimelineDialogProps) => {
  if (!destinationId) return null;

  const itinerary = itinerariesData[destinationId as keyof typeof itinerariesData];
  if (!itinerary) return null;

  return (
    <Dialog open={!!destinationId} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            {itinerary.title}
          </DialogTitle>
          <div className="flex items-center gap-4">
            <Badge className="bg-primary text-white">
              <Clock size={14} className="mr-1" />
              {itinerary.duration}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Your {itinerary.duration} Itinerary</h3>
            <div className="timeline-line space-y-6 pl-4">
              {itinerary.timeline.map((day, index) => (
                <div key={day.day} className="relative">
                  <div className="timeline-dot absolute -left-10">
                    <span className="text-sm font-bold">Day {day.day}</span>
                  </div>
                  <div className="ml-8">
                    <h4 className="text-lg font-semibold text-white mb-2">{day.title}</h4>
                    <ul className="space-y-1">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2 text-white/70">
                          <MapPin size={14} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trip Details */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Inclusions */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                Trip Inclusions
              </h4>
              <ul className="space-y-2">
                {itinerary.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <XCircle size={18} className="text-red-500" />
                Trip Exclusions
              </h4>
              <ul className="space-y-2">
                {itinerary.exclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                    <XCircle size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Things to Carry */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Backpack size={18} className="text-blue-500" />
                Things to Carry
              </h4>
              <ul className="space-y-2">
                {itinerary.thingsToCarry.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                    <Backpack size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t border-border">
            <Button 
              className="flex-1 bg-gradient-emerald hover:scale-105 transition-transform duration-300"
              size="lg"
            >
              Book This Adventure
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/30 bg-primary/10 backdrop-blur-md hover:bg-primary/20 text-white"
              size="lg"
            >
              Customize Trip
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};