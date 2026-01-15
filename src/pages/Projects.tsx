import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Pyrovelis Website",
    description: "A modern company website built with JavaScript, featuring responsive design and smooth user experience.",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/lkrauleidis/Pyrovelis_website",
  },
  {
    title: "Next Geneticure TypeScript",
    description: "A Next.js application built with TypeScript and MDX for content management, featuring modern React patterns.",
    technologies: ["Next.js", "TypeScript", "MDX", "React"],
    githubUrl: "https://github.com/lkrauleidis/Next_geneticure_typescript",
  },
  {
    title: "S3-Nest Integration",
    description: "A NestJS service for AWS S3 integration, providing seamless file storage and retrieval capabilities.",
    technologies: ["TypeScript", "NestJS", "AWS S3"],
    githubUrl: "https://github.com/lkrauleidis/s3-nest",
  },
  {
    title: "Auto Bid Bot",
    description: "An automated bidding system built with Python, featuring intelligent bidding strategies and scheduling.",
    technologies: ["Python", "Automation", "API Integration"],
    githubUrl: "https://github.com/lkrauleidis/auto-bid-bot",
  },
  {
    title: "DiagramTree GoJS ElectronJS",
    description: "A desktop application for creating interactive diagrams using GoJS and Electron, with export capabilities.",
    technologies: ["JavaScript", "ElectronJS", "GoJS"],
    githubUrl: "https://github.com/lkrauleidis/DiagramTree-gojs-electronjs",
  },
  {
    title: "Drag Drop GoJS Angular",
    description: "An Angular application implementing drag-and-drop functionality with GoJS for complex diagram creation.",
    technologies: ["Angular", "TypeScript", "GoJS"],
    githubUrl: "https://github.com/lkrauleidis/drag-drop---gojs-angular",
  },
  {
    title: "SmartJ",
    description: "A TypeScript project focused on smart automation and data processing workflows.",
    technologies: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/lkrauleidis/smartj",
  },
  {
    title: "Autobot Academy",
    description: "An educational platform built with TypeScript, featuring interactive learning modules and automation tutorials.",
    technologies: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/lkrauleidis/autobot-academy",
  },
  {
    title: "Assemble-HiC",
    description: "A Python-based bioinformatics tool for Hi-C data assembly and analysis, supporting research workflows.",
    technologies: ["Python", "Bioinformatics", "Data Analysis"],
    githubUrl: "https://github.com/lkrauleidis/Assemble-HiC",
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

          <div className="mt-12 text-center p-8 border-2 border-border bg-secondary">
            <p className="text-lg text-muted-foreground mb-4">
              Want to see more? Check out my GitHub profile for additional projects and contributions.
            </p>
            <a 
              href="https://github.com/lkrauleidis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-foreground text-background font-medium hover:bg-background hover:text-foreground transition-colors"
            >
              View All on GitHub
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
