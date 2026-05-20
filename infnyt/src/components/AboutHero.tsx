import { Eyebrow } from "./ui";

const PRINCIPLES = [
  "Ship to production, not demos.",
  "Tell clients the truth, even if it costs the deal.",
  "Write code the next team won't hate inheriting.",
];

export default function AboutHero() {
  return (
    <section className="py-14 pb-20 relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-90 w-[70%] opacity-60"
        style={{
          background:
            "radial-gradient(75% 90% at 14% 100%, rgba(14,158,181,0.12) 0%, rgba(14,158,181,0.05) 38%, rgba(7,16,30,0) 74%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-300 mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.1fr] gap-14 items-center">
          <div>
            <Eyebrow>About us</Eyebrow>

            <h1 className="mt-4.5 text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white max-w-145">
              We&apos;re the team<br />you wished was in-house.
            </h1>

            <div className="flex flex-col gap-3.5 mt-6 mb-6">
              <span className="text-teal-400 text-[22px] font-semibold tracking-[-0.005em]">
                Production systems. Senior engineers. One accountable team.
              </span>
              <div className="w-22.5 h-0.5 bg-white/10" aria-hidden="true" />
            </div>

            <p className="text-[14.5px] leading-[1.68] text-gray-700 mb-4 max-w-130">
              InfinytTech is a software engineering firm built by senior
              engineers and product designers who have shipped production
              systems across teams of every size. We embed with product teams as
              the senior engineers and designers needed to ship the hardest
              parts of the roadmap.
            </p>
            <p className="text-[14.5px] leading-[1.68] text-gray-700 mb-5 max-w-130">
              We don&apos;t outsource, and we don&apos;t subcontract. The senior
              engineer who scopes your project is the one writing code on day
              one. From discovery to launch, one accountable team owns the work
              and works in your timezone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-160 mb-5">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={principle}
                  className="relative flex flex-col rounded-xl border border-white/7 bg-dark-surface px-5 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.35)] overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0.75 rounded-l-xl bg-teal-500/40" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-400/70 mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[12px] font-medium leading-normal tracking-[-0.01em] text-gray-500">
                    {principle}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[14.5px] leading-[1.68] text-gray-700 max-w-130">
              These aren&apos;t slogans &mdash; they&apos;re what we hire for
              and how we work.
            </p>
          </div>

          <WorkflowVisual />
        </div>
      </div>
    </section>
  );
}

function WorkflowVisual() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/workflow-visual.svg"
      alt="Deployment pipeline, sprint board, and terminal logs"
      className="w-full h-auto rotate-[-4deg] scale-[1.04] drop-shadow-[0_32px_48px_rgba(0,0,0,0.5)]"
      width={560}
      height={440}
    />
  );
}
