import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SkillBadge } from "@/components/SkillBadge";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const topSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PHP/Laravel",
  "AWS",
  "PostgreSQL",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl font-mono text-muted-foreground mb-4 border-l-4 border-foreground pl-4">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              Patrick Tracey
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8">
              Senior / Lead Full-Stack Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              12+ years of experience building scalable, high-availability web applications. 
              Specialized in AI feature integration and enterprise SaaS platforms.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {topSkills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="border-2 text-base">
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 text-base">
                <a href="https://github.com/lkrauleidis" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 md:py-24 border-t-2 border-border bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 border-2 border-border bg-card">
              <p className="text-4xl md:text-5xl font-bold mb-2">12+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center p-6 border-2 border-border bg-card">
              <p className="text-4xl md:text-5xl font-bold mb-2">5</p>
              <p className="text-muted-foreground">Companies</p>
            </div>
            <div className="text-center p-6 border-2 border-border bg-card">
              <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
              <p className="text-muted-foreground">Projects</p>
            </div>
            <div className="text-center p-6 border-2 border-border bg-card">
              <p className="text-4xl md:text-5xl font-bold mb-2">MS</p>
              <p className="text-muted-foreground">Computer Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t-2 border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I&apos;m always interested in hearing about new opportunities and challenging projects.
          </p>
          <Button size="lg" asChild className="border-2 text-base">
            <a href="mailto:patrick.tracey86@zohomail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
