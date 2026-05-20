import {
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  Users,
  MessageSquare,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { Eyebrow } from "./ui";

const REASONS: { Icon: LucideIcon; title: string; body: string }[] = [
  {
    Icon: CheckCircle,
    title: "Experienced Team",
    body: "Specialists across product, engineering and design who have shipped at scale.",
  },
  {
    Icon: Clock,
    title: "On-Time Delivery",
    body: "Honest timelines and steady velocity, with no surprises in the last sprint.",
  },
  {
    Icon: Shield,
    title: "Built-in Security",
    body: "SOC2-ready foundations, code review, and pen-tested releases as default.",
  },
  {
    Icon: TrendingUp,
    title: "Clear Outcomes",
    body: "Every engagement is anchored to outcomes you can show your CFO.",
  },
  {
    Icon: Users,
    title: "Senior by Default",
    body: "No bait-and-switch — the engineers who pitch you are the ones who ship.",
  },
  {
    Icon: MessageSquare,
    title: "Always Reachable",
    body: "A shared channel, named owner, weekly demo. You always know where things stand.",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full py-24 bg-dark-surface-2">
      <div className="max-w-300 mx-auto px-8">
        <div className="flex flex-col items-center text-center gap-3.5 max-w-[720px] mx-auto mb-12">
          <Eyebrow center>Why choose us</Eyebrow>
          <h2 className="text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            Reasons clients <span className="text-teal-400">stay with us</span>.
          </h2>
          <p className="text-[18px] leading-[1.6] text-gray-500">
            A short list of the things we hear most after a year of working
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[22px]">
          {REASONS.map(({ Icon, title, body }, index) => (
            <ReasonCard
              key={title}
              Icon={Icon}
              title={title}
              body={body}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
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
    <div className="group relative overflow-hidden rounded-2xl border border-white/7 bg-linear-to-b from-dark-surface to-[#0A1828] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-teal-500/25 hover:shadow-[0_20px_46px_-16px_rgba(14,158,181,0.18)]">
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-teal-400 to-teal-600 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        aria-hidden="true"
      />
      <span className="absolute right-5 top-5 font-mono text-[12px] text-white/15 transition-colors duration-300 ease-out group-hover:text-teal-500">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex items-start gap-5">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-400 transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-teal-500 group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <div className="pr-8">
          <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-white transition-colors duration-300 ease-out group-hover:text-teal-400">
            {title}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.65] text-gray-500">
            {body}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-white/7 pt-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-500 transition-colors duration-300 ease-out group-hover:text-teal-500">
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        <span>{title}</span>
      </div>
    </div>
  );
}
