import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceCard } from "@/components/ExperienceCard";

const experiences = [
  {
    company: "Wayfair",
    role: "Lead Software Engineer",
    period: "Jun 2023 – Oct 2025",
    description: [
      "Led development of large-scale React and Next.js applications with TypeScript, powering customer-facing and internal e-commerce platforms.",
      "Designed and implemented backend services using PHP, Laravel, Node.js, and Python, supporting high-traffic, data-intensive workflows.",
      "Integrated AI-driven personalization and recommendation features into frontend and backend systems to improve product discovery and user engagement.",
      "Architected reusable frontend components, state management patterns, and API contracts for complex operational dashboards.",
      "Conducted technical design reviews, enforced coding standards, and mentored engineers across frontend and backend development.",
    ],
  },
  {
    company: "Demand-IQ",
    role: "Senior Full-Stack Software Engineer",
    period: "Jul 2020 – Mar 2023",
    description: [
      "Built full-stack SaaS applications using PHP, Laravel, Node.js, React, and TypeScript for market analytics and business intelligence products.",
      "Developed backend APIs and services that integrated AI-assisted insights and recommendation logic into customer workflows.",
      "Implemented Next.js frontend features for SEO-optimized dashboards and high-performance client applications.",
      "Designed and optimized relational and NoSQL database queries, improving reporting and analytics performance by ~30%.",
      "Collaborated closely with product, data, and design teams to deliver scalable, production-ready solutions.",
    ],
  },
  {
    company: "Tesla",
    role: "Staff Full-Stack Software Engineer",
    period: "Jan 2017 – Feb 2020",
    description: [
      "Delivered end-to-end platforms using PHP, Node.js, Python, React, TypeScript, and Next.js for internal operational and analytics tools.",
      "Integrated predictive analytics and AI-driven anomaly detection features into real-time dashboards.",
      "Built backend APIs and services to process high-volume operational data and expose AI-powered insights to frontend applications.",
    ],
  },
  {
    company: "Presidium Health Corp",
    role: "Senior Software Engineer",
    period: "Jun 2014 – Dec 2016",
    description: [
      "Developed secure backend services and REST APIs using PHP, Laravel, Node.js, and Python for healthcare management platforms.",
      "Built React and TypeScript dashboards to visualize operational data and AI-assisted predictive insights.",
      "Optimized backend performance through improved data modeling and query tuning, reducing API response times by 25–30%.",
      "Integrated AI-powered alerting and recommendation features to streamline administrative and clinical workflows.",
      "Worked with cross-functional teams to ensure compliance, scalability, and production reliability.",
    ],
  },
  {
    company: "C3 AI",
    role: "Full-Stack Software Engineer",
    period: "Jul 2012 – May 2014",
    description: [
      "Built enterprise web applications using PHP/Laravel and Node.js backends with React and TypeScript frontends.",
      "Integrated AI-powered analytics modules into enterprise dashboards for data-driven decision-making.",
      "Designed REST and GraphQL APIs to expose AI functionality to internal and client-facing applications.",
      "Implemented backend optimizations and event-driven workflows to support AI-driven insights at scale.",
      "Added monitoring and logging to improve stability and reliability of AI-integrated features.",
    ],
  },
];

const Experience = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Work Experience" 
            subtitle="My professional journey and accomplishments"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="md:pl-20 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-6 top-8 w-4 h-4 bg-foreground border-2 border-background" />
                  <ExperienceCard {...exp} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
