import { useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlipProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
}

export function FlipProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  imageUrl,
  videoUrl 
}: FlipProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group perspective-1000 h-[480px]"
      onMouseEnter={() => videoUrl && setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
          {/* Image Section */}
          {imageUrl && (
            <div className="relative h-48 overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
              {videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 rounded-full p-3 shadow-lg">
                    <Play className="h-6 w-6 text-primary-foreground fill-current" />
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Content Section */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{description}</p>
            
            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {technologies.slice(0, 7).map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2 py-0.5 rounded-full border border-border bg-secondary/50 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Links */}
            <div className="flex gap-2 mt-auto">
              {githubUrl && (
                <Button variant="outline" size="sm" asChild className="rounded-lg flex-1">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1.5" />
                    Code
                  </a>
                </Button>
              )}
              {liveUrl && (
                <Button size="sm" asChild className="rounded-lg flex-1">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    Live
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Back of Card - Video */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
          {videoUrl ? (
            <div className="relative w-full h-full">
              <iframe
                src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`${title} video`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-card via-card/80 to-transparent">
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <div className="flex gap-2">
                  {liveUrl && (
                    <Button size="sm" asChild className="rounded-lg">
                      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        Visit Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">No video available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
