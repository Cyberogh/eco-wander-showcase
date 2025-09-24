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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Google Reviews Widget - Made Longer */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-3xl font-bold text-foreground">Our Google Reviews</h2>
            </div>
            
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold text-foreground">4.9 rating</span>
              <span className="text-muted-foreground">of 39 reviews</span>
              <Button 
                variant="default" 
                className="ml-auto bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open('https://www.google.com/search?sca_esv=ef5c9cfd86438e8a&sxsrf=AE3TifMoqmW0K6exXOEag30QPKmiTv1t-g:1758695244130&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8JyBAhpk226fuSjd2WM3k57vdgmwReacP4_b3-mgaEaeWMtjbCzguxWAfd7dfCIrHcTbYHC0Mkr-guv-pdxzcg9JLkMPnZFhY2_vhLItHK-QWkfAw%3D%3D&q=Thrill+Trail+Adventurers+Reviews&sa=X&ved=2ahUKEwj9ra2q4vCPAxXSaPUHHai6JRsQ0bkNegQINxAE&biw=1470&bih=766&dpr=2#lrd=0x399be363d7053bbf:0x782021150cfd31fd,3,,,,', '_blank')}
              >
                Write a review
              </Button>
            </div>

            {/* Review Card with Navigation - Made Bigger */}
            <div className="relative">
              <Card className="p-8 min-h-[280px] bg-card border-border">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{reviews[currentReview].name}</h4>
                    <p className="text-sm text-muted-foreground">{reviews[currentReview].date}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(reviews[currentReview].rating)}
                </div>
                
                <p className="text-foreground leading-relaxed text-lg">{reviews[currentReview].text}</p>
                
                <div className="flex justify-center mt-6">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-lg font-bold">G</span>
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
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentReview ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Single Large Badge */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-12 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 w-64 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-200 fill-yellow-200" />
                </div>
                <span className="text-black font-bold text-xl leading-tight">Premium Guaranteed<br/>100% Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;