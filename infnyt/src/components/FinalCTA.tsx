import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24" id="contact">
      <div className="max-w-300 mx-auto px-8">
        <div
          className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl p-12 px-14 lg:grid-cols-[1.4fr_0.6fr]"
          style={{
            background: "linear-gradient(135deg, #050F1C 0%, #0C2040 50%, #061428 100%)",
          }}
        >
          {/* Subtle teal glow top-right */}
          <div
            className="pointer-events-none absolute top-0 right-0 w-100 h-75 opacity-30"
            style={{
              background: "radial-gradient(ellipse at 80% 20%, rgba(14,158,181,0.25), transparent 65%)",
            }}
            aria-hidden="true"
          />

          {/* Left: copy */}
          <div className="relative z-10 max-w-[720px]">
            <span className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.12em] uppercase text-teal-400 after:content-[''] after:inline-block after:w-7 after:h-[1.5px] after:bg-teal-400">
              Let&rsquo;s talk
            </span>

            <h2 className="mt-3.5 text-[28px] lg:text-[32px] font-bold text-white leading-[1.15] tracking-[-0.015em]">
              Bring us the part of your roadmap that&rsquo;s stuck.
            </h2>
            <p className="mt-2.5 text-[15px] text-white/65">
              A 30-minute call. We&rsquo;ll tell you whether we&rsquo;re the
              right team &mdash; or who else to call if we&rsquo;re not.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="relative z-10 flex flex-col items-start lg:items-end">
            <div className="inline-flex flex-col items-center">
              <a
                href="#contact"
                className="group/cta inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-teal-600 to-teal-400 px-8 py-3 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(14,158,181,0.3)] transition-all duration-200 ease-out hover:brightness-110 hover:shadow-[0_14px_32px_rgba(14,158,181,0.45)]"
              >
                <span className="text-white">Book a scoping call</span>
                <ArrowRight
                  className="text-white transition-transform duration-200 ease-out group-hover/cta:translate-x-1"
                  size={18}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </a>

              <p className="mt-3 text-[12px] text-white/50">
                We respond within one business day.
              </p>
            </div>
          </div>

          {/* Decorative wave */}
          <svg
            className="absolute -right-10 -bottom-7.5 w-70 opacity-15 pointer-events-none"
            viewBox="0 0 280 60"
            fill="none"
            stroke="rgba(43,184,207,0.8)"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M0 30 Q 35 0, 70 30 T 140 30 T 210 30 T 280 30" />
          </svg>
        </div>
      </div>
    </section>
  );
}
