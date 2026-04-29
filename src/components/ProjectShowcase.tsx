import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight, Apple, Smartphone, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProjectLink {
  label: string;
  url: string;
  type: "live" | "github" | "ios" | "android" | "article";
}

export interface ShowcaseProject {
  title: string;
  company: string;
  period: string;
  role: string;
  tagline: string;
  description: string;
  contributions: string[];
  technologies: string[];
  heroImage: string;
  gallery?: { src: string; caption: string }[];
  links: ProjectLink[];
  accent?: string; // tailwind gradient hint, optional
}

const linkIcon = (type: ProjectLink["type"]) => {
  switch (type) {
    case "github":
      return <Github className="h-4 w-4" />;
    case "ios":
      return <Apple className="h-4 w-4" />;
    case "android":
      return <Smartphone className="h-4 w-4" />;
    case "article":
      return <Newspaper className="h-4 w-4" />;
    default:
      return <ExternalLink className="h-4 w-4" />;
  }
};

export function ProjectShowcase({ project, reverse = false }: { project: ShowcaseProject; reverse?: boolean }) {
  const [activeImage, setActiveImage] = useState(project.heroImage);
  const allImages = [
    { src: project.heroImage, caption: project.title },
    ...(project.gallery ?? []),
  ];

  return (
    <article className="group relative rounded-3xl border border-border bg-card overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className={`grid lg:grid-cols-5 gap-0 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {/* Visual side */}
        <div className="lg:col-span-3 relative bg-gradient-to-br from-primary/10 via-accent/5 to-background p-4 md:p-6 flex flex-col gap-3">
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg aspect-[16/10] bg-muted">
            <img
              src={activeImage}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge variant="secondary" className="backdrop-blur bg-background/80 border-border">
                {project.company}
              </Badge>
              <Badge variant="outline" className="backdrop-blur bg-background/60">
                {project.period}
              </Badge>
            </div>
          </div>

          {allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {allImages.map((img) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActiveImage(img.src)}
                  className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                    activeImage === img.src
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-border opacity-70 hover:opacity-100"
                  }`}
                  title={img.caption}
                >
                  <img src={img.src} alt={img.caption} loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content side */}
        <div className="lg:col-span-2 p-6 md:p-8 flex flex-col">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">{project.role}</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">{project.title}</h3>
          <p className="text-sm text-muted-foreground italic mb-4">{project.tagline}</p>
          <p className="text-sm leading-relaxed text-foreground/80 mb-5">{project.description}</p>

          <div className="mb-5">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Key Contributions
            </h4>
            <ul className="space-y-1.5">
              {project.contributions.slice(0, 4).map((c) => (
                <li key={c} className="text-sm text-foreground/80 flex items-start gap-2 leading-relaxed">
                  <ArrowUpRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 8).map((t) => (
              <span
                key={t}
                className="text-xs font-medium px-2.5 py-1 rounded-full border border-border bg-secondary/60 text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.links.map((link) => (
              <Button
                key={link.url}
                variant={link.type === "live" ? "default" : "outline"}
                size="sm"
                asChild
                className="rounded-lg"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {linkIcon(link.type)}
                  <span className="ml-1.5">{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}