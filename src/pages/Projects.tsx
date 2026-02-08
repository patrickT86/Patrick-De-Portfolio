import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { FlipProjectCard } from "@/components/FlipProjectCard";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const featuredProjects = [
  {
    title: "Decorify - AI Interior Designer",
    description: "Led development of AI-driven customer experiences at Wayfair. Decorify transforms rooms with AI, allowing users to upload images and see them redesigned in seconds with shoppable products.",
    technologies: ["React", "Next.js", "TypeScript", "AI/ML", "Python", "FastAPI"],
    liveUrl: "https://www.wayfairnext.com/decorify",
    imageUrl: "/projects/decorify.png",
    myRole: "Lead Software Engineer",
    contributions: [
      "Led development supporting millions of monthly visitors, increasing user engagement by 20%+",
      "Designed complex frontend systems using React, Next.js, and TypeScript",
      "Developed backend orchestration and data ingestion services for AI-powered experiences",
      "Led architecture decisions across multiple teams and mentored 4-6 engineers",
    ],
  },
  {
    title: "Wayfair E-commerce Platform",
    description: "Contributed to Wayfair's main web and mobile applications, shipping features used by millions of global users. Reduced page load times by ~30% through optimized rendering.",
    technologies: ["React", "React Native", "TypeScript", "Node.js", "Python", "CI/CD"],
    liveUrl: "https://www.wayfair.com",
    imageUrl: "/projects/wayfair.png",
    myRole: "Lead Software Engineer",
    contributions: [
      "Reduced page load times by ~30% through optimized rendering and data fetching",
      "Implemented payment and financing flows, improving checkout completion by 10-15%",
      "Reduced production regressions 40% via improved testing and CI/CD pipelines",
      "Shipped features via React Native for mobile applications",
    ],
  },
  {
    title: "Demand-IQ SaaS Platform",
    description: "Built and scaled core features for the Demand-IQ SaaS platform supporting thousands of B2B users in demand-generation workflows.",
    technologies: ["Vue", "Nuxt.js", "TypeScript", "Node.js", "Python", "PostgreSQL"],
    liveUrl: "https://demand-iq.com",
    imageUrl: "/projects/demand-iq.png",
    myRole: "Senior Full-Stack Software Engineer",
    contributions: [
      "Improved dashboard usability, reducing user task completion time by ~25%",
      "Implemented backend APIs with Node.js and Python for secure data ingestion",
      "Integrated subscription billing, reducing payment-related support tickets by 30%",
      "Optimized database queries and API response times, improving performance by 20%+",
    ],
  },
  {
    title: "Presidium Health Platform",
    description: "Developed secure healthcare web applications handling sensitive patient and operational data with HIPAA compliance.",
    technologies: ["React", "TypeScript", "Python", "Django", "HIPAA", "Secure APIs"],
    liveUrl: "https://presidiumhealth.com",
    imageUrl: "/projects/presidiumhealth.png",
    myRole: "Senior Software Engineer",
    contributions: [
      "Built backend services in Python (Django) within HIPAA-compliant environments",
      "Implemented role-based access control and secure data workflows",
      "Improved system reliability, reducing production issues by 35%",
      "Collaborated with healthcare stakeholders to translate clinical needs into software",
    ],
  },
];

const githubProjects = [
  {
    title: "Pyrovelis Website",
    description: "A modern company website built with JavaScript, featuring responsive design and smooth user experience.",
    technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
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
    technologies: ["TypeScript", "NestJS", "AWS S3", "Node.js"],
    githubUrl: "https://github.com/lkrauleidis/s3-nest",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    title: "Auto Bid Bot",
    description: "An automated bidding system built with Python, featuring intelligent bidding strategies and scheduling.",
    technologies: ["Python", "Automation", "API Integration", "Scheduling"],
    githubUrl: "https://github.com/lkrauleidis/auto-bid-bot",
    imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
  },
  {
    title: "DiagramTree GoJS ElectronJS",
    description: "A desktop application for creating interactive diagrams using GoJS and Electron, with export capabilities.",
    technologies: ["JavaScript", "ElectronJS", "GoJS", "Desktop App"],
    githubUrl: "https://github.com/lkrauleidis/DiagramTree-gojs-electronjs",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    title: "Drag Drop GoJS Angular",
    description: "An Angular application implementing drag-and-drop functionality with GoJS for complex diagram creation.",
    technologies: ["Angular", "TypeScript", "GoJS", "Drag & Drop"],
    githubUrl: "https://github.com/lkrauleidis/drag-drop---gojs-angular",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
  },
  {
    title: "SmartJ",
    description: "A TypeScript project focused on smart automation and data processing workflows.",
    technologies: ["TypeScript", "Node.js", "Automation", "Data Processing"],
    githubUrl: "https://github.com/lkrauleidis/smartj",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    title: "Autobot Academy",
    description: "An educational platform built with TypeScript, featuring interactive learning modules and automation tutorials.",
    technologies: ["TypeScript", "React", "Node.js", "Education"],
    githubUrl: "https://github.com/lkrauleidis/autobot-academy",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
  {
    title: "Assemble-HiC",
    description: "A Python-based bioinformatics tool for Hi-C data assembly and analysis, supporting research workflows.",
    technologies: ["Python", "Bioinformatics", "Data Analysis", "Research"],
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
            title="Featured Projects" 
            subtitle="Live production applications I've built and contributed to"
          />

          {/* Featured Projects - Flip Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project) => (
              <FlipProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Divider */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-6 text-lg font-semibold text-muted-foreground">
                Open Source & GitHub Projects
              </span>
            </div>
          </div>

          <SectionTitle 
            title="GitHub Repositories" 
            subtitle="Open source projects and personal contributions"
          />

          {/* GitHub Projects - Regular Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubProjects.map((project) => (
              <FlipProjectCard key={project.title} {...project} />
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
