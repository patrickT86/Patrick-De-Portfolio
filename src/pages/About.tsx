import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillBadge } from "@/components/SkillBadge";
import { GraduationCap, Code, Server, Cloud, Database, Users, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Angular", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Component Architecture", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Backend & API Engineering",
    skills: ["PHP", "Laravel", "Node.js", "Java", "J2EE", "Go", "Python", "Django", "Flask", "REST APIs", "GraphQL", "Microservices", "API Design"],
  },
  {
    icon: Cpu,
    title: "Programming Languages",
    skills: ["C#", "C++", "Java", "Python", "Rust", "Ruby", "Go", "TypeScript", "JavaScript", "PHP", "Scala", "Kotlin"],
  },
  {
    icon: Globe,
    title: "Frameworks & Platforms",
    skills: [".NET", "ASP.NET", "ASP.NET Core", "Ruby on Rails", "Spring Boot", "NestJS", "Express.js", "FastAPI", "Symfony", "Entity Framework"],
  },
  {
    icon: Database,
    title: "Databases & Data Systems",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Cassandra", "Redis", "Elasticsearch", "DynamoDB", "Oracle", "SQLite"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "Jenkins", "Linux", "Nginx"],
  },
  {
    icon: Server,
    title: "Data & Event Pipelines",
    skills: ["Kafka", "RabbitMQ", "Airflow", "Spark", "Hadoop", "Delta Lake", "ETL", "Data Warehousing"],
  },
  {
    icon: Users,
    title: "Practices & Leadership",
    skills: ["System Design", "Code Reviews", "Mentorship", "Agile", "Scrum", "TDD", "CI/CD", "AI Integration", "Team Leadership"],
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

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I&apos;m a <strong className="text-primary">Senior Full-Stack Software Engineer</strong> with 12+ years of experience 
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
                Based in <strong className="text-foreground">Houston, Texas</strong>, I&apos;m passionate about creating elegant 
                solutions to complex problems and continuously learning new technologies to stay at 
                the forefront of software development.
              </p>
            </div>

            {/* Education */}
            <div className="rounded-xl border border-border p-6 md:p-8 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold">North American University</h4>
                  <p className="text-lg text-muted-foreground">Master of Science in Computer Science (MSCS)</p>
                  <p className="text-sm text-muted-foreground mt-1">Aug 2011 – May 2015</p>
                  <span className="mt-3 inline-block px-3 py-1.5 text-sm rounded-full border border-border bg-secondary/50">
                    Minor: Machine Learning
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillCategories.map((category) => (
                <div 
                  key={category.title} 
                  className="rounded-xl border border-border p-5 bg-card hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-semibold">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
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