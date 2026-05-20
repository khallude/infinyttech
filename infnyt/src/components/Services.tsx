import { Code2, Box, Brain, Layout, ArrowRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Eyebrow, Wave } from "./ui";

const SERVICES: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: Code2,
    title: "Software Development",
    body: "Custom backends and platforms for product teams shipping at scale. Built to be the system your engineers wish they inherited.",
  },
  {
    Icon: Layout,
    title: "Product Design",
    body: "Research, workflows, and interface systems for products with real operational complexity.",
  },
  {
    Icon: Brain,
    title: "AI & Automation",
    body: "Production-ready AI workflows and data systems designed around real operational use.",
  },
  {
    Icon: Box,
    title: "Infrastructure & DevOps",
    body: "Deployment infrastructure, observability, and cloud systems built for reliable production software.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 bg-site-bg">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[70%] opacity-70"
        style={{
          background:
            "radial-gradient(75% 90% at 14% 100%, rgba(14,158,181,0.1) 0%, rgba(14,158,181,0.05) 38%, rgba(7,16,30,0) 74%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-300 mx-auto px-8">
        <div className="flex flex-col gap-3.5 max-w-[720px] mb-12">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            Four core practices.
            <br />
            One accountable team.
          </h2>
          <p className="text-[18px] leading-[1.6] text-gray-500 max-w-[560px]">
            We pick up the part of your roadmap that&apos;s hardest to staff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[22px]">
          {SERVICES.map(({ Icon, title, body }, index) => (
            <ServiceCard
              key={title}
              Icon={Icon}
              title={title}
              body={body}
              index={index}
            />
          ))}
        </div>

        <ServicesCTA />
      </div>
      <Wave className="left-6 right-auto" />
    </section>
  );
}

function ServicesCTA() {
  return (
    <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/7 bg-linear-to-r from-dark-surface via-[#0F2035] to-[#112238] px-8 py-8 shadow-brand-md">
      <div
        className="absolute left-5 top-5 grid grid-cols-5 gap-3 opacity-20"
        aria-hidden="true"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="h-1 w-1 rounded-full bg-teal-400" />
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[210px_1px_1fr_auto]">
        <div className="flex justify-center lg:justify-start">
          <div className="h-16 w-[116px] overflow-hidden">
            <Image
              src="/logo.png"
              alt="InfinytTech"
              width={805}
              height={135}
              className="h-16 w-auto max-w-none"
            />
          </div>
        </div>

        <div className="hidden h-[62px] w-px bg-teal-400/30 lg:block" />

        <div>
          <h3 className="text-[26px] font-bold leading-tight tracking-[-0.02em] text-white lg:text-[30px]">
            Ready to Grow Your Business{" "}
            <span className="text-teal-400">Digitally?</span>
          </h3>
          <p className="mt-2 text-[15px] font-medium text-gray-700">
            Let&apos;s build smart solutions that drive real results.
          </p>
        </div>

        <div className="flex items-center justify-start lg:justify-end">
          <a
            href="/contact"
            className="group/cta inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-teal-600 to-teal-400 px-8 py-3 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(14,158,181,0.28)] transition-all duration-200 ease-out hover:brightness-110 hover:shadow-[0_14px_32px_rgba(14,158,181,0.38)]"
          >
            <span className="text-white">Let&apos;s Talk</span>
            <ArrowRight
              className="text-white transition-transform duration-200 ease-out group-hover/cta:translate-x-1"
              size={18}
              strokeWidth={2.2}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  Icon,
  title,
  body,
  index,
}: {
  Icon: LucideIcon;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <a
      href="/contact"
      className="group block bg-linear-to-b from-dark-surface to-dark-surface-2 hover:to-teal-500/5 focus-visible:to-teal-500/5 rounded-2xl border border-white/7 hover:border-teal-500/25 focus-visible:border-teal-500/25 p-7 pb-[22px] shadow-sm hover:shadow-[0_20px_50px_-10px_rgba(14,158,181,0.3)] focus-visible:shadow-[0_20px_50px_-10px_rgba(14,158,181,0.3)] relative min-h-[220px] transition-all duration-300 ease-out hover:-translate-y-2 focus-visible:-translate-y-2 cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-teal-500/30"
    >
      <div
        className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-300 ease-out group-hover:w-full group-focus-visible:w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-teal-400), var(--color-teal-600))",
        }}
        aria-hidden="true"
      />
      <span className="absolute right-4 top-4 font-mono text-[12px] text-white/20 transition-colors duration-300 ease-out group-hover:text-teal-500 group-focus-visible:text-teal-500">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-400 shadow-inner mb-[18px] transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-teal-500 group-hover:text-white group-focus-visible:scale-105 group-focus-visible:bg-teal-500 group-focus-visible:text-white">
        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <h3 className="text-[20px] font-semibold text-white mb-2 transition-colors duration-300 ease-out group-hover:text-teal-400 group-focus-visible:text-teal-400">
        {title}
      </h3>
      <p className="text-[13.5px] text-gray-500 leading-[1.6] pr-9">{body}</p>

      <div
        className="absolute right-[18px] bottom-[18px] w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-teal-400 transition-all duration-300 ease-out group-hover:-rotate-45 group-hover:border-teal-500 group-hover:bg-teal-500 group-hover:text-white group-focus-visible:-rotate-45 group-focus-visible:border-teal-500 group-focus-visible:bg-teal-500 group-focus-visible:text-white"
        aria-hidden="true"
      >
        <ArrowRight size={14} strokeWidth={2} />
      </div>
    </a>
  );
}
