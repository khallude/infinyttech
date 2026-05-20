import {
  Building2,
  GraduationCap,
  Heart,
  ShoppingBag,
  Car,
  BarChart3,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Eyebrow } from "./ui";

const INDUSTRIES: { Icon: LucideIcon; title: string; meta: string }[] = [
  { Icon: GraduationCap, title: "Education", meta: "Learning platforms" },
  { Icon: Heart,       title: "Healthcare",  meta: "HIPAA, EHR" },
  { Icon: ShoppingBag, title: "Retail",      meta: "DTC, commerce" },
  { Icon: Car,         title: "Logistics",   meta: "Fleet, supply chain" },
  { Icon: BarChart3,   title: "SaaS",        meta: "B2B platforms" },
  { Icon: Building2,   title: "Real Estate", meta: "Property management" },
];

export default function Industries() {
  return (
    <section className="py-24 bg-site-bg">
      <div className="max-w-300 mx-auto px-8">
        <div className="flex flex-col gap-3.5 max-w-[720px] mb-10">
          <Eyebrow>Industries we serve</Eyebrow>
          <h2 className="text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            From education to <span className="text-teal-400">healthcare</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-[18px]">
          {INDUSTRIES.map(({ Icon, title, meta }) => (
            <IndustryCard key={title} Icon={Icon} title={title} meta={meta} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({
  Icon,
  title,
  meta,
}: {
  Icon: LucideIcon;
  title: string;
  meta: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/7 bg-linear-to-b from-dark-surface to-dark-surface-2 p-6 text-left shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:scale-[1.02] hover:border-teal-500/25 hover:shadow-[0_0_0_1px_rgba(43,184,207,0.12),0_20px_50px_rgba(0,0,0,0.55),0_0_30px_rgba(14,158,181,0.06)]">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-400 transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500">
        <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
      </div>
      <div className="mt-4 text-[16px] font-semibold text-white">{title}</div>
      <div className="mt-1 text-[12px] text-gray-500">{meta}</div>
    </div>
  );
}
