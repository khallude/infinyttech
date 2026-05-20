import { Eyebrow } from "./ui";

export default function BlogHero() {
  return (
    <section className="py-14 pb-0 bg-site-bg relative overflow-hidden">
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
          {/* Left */}
          <div>
            <Eyebrow>Writing</Eyebrow>
            <h1 className="mt-4.5 text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
              Thinking out loud<br />on systems and product.
            </h1>
            <p className="mt-5 text-[14.5px] leading-[1.68] text-gray-500 max-w-130">
              Notes from the engineering and design side — on shipping software,
              building teams, and the decisions most write-ups skip.
            </p>
            <a
              href="#articles"
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-teal-400 hover:text-teal-300 transition-colors"
            >
              Browse all articles
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Right: featured article */}
          <div
            className="rounded-2xl overflow-hidden relative"
            style={{
              background:
                "linear-gradient(145deg, #060F1E 0%, #0D2040 55%, #072035 120%)",
              minHeight: 320,
            }}
          >
            {/* Subtle teal glow */}
            <div
              className="pointer-events-none absolute top-0 right-0 w-60 h-60 opacity-25"
              style={{
                background: "radial-gradient(ellipse at 80% 20%, rgba(14,158,181,0.35), transparent 65%)",
              }}
              aria-hidden="true"
            />

            <div className="absolute top-5 left-5 z-10">
              <span className="inline-flex items-center gap-1.5 border border-teal-500/30 bg-teal-500/15 text-teal-400 text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full">
                Featured
              </span>
            </div>

            <div className="relative z-10 p-8 pt-16 max-w-[70%]">
              <div className="flex items-center gap-3 text-teal-400/70 text-[11px] font-medium mb-4">
                <span>Jun 12, 2025</span>
                <span className="w-1 h-1 rounded-full bg-teal-400/50" aria-hidden="true" />
                <span>8 min read</span>
              </div>
              <h2 className="text-[20px] font-bold text-white leading-tight mb-3 tracking-[-0.01em]">
                The Future of AI in Production Engineering
              </h2>
              <p className="text-[13px] text-white/55 leading-[1.65] mb-6">
                How LLMs are changing the way engineers debug, deploy, and design
                systems — and where they still fall short.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-teal-400 hover:text-teal-300 transition-colors"
              >
                Read article
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
