import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Pyrovelis Website",
    description: "A modern company website built with JavaScript, featuring responsive design and smooth user experience.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/lkrauleidis/Pyrovelis_website",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Next Geneticure TypeScript",
    description: "A Next.js application built with TypeScript and MDX for content management, featuring modern React patterns.",
    technologies: ["Next.js", "TypeScript", "MDX", "React"],
    githubUrl: "https://github.com/lkrauleidis/Next_geneticure_typescript",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    title: "S3-Nest Integration",
    description: "A NestJS service for AWS S3 integration, providing seamless file storage and retrieval capabilities.",
    technologies: ["TypeScript", "NestJS", "AWS S3"],
    githubUrl: "https://github.com/lkrauleidis/s3-nest",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    title: "Auto Bid Bot",
    description: "An automated bidding system built with Python, featuring intelligent bidding strategies and scheduling.",
    technologies: ["Python", "Automation", "API Integration"],
    githubUrl: "https://github.com/lkrauleidis/auto-bid-bot",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
  },
  {
    title: "DiagramTree GoJS ElectronJS",
    description: "A desktop application for creating interactive diagrams using GoJS and Electron, with export capabilities.",
    technologies: ["JavaScript", "ElectronJS", "GoJS"],
    githubUrl: "https://github.com/lkrauleidis/DiagramTree-gojs-electronjs",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    title: "Drag Drop GoJS Angular",
    description: "An Angular application implementing drag-and-drop functionality with GoJS for complex diagram creation.",
    technologies: ["Angular", "TypeScript", "GoJS"],
    githubUrl: "https://github.com/lkrauleidis/drag-drop---gojs-angular",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
  },
  {
    title: "SmartJ",
    description: "A TypeScript project focused on smart automation and data processing workflows.",
    technologies: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/lkrauleidis/smartj",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    title: "Autobot Academy",
    description: "An educational platform built with TypeScript, featuring interactive learning modules and automation tutorials.",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/lkrauleidis/autobot-academy",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
  {
    title: "Assemble-HiC",
    description: "A Python-based bioinformatics tool for Hi-C data assembly and analysis, supporting research workflows.",
    technologies: ["Python", "Bioinformatics", "Data Analysis"],
    githubUrl: "https://github.com/lkrauleidis/Assemble-HiC",
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Projects" 
            subtitle="Showcasing my work and open-source contributions"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 border border-border">
            <p className="text-lg text-muted-foreground mb-6">
              Want to see more? Check out my GitHub profile for additional projects and contributions.
            </p>
            <Button size="lg" asChild className="rounded-xl shadow-lg">
              <a 
                href="https://github.com/lkrauleidis" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;