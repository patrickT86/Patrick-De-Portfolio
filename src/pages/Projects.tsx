import { Layout } from "@/components/Layout";
import { SectionTitle } from "@/components/SectionTitle";
import { FlipProjectCard } from "@/components/FlipProjectCard";
import { ProjectShowcase, type ShowcaseProject } from "@/components/ProjectShowcase";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Button } from "@/components/ui/button";
import {
  Github,
  Smartphone,
  Globe,
  Server,
  Database,
  Brain,
  Cloud,
  Activity,
  Cpu,
  ShieldCheck,
  Workflow,
  Layers,
  Zap,
  GitBranch,
} from "lucide-react";

import wayfairHero from "@/assets/projects/wayfair-hero.jpg";
import leeHealthHero from "@/assets/projects/leehealth-hero.jpg";
import mileNowHero from "@/assets/projects/milenow-hero.jpg";
import demandIqHero from "@/assets/projects/demand-iq-hero.jpg";
import presidiumHero from "@/assets/projects/presidium-hero.jpg";
import teslaAutopilot from "@/assets/projects/tesla-autopilot.jpg";
import teslaDashboard from "@/assets/projects/tesla-dashboard.jpg";
import c3aiDashboard from "@/assets/projects/c3ai-dashboard.jpg";
import c3aiGrid from "@/assets/projects/c3ai-grid.jpg";

