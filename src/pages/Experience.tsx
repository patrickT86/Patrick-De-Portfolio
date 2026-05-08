import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceCard } from "@/components/ExperienceCard";

const experiences = [
  {
    company: "Eliassen Group",
    role: "Lead Software Engineer",
    period: "May 2023 – Present",
    location: "Houston, TX",
    description: [
      "Engaged through Eliassen Group as a Lead Software Engineer delivering full-stack solutions for enterprise clients across e-commerce, healthcare, and SaaS domains.",
      "Led development of large-scale React, Next.js, and TypeScript applications for Wayfair's customer-facing and internal e-commerce platforms, including AI-powered Decorify experiences.",
      "Built provider directory and patient-facing modules for Lee Health, integrating secure search, scheduling, and HIPAA-aligned data workflows.",
      "Architected the Mile Now mileage tracking platform end-to-end — Node.js / Laravel APIs, PostgreSQL data modeling, and React + mobile clients with GPS trip capture.",
      "Conducted technical design reviews, enforced coding standards, and mentored engineers across frontend, backend, and mobile teams on every client engagement.",
    ],
    projects: [
      { label: "Eliassen Group", url: "https://www.eliassen.com/" },
      { label: "Wayfair", url: "https://www.wayfair.com" },
      { label: "Lee Health – Find a Doctor", url: "https://www.leehealth.org/find-a-doctor" },
      { label: "Mile Now", url: "http://milenow.com" },
    ],
  },
  {
    company: "Demand-IQ",
    role: "Senior Full-Stack Software Engineer",
    period: "Jun 2020 – Feb 2023",
    location: "Remote",
    description: [
      "Built full-stack SaaS applications using PHP, Laravel, Node.js, React, and TypeScript for market analytics and business intelligence products.",
      "Developed backend APIs and services that integrated AI-assisted insights and recommendation logic into customer workflows.",
      "Implemented Next.js frontend features for SEO-optimized dashboards and high-performance client applications.",
      "Designed and optimized relational and NoSQL database queries, improving reporting and analytics performance by ~30%.",
      "Collaborated closely with product, data, and design teams to deliver scalable, production-ready solutions.",
    ],
    projects: [
      { label: "demand-iq.com", url: "https://demand-iq.com" },
      { label: "Hero iOS App", url: "https://apps.apple.com/us/app/hero-from-demand-iq/id6443422119" },
      { label: "Google Play", url: "https://play.google.com/store/apps/developer?id=Demand+IQ&hl=en" },
    ],
  },
  {
    company: "Tesla",
    role: "Senior Full-Stack Software Engineer",
    period: "Dec 2016 – Jan 2020",
    location: "Palo Alto, CA",
    description: [
      "Delivered end-to-end platforms using PHP, Node.js, Python, React, TypeScript, and Next.js for internal operational and analytics tools.",
      "Integrated predictive analytics and AI-driven anomaly detection features into real-time dashboards.",
      "Built backend APIs and services to process high-volume operational data and expose AI-powered insights to frontend applications.",
    ],
    projects: [
      { label: "tesla.com", url: "https://www.tesla.com" },
      {
        label: "Autopilot HW2 (Verge)",
        url: "https://www.theverge.com/2016/9/11/12880814/tesla-preparing-significant-autopilot-upgrade-will-use-radar-as",
      },
      { label: "Bloomberg Model 3", url: "https://www.bloomberg.com/graphics/2019-tesla-model-3-survey/" },
    ],
  },
  {
    company: "Presidium Health Corp",
    role: "Senior Software Engineer",
    period: "May 2014 – Nov 2016",
    location: "Houston, TX",
    description: [
      "Developed secure backend services and REST APIs using PHP, Laravel, Node.js, and Python for healthcare management platforms.",
      "Built React and TypeScript dashboards to visualize operational data and AI-assisted predictive insights.",
      "Optimized backend performance through improved data modeling and query tuning, reducing API response times by 25–30%.",
      "Integrated AI-powered alerting and recommendation features to streamline administrative and clinical workflows.",
      "Worked with cross-functional teams to ensure compliance, scalability, and production reliability.",
    ],
    projects: [
      { label: "presidiumhealth.com", url: "https://presidiumhealth.com/" },
      {
        label: "Patient App (Play)",
        url: "https://play.google.com/store/apps/details?id=com.presidiumhealth.patient&hl=en-US",
      },
      {
        label: "Patient App (iOS)",
        url: "https://iphone.apkpure.com/app/presidium-patient/com.presidiumhealth.patient",
      },
    ],
  },
  {
    company: "C3 AI",
    role: "Full-Stack Software Engineer",
    period: "Jun 2012 – Apr 2014",
    location: "Remote",
    description: [
      "Built enterprise web applications using PHP/Laravel and Node.js backends with React and TypeScript frontends.",
      "Integrated AI-powered analytics modules into enterprise dashboards for data-driven decision-making.",
      "Designed REST and GraphQL APIs to expose AI functionality to internal and client-facing applications.",
      "Implemented backend optimizations and event-driven workflows to support AI-driven insights at scale.",
      "Added monitoring and logging to improve stability and reliability of AI-integrated features.",
    ],
    projects: [
      { label: "c3.ai", url: "https://c3.ai/" },
      {
        label: "SAIC + C3 Alliance",
        url: "https://www.renewableenergyworld.com/power-grid/smart-grids/at-distributech-c3-saic-expand-alliance-to-deliver-integrated-energy-solutions/",
      },
      {
        label: "FMLink Coverage",
        url: "https://www.fmlink.com/saic-c3-team-up-to-deliver-integrated-energy-management-solutions-for-commercial-industrial-and-government-customers/",
      },
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
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-border rounded-full" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="md:pl-20 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-6 top-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
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