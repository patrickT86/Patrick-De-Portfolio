import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { GraduationCap, Briefcase, Users, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  {
    icon: Briefcase,
    title: "12+ Years Shipping",
    body: "Production software across e-commerce, automotive, energy, and healthcare — Wayfair, Tesla, C3 AI and more.",
  },
  {
    icon: Sparkles,
    title: "AI-Native Engineering",
    body: "Designed and shipped AI features end-to-end — from diffusion-based image generation to predictive analytics pipelines.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    body: "Lead engineer on cross-functional teams, mentoring 4–6 engineers and owning architecture across web, mobile, and backend.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="container mx-auto px-4 relative">
          <SectionTitle title="About Me" subtitle="Senior full-stack engineer building production AI products" />

          <div className="grid lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-xl leading-relaxed">
                I&apos;m a <strong className="text-primary">Lead Full-Stack Software Engineer</strong> with 12+ years
                designing and shipping the kind of software people use every day — at Wayfair, Tesla, C3 AI, Demand
                IQ, and Presidium Health.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My focus is end-to-end ownership of complex products — from the React and Next.js front-ends, to the
                Python and Node services behind them, to the AI orchestration layers that make them feel magical. I
                care about clean architecture, fast feedback loops, and shipping things that move real metrics.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Based in <strong className="text-foreground">Houston, Texas</strong>. Comfortable leading teams,
                going deep on a thorny system, or sitting with a designer to polish a single interaction.
              </p>
            </div>

            <div className="lg:col-span-2 rounded-2xl border border-border p-6 md:p-8 bg-card shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-5">
                <div>
                  <h4 className="text-lg font-semibold">Master of Computer Science</h4>
                  <p className="text-sm text-muted-foreground">North American University · Jul 2015 – Apr 2017</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="text-lg font-semibold">Bachelor of Computer Science</h4>
                  <p className="text-sm text-muted-foreground">North American University · Jul 2011 – Apr 2015</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-border p-6 bg-card hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-4">
                  <h.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;