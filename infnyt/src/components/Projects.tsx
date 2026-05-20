import {
  Heart,
  Brain,
  Truck,
  BarChart3,
  Building2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Eyebrow } from "./ui";

const PROJECTS: {
  tag: string;
  Icon: LucideIcon;
  title: string;
  body: string;
  metric: string;
  bg: string;
}[] = [
  {
    tag: "Healthcare",
    Icon: Heart,
    title: "MediCare Plus",
    body: "Hospital management system used across 8 facilities. Reduced patient intake time by 40% and unified records across departments.",
    metric: "40% faster intake",
    bg: "from-slate-900 to-slate-800",
  },
  {
    tag: "Education",
    Icon: Brain,
    title: "EduSmart Platform",
    body: "LMS for 200+ instructors and 15,000 students. Live classes, assignments, and analytics in one platform.",
    metric: "15,000+ active users",
    bg: "from-indigo-950 to-indigo-900",
  },
  {
    tag: "Logistics",
    Icon: Truck,
    title: "Translogix",
    body: "Fleet and route optimization for a national delivery operator. Cut average dispatch time by 35% across 1,200 vehicles.",
    metric: "35% faster dispatch",
    bg: "from-teal-950 to-teal-900",
  },
  {
    tag: "SaaS",
    Icon: BarChart3,
    title: "ScaleDesk",
    body: "Customer support platform for a fast-growing B2B SaaS. Cut average ticket resolution time by 55% with AI-powered routing.",
    metric: "55% faster resolution",
    bg: "from-violet-950 to-violet-900",
  },
  {
    tag: "Real Estate",
    Icon: Building2,
    title: "PropertyHub",
    body: "Property management platform for a regional real estate firm. Unified listings, tenant portal, and maintenance — across 400 properties.",
    metric: "400 properties managed",
    bg: "from-emerald-950 to-emerald-900",
  },
  {
    tag: "Retail",
    Icon: ShoppingBag,
    title: "ShopSphere",
    body: "E-commerce platform for a multi-brand retailer. Doubled conversion rate post-launch with a rebuilt checkout flow.",
    metric: "2x conversion",
    bg: "from-sky-950 to-sky-900",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-dark-surface-2">
      <div className="max-w-300 mx-auto px-8">
        <div className="relative flex flex-col gap-3.5 mb-12">
          <Eyebrow>Our work</Eyebrow>
          <h2 className="text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            Selected Work
          </h2>
          <p className="text-[18px] leading-[1.6] text-gray-500 max-w-[640px]">
            Six recent projects across education, healthcare, retail,
            logistics, SaaS, and real estate. Built for production, shipped to
            spec.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[22px]">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="flex justify-center mt-[42px]">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-dark-surface px-8 py-4 text-[14px] font-semibold text-white whitespace-nowrap transition-all duration-180 hover:border-teal-500/40 hover:text-teal-400"
          >
            <span>View all case studies</span>
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <p className="mt-6 text-center text-[12px] italic text-gray-500">
          All work shown with client permission. Some project names anonymized
          for confidentiality.
        </p>
      </div>
    </section>
  );
}


function ProjectCard({
  tag,
  Icon,
  title,
  body,
  metric,
  bg,
}: {
  tag: string;
  Icon: LucideIcon;
  title: string;
  body: string;
  metric: string;
  bg: string;
}) {
  return (
    <article
      className={`group rounded-2xl bg-linear-to-br ${bg} p-7 flex flex-col min-h-[280px] relative overflow-hidden text-white cursor-pointer
        shadow-[0_2px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]
        transition-all duration-[400ms] ease-out
        hover:scale-[1.02]
        hover:shadow-[0_0_0_1.5px_rgba(255,255,255,0.14),0_0_0_4px_rgba(255,255,255,0.04),0_28px_70px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.14)]`}
    >
      {/* Spotlight bloom */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(255,255,255,0.13), transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* Top-edge shimmer */}
      <span
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-out"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-teal-400 text-[12px] font-semibold tracking-[0.04em] mb-3.5">
          <span className="w-7 h-7 rounded-lg bg-white/8 inline-flex items-center justify-center transition-all duration-[400ms] group-hover:bg-white/16 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.1)]">
            <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
          </span>
          <span>{tag}</span>
        </div>

        <h3 className="text-2xl font-bold text-white tracking-[-0.01em] leading-[1.2] mb-2">
          {title}
        </h3>
        <p className="text-sm text-white/65 leading-[1.6] mb-4.5 line-clamp-4 transition-colors duration-[400ms] group-hover:text-white/85">
          {body}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2.5 text-teal-400 text-[14px] font-semibold mt-auto transition-colors duration-[400ms] group-hover:text-teal-300"
        >
          <span>View Project</span>
          <span className="w-7 h-7 rounded-full bg-teal-400/15 inline-flex items-center justify-center transition-all duration-[400ms] group-hover:translate-x-1 group-hover:bg-teal-400/28 group-hover:shadow-[0_0_14px_rgba(43,184,207,0.35)]">
            <ArrowRight size={14} strokeWidth={2} />
          </span>
        </a>
      </div>

      {/* Large faded background icon */}
      <div className="absolute -bottom-8 -right-8 w-48 h-48 text-white opacity-7 group-hover:opacity-16 transition-opacity duration-[400ms] ease-out pointer-events-none">
        <Icon size={192} strokeWidth={0.8} aria-hidden="true" />
      </div>
    </article>
  );
}
