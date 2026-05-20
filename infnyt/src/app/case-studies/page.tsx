import type { Metadata } from "next";
import {
  Heart,
  Brain,
  Truck,
  BarChart3,
  Building2,
  ShoppingBag,
  CreditCard,
  LineChart,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies — InfinytTech",
  description:
    "Eight production systems across healthcare, education, logistics, SaaS, fintech, and more. Built by senior engineers, shipped to spec.",
};

const PROJECTS: {
  tag: string;
  Icon: LucideIcon;
  title: string;
  body: string;
  metric: string;
  stack: string[];
  bg: string;
}[] = [
  {
    tag: "Healthcare",
    Icon: Heart,
    title: "MediCare Plus",
    body: "Hospital management system deployed across 8 facilities. Unified patient records, scheduling, and billing into a single platform — cutting intake time by 40% and eliminating cross-department data gaps.",
    metric: "40% faster intake",
    stack: ["Next.js", "Node", "PostgreSQL"],
    bg: "from-slate-900 to-slate-800",
  },
  {
    tag: "Education",
    Icon: Brain,
    title: "EduSmart Platform",
    body: "Learning management system serving 200+ instructors and 15,000 students. Live classes, adaptive assignments, and per-student analytics in one production-stable platform.",
    metric: "15,000+ active users",
    stack: ["React", "Django", "Redis"],
    bg: "from-indigo-950 to-indigo-900",
  },
  {
    tag: "Logistics",
    Icon: Truck,
    title: "Translogix",
    body: "Fleet and route optimization for a national delivery operator running 1,200 vehicles. Replaced spreadsheet dispatch with real-time routing — cutting average dispatch time by 35%.",
    metric: "35% faster dispatch",
    stack: ["Vue", "FastAPI", "PostGIS"],
    bg: "from-teal-950 to-teal-900",
  },
  {
    tag: "SaaS",
    Icon: BarChart3,
    title: "ScaleDesk",
    body: "Customer support platform for a fast-growing B2B SaaS team. AI-powered ticket routing and smart assignment rules cut average resolution time by 55% in the first 60 days.",
    metric: "55% faster resolution",
    stack: ["Next.js", "Supabase", "OpenAI"],
    bg: "from-violet-950 to-violet-900",
  },
  {
    tag: "Real Estate",
    Icon: Building2,
    title: "PropertyHub",
    body: "End-to-end property management platform for a regional real estate firm. Listings, tenant portal, maintenance requests, and owner reporting — across 400 properties, one system.",
    metric: "400 properties managed",
    stack: ["React", "Rails", "AWS"],
    bg: "from-emerald-950 to-emerald-900",
  },
  {
    tag: "Retail",
    Icon: ShoppingBag,
    title: "ShopSphere",
    body: "E-commerce rebuild for a multi-brand retailer. New checkout architecture and frontend performance work doubled conversion rate post-launch and reduced cart abandonment by 31%.",
    metric: "2× conversion rate",
    stack: ["Next.js", "Shopify API", "Stripe"],
    bg: "from-sky-950 to-sky-900",
  },
  {
    tag: "Fintech",
    Icon: CreditCard,
    title: "PayFlow",
    body: "Payment and reconciliation infrastructure for a fintech startup processing 50,000+ monthly transactions. Intelligent retry logic and multi-provider fallback reduced failed payment rate by 62%.",
    metric: "62% fewer failures",
    stack: ["Node", "Stripe", "PostgreSQL"],
    bg: "from-rose-950 to-rose-900",
  },
  {
    tag: "Analytics",
    Icon: LineChart,
    title: "Vantage",
    body: "Real-time business intelligence platform for a multi-channel retail group. Unified six fragmented data sources into one operational dashboard used daily by 300+ team members.",
    metric: "6 sources → 1 view",
    stack: ["React", "dbt", "BigQuery"],
    bg: "from-amber-950 to-amber-900",
  },
];


export default function CaseStudiesPage() {
  return (
    <main className="relative overflow-hidden bg-site-bg">
      {/* Bottom-left glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-90 w-[70%] opacity-60"
        style={{
          background:
            "radial-gradient(75% 90% at 14% 100%, rgba(14,158,181,0.12) 0%, rgba(14,158,181,0.05) 38%, rgba(7,16,30,0) 74%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-300 mx-auto px-8 pt-16 pb-24">
        {/* Hero */}
        <div className="max-w-145 mb-14">
          <Eyebrow>Case Studies</Eyebrow>
          <h1 className="mt-4.5 text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            Production systems.<br />Real outcomes.
          </h1>
          <p className="mt-5 text-[14.5px] leading-[1.68] text-gray-500 max-w-130">
            Eight engagements across healthcare, education, logistics, SaaS,
            fintech, and more. Each one scoped by senior engineers, built to
            production standards, and handed off clean.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <p className="mt-10 text-center text-[12px] text-gray-500 italic">
          All work shown with client permission. Some project names anonymised
          for confidentiality.
        </p>
      </div>
    </main>
  );
}


function ProjectCard({
  tag,
  Icon,
  title,
  body,
  metric,
  stack,
  bg,
}: {
  tag: string;
  Icon: LucideIcon;
  title: string;
  body: string;
  metric: string;
  stack: string[];
  bg: string;
}) {
  return (
    <article
      className={`group rounded-2xl bg-gradient-to-br ${bg} p-7 flex flex-col min-h-[300px] relative overflow-hidden text-white cursor-pointer
        shadow-[0_2px_12px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]
        transition-all duration-[400ms] ease-out
        hover:scale-[1.02]
        hover:shadow-[0_0_0_1.5px_rgba(255,255,255,0.18),0_0_0_4px_rgba(255,255,255,0.04),0_28px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.14)]`}
    >
      {/* Spotlight bloom */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(255,255,255,0.13), transparent 65%)",
        }}
        aria-hidden="true"
      />
      {/* Top-edge shimmer */}
      <span
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-teal-400 text-[12px] font-semibold tracking-[0.04em] mb-3.5">
          <span className="w-7 h-7 rounded-lg bg-white/8 inline-flex items-center justify-center transition-all duration-400 group-hover:bg-white/16">
            <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
          </span>
          <span>{tag}</span>
        </div>

        <h3 className="text-[22px] font-bold text-white tracking-[-0.01em] leading-[1.2] mb-2">
          {title}
        </h3>
        <p className="text-[13px] text-white/60 leading-[1.65] mb-4 transition-colors duration-400 group-hover:text-white/80">
          {body}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {stack.map((s) => (
            <span
              key={s}
              className="text-[10px] font-semibold uppercase tracking-[0.08em] px-2 py-0.5 rounded bg-white/7 text-white/50 group-hover:text-white/70 transition-colors duration-400"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-teal-400 text-[13.5px] font-semibold transition-colors duration-400 group-hover:text-teal-300 self-start"
        >
          <span>Read case study</span>
          <span className="w-6 h-6 rounded-full bg-teal-400/15 inline-flex items-center justify-center transition-all duration-400 group-hover:translate-x-1 group-hover:bg-teal-400/25">
            <ArrowRight size={12} strokeWidth={2} />
          </span>
        </a>
      </div>

      {/* Faded background icon */}
      <div className="absolute -bottom-8 -right-8 w-44 h-44 text-white opacity-7 group-hover:opacity-14 transition-opacity duration-400 pointer-events-none">
        <Icon size={176} strokeWidth={0.8} aria-hidden="true" />
      </div>

    </article>
  );
}
