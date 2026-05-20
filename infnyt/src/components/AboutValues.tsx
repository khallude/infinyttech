import { Zap, Shield, Users, TrendingUp } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Eyebrow } from "./ui";

const VALUES: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: Zap,
    title: "Move with intent",
    body: "We pick the problem worth solving, scope honestly, and ship the smallest thing that proves the bet.",
  },
  {
    Icon: Shield,
    title: "Earn trust quietly",
    body: "Senior engineers, predictable timelines, clean handoffs. No theater — just steady velocity you can plan around.",
  },
  {
    Icon: Users,
    title: "One accountable team",
    body: "The people who pitch you are the people who ship. No bait-and-switch, no offshore swap mid-engagement.",
  },
  {
    Icon: TrendingUp,
    title: "Outcomes over output",
    body: "Every engagement is anchored to a metric you can defend. We measure what changes for your customers, not lines of code.",
  },
];

export default function AboutValues() {
  return (
    <section className="py-24 bg-site-bg">
      <div className="max-w-300 mx-auto px-8">
        <div className="flex flex-col items-center text-center gap-3.5 max-w-180 mx-auto mb-12">
          <Eyebrow center>What we stand for</Eyebrow>
          <h2 className="text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            Four principles that{" "}
            <span className="text-teal-400">shape every project</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5.5">
          {VALUES.map(({ Icon, title, body }, i) => (
            <ValueCard key={title} Icon={Icon} title={title} body={body} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
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
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="bg-linear-to-b from-dark-surface to-[#0A1828] rounded-2xl border border-white/7 p-7 pb-5.5 shadow-[0_2px_8px_rgba(0,0,0,0.4)] relative min-h-55 overflow-hidden flex flex-col">
      <div
        className="absolute left-0 top-0 h-0.5 w-full"
        style={{ background: "linear-gradient(90deg, var(--color-teal-400), var(--color-teal-600))" }}
        aria-hidden="true"
      />

      <span className="absolute right-4 top-4 font-mono text-[12px] text-white/15">
        {num}
      </span>

      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-400 mb-4.5">
        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <h3 className="text-[20px] font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-[13.5px] text-gray-500 leading-[1.6]">{body}</p>
    </div>
  );
}
