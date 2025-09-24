import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoLoaderProps {
  videoUrl: string;
  children: React.ReactNode;
}

const VideoLoader = ({ videoUrl, children }: VideoLoaderProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoUrl;
    video.preload = 'metadata';
    
    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [videoUrl]);

  if (!showContent) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header Skeleton */}
        <div className="h-16 bg-card/20 backdrop-blur-sm border-b border-border/30 flex items-center justify-between px-4">
          <Skeleton className="h-8 w-32" />
          <div className="flex gap-4">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>

        {/* Hero Section Skeleton */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Skeleton */}
              <div className="space-y-6">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-4/5" />
                <Skeleton className="h-6 w-3/4" />
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-32" />
                  <Skeleton className="h-12 w-24" />
                </div>
              </div>
              
              {/* Form Skeleton */}
              <div className="space-y-4">
                <Skeleton className="h-80 w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border/30">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm text-muted-foreground">
            {isVideoLoaded ? "Preparing experience..." : "Loading video..."}
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default VideoLoader;