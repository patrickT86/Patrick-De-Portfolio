import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <div className="group border-2 border-border p-6 hover:shadow-md transition-all duration-300 bg-card flex flex-col h-full">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-1 border border-border bg-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        {githubUrl && (
          <Button variant="outline" size="sm" asChild className="border-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