const featuredProjects: ShowcaseProject[] = [
  {
    title: "Wayfair E-commerce Platform",
    company: "Eliassen Group · Wayfair",
    period: "2023 – Present",
    role: "Lead Software Engineer",
    tagline: "Shipping features at scale for one of the largest home retailers in the world.",
    description:
      "Engaged via Eliassen Group on Wayfair's core web and mobile commerce platform. Drove performance, payments, and reliability initiatives that compound across millions of daily sessions, including contributions to AI-powered Decorify room redesign experiences.",
    contributions: [
      "Reduced critical page load times by ~30% via rendering and data-fetching optimizations",
      "Implemented payment and financing flows that lifted checkout completion 10–15%",
      "Cut production regressions 40% with hardened testing and CI/CD pipelines",
      "Shipped React Native features used across Wayfair's mobile apps",
    ],
    technologies: ["React", "React Native", "TypeScript", "Node.js", "PHP", "Python", "GraphQL", "CI/CD"],
    heroImage: wayfairHero,
    links: [
      { label: "wayfair.com", url: "https://www.wayfair.com", type: "live" },
      { label: "Decorify", url: "https://www.wayfairnext.com/decorify", type: "live" },
    ],
  },
  {
    title: "Lee Health — Find a Doctor Platform",
    company: "Eliassen Group · Lee Health",
    period: "2023 – Present",
    role: "Lead Software Engineer",
    tagline: "A modern provider directory connecting Southwest Florida patients with the right care.",
    description:
      "Delivered through Eliassen Group, I led full-stack work on Lee Health's provider directory and physician profile experience. The platform helps thousands of patients search, filter, and book the right doctors across one of Florida's largest non-profit health systems.",
    contributions: [
      "Built a fast, accessible React + TypeScript provider search with faceted filters and geo-aware results",
      "Implemented Node.js APIs aggregating provider, location, and availability data into a unified profile model",
      "Hardened HIPAA-aligned data flows, audit logging, and SSO integrations for clinical content authoring",
      "Improved Lighthouse scores 35%+ and search-to-book conversion through UX and performance work",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Sitecore", "HIPAA", "Azure"],
    heroImage: leeHealthHero,
    links: [
      { label: "leehealth.org/find-a-doctor", url: "https://www.leehealth.org/find-a-doctor", type: "live" },
    ],
  },
  {
    title: "Mile Now — Mileage & Trip Tracking SaaS",
    company: "Eliassen Group · Mile Now",
    period: "2023 – Present",
    role: "Lead Software Engineer",
    tagline: "Automatic GPS mileage tracking and IRS-ready expense reporting for businesses and freelancers.",
    description:
      "Engaged through Eliassen Group as the lead engineer on Mile Now — a mileage tracking and expense reporting platform with automatic GPS trip capture, web dashboards, and mobile companion apps. I owned architecture across the web, API, and mobile clients.",
    contributions: [
      "Architected end-to-end platform: React + TypeScript dashboards, Laravel / Node.js APIs, PostgreSQL data layer",
      "Built GPS trip capture and classification engine, accurately separating business vs. personal miles",
      "Implemented IRS-ready PDF/CSV expense report generation and accounting integrations",
      "Shipped iOS and Android mobile clients with offline trip sync and battery-efficient location tracking",
    ],
    technologies: ["React", "TypeScript", "Laravel", "Node.js", "PostgreSQL", "iOS", "Android", "AWS"],
    heroImage: mileNowHero,
    links: [
      { label: "milenow.com", url: "http://milenow.com", type: "live" },
    ],
  },
  {
    title: "Demand IQ — Solar Lead Generation SaaS",
    company: "Demand-IQ",
    period: "2020 – 2023",
    role: "Senior Full-Stack Software Engineer",
    tagline: "Conversational solar quoting that turns visitors into qualified homeowner leads.",
    description:
      "Demand IQ powers lead generation for solar installers across the United States. I built core SaaS features — from the embeddable widget and dashboards to the iOS and Android companion apps — used by thousands of B2B customers.",
    contributions: [
      "Improved dashboard task completion time by ~25% via UX and data-model refactors",
      "Implemented Node.js + Python APIs for secure address, utility, and pricing data ingestion",
      "Integrated subscription billing, reducing payment support tickets by 30%",
      "Shipped Hero by Demand IQ companion apps on iOS and Android",
    ],
    technologies: ["Vue", "Nuxt.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "iOS", "Android"],
    heroImage: demandIqHero,
    links: [
      { label: "demand-iq.com", url: "https://demand-iq.com", type: "live" },
      {
        label: "iOS – Hero",
        url: "https://apps.apple.com/us/app/hero-from-demand-iq/id6443422119",
        type: "ios",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/developer?id=Demand+IQ&hl=en",
        type: "android",
      },
    ],
  },
  {
    title: "Tesla — Autopilot & Owner Experience",
    company: "Tesla",
    period: "2016 – 2020",
    role: "Senior Full-Stack Software Engineer",
    tagline: "Internal tools and customer-facing features for the world's most software-defined cars.",
    description:
      "Worked on full-stack internal platforms and customer touch points around Tesla's vehicle software — including Autopilot upgrade tooling, owner-facing dashboards, and operational analytics that surfaced fleet telemetry to engineering teams.",
    contributions: [
      "Built React + TypeScript dashboards visualizing fleet telemetry and Autopilot rollout health",
      "Developed Python / Node.js services to ingest high-volume operational vehicle data",
      "Integrated predictive analytics and anomaly-detection pipelines into real-time dashboards",
      "Collaborated with hardware and Autopilot teams during the radar-enabled HW2 transition",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Kafka", "AWS", "Data Pipelines"],
    heroImage: teslaAutopilot,
    gallery: [
      { src: teslaDashboard, caption: "In-vehicle UI exploration" },
      { src: teslaAutopilot, caption: "Autopilot sensor visualization" },
    ],
    links: [
      { label: "tesla.com", url: "https://www.tesla.com", type: "live" },
      {
        label: "Autopilot HW2 (The Verge)",
        url: "https://www.theverge.com/2016/9/11/12880814/tesla-preparing-significant-autopilot-upgrade-will-use-radar-as",
        type: "article",
      },
      {
        label: "Bloomberg Model 3 Survey",
        url: "https://www.bloomberg.com/graphics/2019-tesla-model-3-survey/",
        type: "article",
      },
    ],
  },
  {
    title: "C3 AI — Enterprise Energy Intelligence",
    company: "C3 AI",
    period: "2012 – 2014",
    role: "Full-Stack Software Engineer",
    tagline: "Enterprise AI applications powering integrated energy management with SAIC.",
    description:
      "Built full-stack components of C3's enterprise AI platform during the SAIC strategic alliance — focused on integrated energy management for commercial, industrial, and government customers. Delivered analytics dashboards over big-data backends with AI-assisted insights.",
    contributions: [
      "Built React + TypeScript analytics UIs over PHP/Laravel and Node.js services",
      "Designed REST and GraphQL APIs exposing AI-powered energy insights to enterprise clients",
      "Implemented event-driven workflows for predictive maintenance and grid optimization",
      "Added monitoring, logging, and SLOs to harden AI-integrated production features",
    ],
    technologies: ["React", "TypeScript", "PHP", "Laravel", "Node.js", "GraphQL", "Cassandra", "AWS"],
    heroImage: c3aiDashboard,
    gallery: [
      { src: c3aiGrid, caption: "Smart grid + analytics overlay" },
      { src: c3aiDashboard, caption: "Energy management dashboard" },
    ],
    links: [
      { label: "c3.ai", url: "https://c3.ai/", type: "live" },
      {
        label: "SAIC + C3 Alliance",
        url: "https://www.renewableenergyworld.com/power-grid/smart-grids/at-distributech-c3-saic-expand-alliance-to-deliver-integrated-energy-solutions/",
        type: "article",
      },
      {
        label: "FMLink Coverage",
        url: "https://www.fmlink.com/saic-c3-team-up-to-deliver-integrated-energy-management-solutions-for-commercial-industrial-and-government-customers/",
        type: "article",
      },
    ],
  },
  {
    title: "Presidium Health — Home-Based Care Platform",
    company: "Presidium Health Corp",
    period: "2014 – 2016",
    role: "Senior Software Engineer",
    tagline: "HIPAA-compliant clinical platform connecting field clinicians with high-acuity patients.",
    description:
      "Presidium Health delivers in-home medical care for medically complex patients. I built the secure clinician web platform plus the patient-facing mobile experience used during home visits.",
    contributions: [
      "Built secure Python/Django + Node.js services within HIPAA-compliant infrastructure",
      "Implemented role-based access control and audited clinical data workflows",
      "Reduced production incidents 35% with improved monitoring and CI/CD",
      "Shipped the Presidium Patient mobile app (iOS + Android) for at-home care visits",
    ],
    technologies: ["React", "TypeScript", "Python", "Django", "Node.js", "PostgreSQL", "HIPAA", "Mobile"],
    heroImage: presidiumHero,
    links: [
      { label: "presidiumhealth.com", url: "https://presidiumhealth.com/", type: "live" },
      {
        label: "Patient App (Play)",
        url: "https://play.google.com/store/apps/details?id=com.presidiumhealth.patient&hl=en-US",
        type: "android",
      },
      {
        label: "Patient App (iOS)",
        url: "https://iphone.apkpure.com/app/presidium-patient/com.presidiumhealth.patient",
        type: "ios",
      },
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

          {/* Featured Projects - Showcase */}
          <div className="space-y-10 mb-20">
            {featuredProjects.map((project, idx) => (
              <ProjectShowcase key={project.title} project={project} reverse={idx % 2 === 1} />
            ))}
          </div>

          {/* Architecture Diagrams */}
          <div className="space-y-8 mb-20">
            <SectionTitle
              title="Selected Architecture"
              subtitle="How some of these production systems are designed end-to-end"
            />

            <ArchitectureDiagram
              title="Decorify — AI Room Redesign Pipeline"
              description="From a homeowner's photo to a fully shoppable, AI-styled room in under a few seconds."
              rows={[
                {
                  title: "Client",
                  nodes: [
                    { label: "Web App", sub: "Next.js + React", icon: Globe },
                    { label: "iOS App", sub: "Swift", icon: Smartphone },
                    { label: "CDN Edge", sub: "Image + asset cache", icon: Cloud },
                  ],
                },
                {
                  title: "API & Orchestration",
                  nodes: [
                    { label: "BFF Gateway", sub: "Node.js / GraphQL", icon: Server },
                    { label: "AI Orchestrator", sub: "FastAPI (Python)", icon: Workflow },
                    { label: "Auth & Quotas", sub: "OAuth / rate limits", icon: ShieldCheck },
                  ],
                },
                {
                  title: "AI & Data",
                  nodes: [
                    { label: "Diffusion Model", sub: "Room generation", icon: Brain },
                    { label: "Vision Tagging", sub: "Object detection", icon: Cpu },
                    { label: "Product Match", sub: "Vector search", icon: Layers },
                    { label: "Catalog DB", sub: "PostgreSQL", icon: Database },
                  ],
                },
              ]}
            />

            <ArchitectureDiagram
              title="C3 AI — Energy Intelligence Platform"
              description="Streaming sensor and grid data into AI-powered analytics surfaces for enterprise operators."
              rows={[
                {
                  title: "Sources",
                  nodes: [
                    { label: "Smart Meters", sub: "IoT telemetry", icon: Activity },
                    { label: "Grid SCADA", sub: "Operational data", icon: Zap },
                    { label: "Weather APIs", sub: "Forecast feeds", icon: Cloud },
                  ],
                },
                {
                  title: "Pipeline",
                  nodes: [
                    { label: "Kafka Streams", sub: "Event ingestion", icon: GitBranch },
                    { label: "ETL / Spark", sub: "Aggregation", icon: Workflow },
                    { label: "Time-series DB", sub: "Cassandra", icon: Database },
                  ],
                },
                {
                  title: "Intelligence",
                  nodes: [
                    { label: "AI Models", sub: "Predictive maintenance", icon: Brain },
                    { label: "GraphQL API", sub: "Insights surface", icon: Server },
                    { label: "Analytics UI", sub: "React dashboards", icon: Globe },
                  ],
                },
              ]}
            />
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
