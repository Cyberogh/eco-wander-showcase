import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, CheckCircle, XCircle, Backpack } from "lucide-react";
import { CustomizeTripDialog } from "./CustomizeTripDialog";
import { useState } from "react";

interface TimelineDialogProps {
  destinationId: string | null;
  onClose: () => void;
}

const itinerariesData = {
  colombo: {
    title: "Colombo Adventure",
    duration: "3 Days",
    timeline: [
      {
        day: 1,
        title: "Arrival & City Tour",
        activities: ["Arrive at Colombo Airport", "City tour and colonial architecture", "Temple visits", "Evening at Galle Face Green"]
      },
      {
        day: 2,
        title: "Adventure & Culture",
        activities: ["Wildlife safari", "Traditional spice gardens", "Local cuisine experience", "Cultural performances"]
      },
      {
        day: 3,
        title: "Relaxation & Departure",
        activities: ["Beach relaxation", "Shopping at local markets", "Sunset views", "Departure"]
      }
    ],
    inclusions: [
      "Airport transfers",
      "Hotel accommodation",
      "All meals",
      "Sightseeing tours",
      "Entry tickets"
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Travel insurance",
      "Tips"
    ],
    thingsToCarry: [
      "Light cotton clothing",
      "Sunscreen",
      "Camera",
      "Comfortable walking shoes"
    ]
  },
  nepal: {
    title: "Nepal Adventure", 
    duration: "5 Days",
    timeline: [
      {
        day: 1,
        title: "Arrival in Kathmandu",
        activities: ["Airport pickup", "Hotel check-in", "Kathmandu city tour", "Evening welcome dinner"]
      },
      {
        day: 2,
        title: "Temples & Culture",
        activities: ["Pashupatinath Temple", "Boudhanath Stupa", "Patan Durbar Square", "Traditional craft workshops"]
      },
      {
        day: 3,
        title: "Mountain Views",
        activities: ["Early morning mountain flight", "Nagarkot sunrise", "Hiking trails", "Local village visits"]
      },
      {
        day: 4,
        title: "Adventure Activities",
        activities: ["White water rafting", "Adventure sports", "Nature walks", "Cultural evening"]
      },
      {
        day: 5,
        title: "Departure",
        activities: ["Last minute shopping", "Airport transfer", "Departure"]
      }
    ],
    inclusions: [
      "All accommodation",
      "Daily meals",
      "Transportation",
      "Guide services",
      "Entry permits"
    ],
    exclusions: [
      "International airfare",
      "Nepal visa",
      "Personal expenses",
      "Travel insurance"
    ],
    thingsToCarry: [
      "Warm clothing",
      "Trekking shoes",
      "Camera",
      "Personal medication"
    ]
  },
  thailand: {
    title: "Thailand Explorer",
    duration: "4 Days", 
    timeline: [
      {
        day: 1,
        title: "Bangkok Arrival",
        activities: ["Airport transfer", "Grand Palace visit", "Temple hopping", "Street food tour"]
      },
      {
        day: 2,
        title: "Cultural Immersion",
        activities: ["Floating markets", "Traditional massage", "Cooking class", "Chao Phraya river cruise"]
      },
      {
        day: 3,
        title: "Adventure Day",
        activities: ["Elephant sanctuary", "Jungle trekking", "Waterfall visits", "Traditional dance show"]
      },
      {
        day: 4,
        title: "Beach & Departure",
        activities: ["Beach relaxation", "Water sports", "Sunset views", "Departure"]
      }
    ],
    inclusions: [
      "Hotel stays",
      "All meals",
      "Tours and activities",
      "Transportation",
      "English guide"
    ],
    exclusions: [
      "International flights",
      "Travel insurance", 
      "Personal shopping",
      "Tips and gratuities"
    ],
    thingsToCarry: [
      "Light summer clothes",
      "Swimwear",
      "Sunscreen",
      "Mosquito repellent"
    ]
  },
  malaysia: {
    title: "Malaysia Discovery",
    duration: "4 Days",
    timeline: [
      {
        day: 1,
        title: "Kuala Lumpur Arrival",
        activities: ["City tour", "Petronas Towers", "Batu Caves", "China Town exploration"]
      },
      {
        day: 2,
        title: "Cultural Diversity",
        activities: ["Multi-cultural districts", "Food courts", "Islamic Arts Museum", "Lake Gardens"]
      },
      {
        day: 3,
        title: "Nature & Adventure", 
        activities: ["Genting Highlands", "Cable car rides", "Theme parks", "Cool weather experience"]
      },
      {
        day: 4,
        title: "Shopping & Departure",
        activities: ["Shopping malls", "Local markets", "Last minute sightseeing", "Airport transfer"]
      }
    ],
    inclusions: [
      "Accommodation",
      "Daily breakfast",
      "City tours",
      "Transportation",
      "Entry tickets"
    ],
    exclusions: [
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Optional activities"
    ],
    thingsToCarry: [
      "Light clothing",
      "Comfortable shoes",
      "Light jacket",
      "Camera"
    ]
  },
  maldives: {
    title: "Maldives Paradise",
    duration: "3 Days",
    timeline: [
      {
        day: 1,
        title: "Island Arrival",
        activities: ["Seaplane transfer", "Resort check-in", "Beach relaxation", "Sunset dinner"]
      },
      {
        day: 2,
        title: "Water Adventures",
        activities: ["Snorkeling", "Diving", "Dolphin watching", "Beach activities"]
      },
      {
        day: 3,
        title: "Relaxation & Departure",
        activities: ["Spa treatments", "Water villa experience", "Final beach time", "Departure"]
      }
    ],
    inclusions: [
      "Resort accommodation",
      "All meals",
      "Water activities",
      "Transfers",
      "Spa access"
    ],
    exclusions: [
      "International flights",
      "Alcohol",
      "Premium spa treatments",
      "Personal expenses"
    ],
    thingsToCarry: [
      "Swimwear",
      "Sunscreen",
      "Light clothing",
      "Underwater camera"
    ]
  },
  "dayara-valley": {
    title: "Dayara Valley Trek",
    duration: "4 Days",
    timeline: [
      {
        day: 1,
        title: "Base Camp Arrival",
        activities: ["Drive to Raithal", "Trek briefing", "Equipment check", "First day trek to Gui"]
      },
      {
        day: 2,
        title: "Valley Exploration",
        activities: ["Trek to Dayara Bugyal", "Alpine meadows", "Snow peaks views", "Camping under stars"]
      },
      {
        day: 3,
        title: "Summit Day",
        activities: ["Early summit attempt", "360-degree mountain views", "Photography session", "Descent to base"]
      },
      {
        day: 4,
        title: "Return Journey",
        activities: ["Final descent", "Drive back", "Trip completion", "Certificate ceremony"]
      }
    ],
    inclusions: [
      "Professional guide",
      "All meals during trek",
      "Camping equipment",
      "Safety gear",
      "Permits"
    ],
    exclusions: [
      "Personal trekking gear",
      "Travel to base",
      "Personal expenses",
      "Insurance"
    ],
    thingsToCarry: [
      "Trekking boots",
      "Warm clothes",
      "Rain gear",
      "Personal medication"
    ]
  },
  "khaliya-top": {
    title: "Khaliya Top Trek", 
    duration: "4 Days",
    timeline: [
      {
        day: 1,
        title: "Munsiyari Arrival",
        activities: ["Drive to Munsiyari", "Acclimatization", "Local exploration", "Trek preparation"]
      },
      {
        day: 2,
        title: "Trek Begins",
        activities: ["Trek to Khaliya Top", "Rhododendron forests", "Alpine meadows", "Camping"]
      },
      {
        day: 3,
        title: "Summit & Views",
        activities: ["Panchachuli peaks views", "Photography", "Nature exploration", "Return trek"]
      },
      {
        day: 4,
        title: "Departure",
        activities: ["Final descent", "Drive back", "Trip memories", "Departure"]
      }
    ],
    inclusions: [
      "Trekking guide",
      "All trek meals",
      "Camping gear",
      "Safety equipment",
      "Forest permits"
    ],
    exclusions: [
      "Personal gear",
      "Transportation to Munsiyari",
      "Personal expenses",
      "Tips"
    ],
    thingsToCarry: [
      "Sturdy boots",
      "Layered clothing",
      "Rain protection",
      "First aid kit"
    ]
  },
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
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  
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
              onClick={() => setIsCustomizeOpen(true)}
            >
              Customize Trip
            </Button>
          </div>
        </div>
      </DialogContent>
      
      {/* Customize Trip Dialog */}
      <CustomizeTripDialog 
        open={isCustomizeOpen}
        onOpenChange={setIsCustomizeOpen}
        destinationTitle={itinerary.title}
      />
    </Dialog>
  );
};