import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail, Sparkles, Code2, Server, Database, Cloud, Smartphone, Terminal, Cpu, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const techStacks = [
  { name: "React", icon: Code2, category: "Frontend" },
  { name: "Next.js", icon: Globe, category: "Frontend" },
  { name: "TypeScript", icon: Code2, category: "Language" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "Python", icon: Terminal, category: "Language" },
  { name: "PHP/Laravel", icon: Server, category: "Backend" },
  { name: "Ruby", icon: Terminal, category: "Language" },
  { name: "Ruby on Rails", icon: Server, category: "Backend" },
  { name: "Go", icon: Cpu, category: "Language" },
  { name: "C#", icon: Code2, category: "Language" },
  { name: ".NET/ASP.NET", icon: Server, category: "Backend" },
  { name: "Java/J2EE", icon: Cpu, category: "Backend" },
  { name: "C++", icon: Cpu, category: "Language" },
  { name: "Rust", icon: Terminal, category: "Language" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "Docker", icon: Server, category: "DevOps" },
  { name: "React Native", icon: Smartphone, category: "Mobile" },
  { name: "GraphQL", icon: Globe, category: "API" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Open to new opportunities
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Patrick Tracey
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-medium">
              Senior / Lead Full-Stack Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              12+ years of experience building scalable, high-availability web applications. 
              Specialized in AI feature integration and enterprise SaaS platforms.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {techStacks.slice(0, 12).map((tech) => (
                <div 
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                  <tech.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 text-primary text-sm font-medium"
              >
                +{techStacks.length - 12} more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="rounded-xl text-base shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-xl text-base">
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
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "5", label: "Companies" },
              { value: "50+", label: "Projects" },
              { value: "MS", label: "Computer Science" },
            ].map((stat) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              I&apos;m always interested in hearing about new opportunities and challenging projects.
            </p>
            <Button size="lg" asChild className="rounded-xl shadow-lg">
              <a href="mailto:patrick.tracey86@zohomail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;