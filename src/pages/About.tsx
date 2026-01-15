import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillBadge } from "@/components/SkillBadge";
import { GraduationCap, Code, Server, Cloud, Database, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Fundamentals",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Component Architecture", "State Management", "Responsive UI", "Data Dashboards"],
  },
  {
    icon: Server,
    title: "Backend & API Engineering",
    skills: ["PHP", "Laravel", "Node.js", "Java", "Go", "Python", "REST APIs", "GraphQL", "Microservices", "API Design", "Authentication & Authorization", "Caching"],
  },
  {
    icon: Database,
    title: "Databases & Data Systems",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Redis", "SQL & NoSQL Data Modeling", "Query Optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD (GitHub Actions)", "Monitoring & Observability"],
  },
  {
    icon: Server,
    title: "Event & Data Pipelines",
    skills: ["Kafka", "Airflow", "Spark", "Hadoop", "Delta Lake"],
  },
  {
    icon: Users,
    title: "Engineering Practices",
    skills: ["System Design", "Code Reviews", "Mentorship", "Agile / Scrum", "Cross-Functional Collaboration", "AI Feature Integration"],
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="About Me" 
            subtitle="Get to know who I am and what drives me"
          />

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I&apos;m a <strong>Senior Full-Stack Software Engineer</strong> with 12+ years of experience 
                building scalable, high-availability web applications. My expertise spans the entire stack, 
                from frontend dashboards to backend APIs and cloud-ready platforms.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I specialize in AI feature integration, including personalization, recommendations, 
                predictive analytics, and intelligent workflow automation. As an experienced technical 
                leader, I have a proven track record of mentoring engineers and delivering 
                production-grade software across e-commerce, healthcare, and enterprise SaaS platforms.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Based in <strong>Houston, Texas</strong>, I&apos;m passionate about creating elegant 
                solutions to complex problems and continuously learning new technologies to stay at 
                the forefront of software development.
              </p>
            </div>

            {/* Education */}
            <div className="border-2 border-border p-6 md:p-8 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold">North American University</h4>
                  <p className="text-lg text-muted-foreground">Master of Science in Computer Science (MSCS)</p>
                  <p className="text-sm font-mono text-muted-foreground mt-1">Aug 2011 – May 2015</p>
                  <p className="mt-2 inline-block px-3 py-1 text-sm border-2 border-border bg-secondary">
                    Minor: Machine Learning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <div 
                  key={category.title} 
                  className="border-2 border-border p-6 bg-card hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="h-6 w-6" />
                    <h4 className="text-lg font-bold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
