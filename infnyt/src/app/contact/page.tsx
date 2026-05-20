import type { Metadata } from "next";
import { Mail, Clock, ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — InfinytTech",
  description:
    "Talk to the engineers building your product. A 30-minute call, no pitch.",
};

const SIGNALS = [
  { label: "Typical response",    value: "Within one business day" },
  { label: "First call",          value: "30 min — no pitch"       },
  { label: "Engagement start",    value: "Within 2 weeks of scoping" },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden py-16 pb-24 bg-site-bg">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-90 w-[70%] opacity-60"
        style={{
          background:
            "radial-gradient(75% 90% at 14% 100%, rgba(14,158,181,0.12) 0%, rgba(14,158,181,0.05) 38%, rgba(7,16,30,0) 74%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-300 mx-auto px-8">
        {/* Heading */}
        <div className="max-w-145 mb-14">
          <Eyebrow>Contact us</Eyebrow>
          <h1 className="mt-4.5 text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            Tell us what<br />you&apos;re building.
          </h1>
          <p className="mt-5 text-[14.5px] leading-[1.68] text-gray-500 max-w-130">
            Bring us the part of your roadmap that&apos;s stuck. A 30-minute call —
            we&apos;ll tell you whether we&apos;re the right team, or point you toward who is.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Left: form */}
          <div className="bg-linear-to-b from-dark-surface to-[#0A1828] rounded-2xl border border-white/7 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.35)] relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-0.5 w-full"
              style={{ background: "linear-gradient(90deg, var(--color-teal-400), var(--color-teal-600))" }}
              aria-hidden="true"
            />
            <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-white mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 h-full">
            {/* Signal strip cards */}
            {SIGNALS.map(({ label, value }) => (
              <div
                key={label}
                className="relative overflow-hidden flex items-center justify-between bg-linear-to-b from-dark-surface to-[#0A1828] rounded-xl border border-white/7 shadow-[0_2px_8px_rgba(0,0,0,0.3)] px-5 py-4"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.75 rounded-l-xl bg-teal-500/40" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                  {label}
                </span>
                <span className="text-[13.5px] font-semibold text-white">{value}</span>
              </div>
            ))}

            {/* Contact details */}
            <div className="relative overflow-hidden bg-linear-to-b from-dark-surface to-[#0A1828] rounded-xl border border-white/7 shadow-[0_2px_8px_rgba(0,0,0,0.3)] p-5 flex flex-col gap-4">
              <div
                className="absolute left-0 top-0 h-0.5 w-full"
                style={{ background: "linear-gradient(90deg, var(--color-teal-400), var(--color-teal-600))" }}
                aria-hidden="true"
              />
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-teal-400 shadow-inner">
                  <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:hello@infinyttech.com"
                    className="text-[13.5px] font-medium text-white hover:text-teal-400 transition-colors"
                  >
                    hello@infinyttech.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-teal-400 shadow-inner">
                  <Clock size={15} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-0.5">
                    Hours
                  </p>
                  <span className="text-[13.5px] font-medium text-white">
                    Sat – Fri, 9 AM – 6 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Dark accent card */}
            <div
              className="rounded-2xl p-7 relative overflow-hidden flex-1 flex flex-col justify-center"
              style={{
                background:
                  "linear-gradient(145deg, #0A1B2E 0%, #0E2A44 55%, #054E5F 120%)",
              }}
            >
              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-400 mb-3">
                  Free discovery call
                </p>
                <h3 className="text-[18px] font-bold text-white leading-[1.25] mb-2 tracking-[-0.01em]">
                  Not sure where to start?
                </h3>
                <p className="text-[13px] text-white/60 leading-[1.65] mb-5">
                  30 minutes. No pitch — just an honest conversation about your
                  goals and whether we&apos;re the right fit.
                </p>
                <a
                  href="mailto:hello@infinyttech.com"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Book via email
                  <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                </a>
              </div>
              <svg
                className="absolute right-[-20px] bottom-[-20px] w-[180px] opacity-[0.07] pointer-events-none"
                viewBox="0 0 180 50"
                fill="none"
                stroke="#267D8E"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M0 25 Q 22.5 0, 45 25 T 90 25 T 135 25 T 180 25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
