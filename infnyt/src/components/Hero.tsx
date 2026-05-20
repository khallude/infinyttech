import { PrimaryBtn, SecondaryBtn } from "./ui";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-10 pb-20"
      style={{
        background:
          "radial-gradient(70% 60% at 65% 30%, rgba(14,158,181,0.08), transparent 60%), linear-gradient(180deg, #07101E 0%, #060E1C 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[70%] opacity-70"
        style={{
          background:
            "radial-gradient(75% 90% at 86% 100%, rgba(14,158,181,0.22) 0%, rgba(14,158,181,0.09) 38%, rgba(7,16,30,0) 74%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-[1160px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5 lg:gap-4 items-center">
          <div className="flex flex-col justify-center lg:-translate-y-12">
            <h1 className="max-w-[600px] text-[48px] font-extrabold tracking-[-0.03em] leading-[1.1] text-white">
              Engineering partner for{" "}
              <span className="text-teal-400">scaling product teams</span>
            </h1>

            <p className="mt-5 text-[16.5px] leading-[1.55] text-gray-700 max-w-[520px]">
              From early ideas to production systems, we embed with healthcare,
              logistics, and SaaS teams to design and ship ambitious software
              products that scale reliably.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <PrimaryBtn href="#contact">Book a scoping call</PrimaryBtn>
              <SecondaryBtn href="#projects">View case studies</SecondaryBtn>
            </div>
            <p className="mt-3 text-[12px] text-gray-500">
              We respond within one business day.
            </p>

            <div className="mt-7 pt-6 border-t border-white/8">
              <p className="flex items-center gap-x-4 text-[13px] font-medium text-gray-700 whitespace-nowrap">
                <span>10+ production deployments</span>
                <span className="text-teal-400" aria-hidden="true">|</span>
                <span>6-week avg. to production</span>
                <span className="text-teal-400" aria-hidden="true">|</span>
                <span>99.98% uptime</span>
              </p>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 lg:scale-100 origin-top-right">
            <div className="relative rounded-[10px] border border-white/8 bg-dark-surface shadow-[0_22px_54px_-16px_rgba(0,0,0,0.8),0_8px_24px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/7 bg-white/4 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="ml-3 h-7 flex-1 rounded-md bg-white/6 border border-white/8 px-3 text-[12px] font-medium text-gray-500 flex items-center">
                  dashboard.client-project.app/deployments
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-4 bg-dark-surface p-4">
                <div className="rounded-lg border border-white/7 bg-[#0A1828] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                        Deployment status
                      </p>
                      <h2 className="mt-2 text-[22px] font-bold tracking-tight text-white">
                        release-2026.05.13
                      </h2>
                      <p className="mt-1 text-[12px] font-medium text-gray-500">
                        Production rollout · eu-central-1
                      </p>
                    </div>
                    <span className="rounded-md bg-teal-500/15 px-2.5 py-1 text-[12px] font-semibold text-teal-400">
                      Live
                    </span>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2">
                    <div className="rounded-lg border border-white/7 bg-[#112235] px-3 py-2">
                      <p className="text-[14px] font-bold text-white">18ms</p>
                      <p className="mt-1 text-[10px] text-gray-500">p95 latency</p>
                    </div>
                    <div className="rounded-lg border border-white/7 bg-[#112235] px-3 py-2">
                      <p className="text-[14px] font-bold text-white">
                        99.98%
                      </p>
                      <p className="mt-1 text-[10px] text-gray-500">30d uptime</p>
                    </div>
                    <div className="rounded-lg border border-white/7 bg-[#112235] px-3 py-2">
                      <p className="text-[14px] font-bold text-white">0</p>
                      <p className="mt-1 text-[10px] text-gray-500">open incidents</p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-3 border-t border-white/7 pt-6">
                    {["Queued checks", "Build verified", "Traffic shifted"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className="flex items-center justify-between text-[12px]"
                        >
                          <span className="font-medium text-gray-700">{item}</span>
                          <span className="font-mono text-gray-500">
                            14:{32 + index * 2} UTC
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="flex">
                  <div className="min-h-full w-full rounded-lg bg-[#060C18] p-5 text-[12px] leading-6 text-white shadow-brand-md border border-white/5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-semibold text-white">deploy.log</span>
                      <span className="font-mono text-[11px] text-teal-400">14:38 UTC</span>
                    </div>
                    <pre className="mt-4 overflow-hidden font-mono text-[11px] text-white/80">
{`[init] deploy release-2026.05.13
[ok] tests passed       1m 42s
[ok] db migration       v18
[ok] canary 10% -> 50%
[ok] canary 50% -> 100%
[ok] health checks      eu-central-1
[live] payments-api@42.8`}
                      <span className="deploy-cursor">|</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[12px] italic text-gray-500">
              Sample of client work &mdash; anonymized for confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
