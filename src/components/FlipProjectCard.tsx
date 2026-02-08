import { useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FlipProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  myRole?: string;
  contributions?: string[];
}

export function FlipProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  imageUrl,
  videoUrl,
  myRole,
  contributions = []
}: FlipProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const hasFlipContent = myRole || contributions.length > 0;

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg flex flex-col">
      {/* Header Section - Flippable */}
      <div 
        className="relative h-48 perspective-1000 cursor-pointer"
        onMouseEnter={() => hasFlipContent && setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div 
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front - Image */}
          <div className="absolute inset-0 backface-hidden overflow-hidden">
            {imageUrl && (
              <>
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                {hasFlipContent && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary/90 rounded-full p-3 shadow-lg">
                      <Play className="h-6 w-6 text-primary-foreground fill-current" />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Back - My Role & Contributions */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-b border-border">
            <ScrollArea className="h-full w-full">
              <div className="p-4">
                {myRole && (
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">My Role</h4>
                    <p className="text-sm font-medium text-foreground">{myRole}</p>
                  </div>
                )}
                {contributions.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Key Contributions</h4>
                    <ul className="space-y-1.5">
                      {contributions.map((contribution, index) => (
                        <li key={index} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
      
      {/* Content Section - Static */}
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
  );
}
