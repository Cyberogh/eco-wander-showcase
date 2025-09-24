import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const GoogleReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Maria Korsgaard",
      date: "08/03/2023",
      rating: 5,
      text: "The host was waiting for us and was very polite and helpful. Apartments are amazing!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Maren Calzoni",
      date: "21/10/2023", 
      rating: 5,
      text: "The places is super clean, everything is new and the beds are super comfortable! 10/10",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Davis Dokidis",
      date: "08/03/2023",
      rating: 5,
      text: "Nice apartments, friendly host and a quiet environment. Approx 4,3 km outside the center located... See more",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      date: "15/09/2023",
      rating: 5,
      text: "Absolutely fantastic experience! The team was professional and the adventure was perfectly organized.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Thompson",
      date: "02/11/2023",
      rating: 5,
      text: "Best travel experience ever! The guides were knowledgeable and the locations were breathtaking.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const badges = [
    { text: "Premium Guaranteed", color: "bg-gradient-to-r from-yellow-400 to-yellow-600" },
    { text: "100% Quality", color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
    { text: "Perfect Choice", color: "bg-gradient-to-r from-yellow-400 to-yellow-500" },
    { text: "100% Quality", color: "bg-gradient-to-r from-yellow-600 to-yellow-700" }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Google Reviews Widget */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-3xl font-bold text-foreground">Our Google Reviews</h2>
            </div>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold text-foreground">4.9 rating</span>
              <span className="text-muted-foreground">of 39 reviews</span>
              <Button variant="default" className="ml-auto bg-blue-600 hover:bg-blue-700">
                Write a review
              </Button>
            </div>

            {/* Review Card with Navigation */}
            <div className="relative">
              <Card className="p-6 min-h-[200px] bg-card border-border">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{reviews[currentReview].name}</h4>
                    <p className="text-sm text-muted-foreground">{reviews[currentReview].date}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(reviews[currentReview].rating)}
                </div>
                
                <p className="text-foreground leading-relaxed">{reviews[currentReview].text}</p>
                
                <div className="flex justify-center mt-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-sm font-bold">G</span>
                  </div>
                </div>
              </Card>

              {/* Navigation Buttons */}
              <button 
                onClick={prevReview}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              
              <button 
                onClick={nextReview}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Review indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Badges Section */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Achievements</h3>
            <div className="grid grid-cols-2 gap-6">
              {badges.map((badge, index) => (
                <div key={index} className="flex justify-center">
                  <div className={`${badge.color} p-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 w-32 h-32 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Star className="w-4 h-4 text-yellow-200 fill-yellow-200" />
                      </div>
                      <span className="text-black font-bold text-sm leading-tight">{badge.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;