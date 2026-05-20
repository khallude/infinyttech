import { type ReactNode } from "react";
import Image from "next/image";
import { Eyebrow } from "./ui";

const TESTIMONIALS = [
  {
    name: "Khalid Sh. Xareed",
    role: "VP Engineering, Northwind",
    quote: (
      <>
        The team moved faster than any vendor we have worked with — and the
        platform they built has scaled through{" "}
        <span className="font-semibold text-teal-400">
          three product launches
        </span>
        .
      </>
    ),
  },
  {
    name: "Mohamed Abdifatah",
    role: "Head of Product, Atlas & Co.",
    quote: (
      <>
        The discovery work alone paid for the engagement. They told us the truth
        about what we were trying to build and helped us{" "}
        <span className="font-semibold text-teal-400">
          cut the scope by half
        </span>
        .
      </>
    ),
  },
  {
    name: "Khalid Mohamud",
    role: "CTO, Flint.io",
    quote: (
      <>
        Senior engineers, clear communication, no theater. We treat them as{" "}
        <span className="font-semibold text-teal-400">
          part of our core team
        </span>{" "}
        and they have earned every bit of that trust.
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-300 mx-auto px-8">
        <div className="flex flex-col gap-3.5 max-w-[720px] mb-10">
          <Eyebrow>What clients say</Eyebrow>
          <h2 className="text-[36px] lg:text-[40px] font-bold tracking-[-0.015em] leading-[1.1] text-white">
            Real teams, <span className="text-teal-400">measurable outcomes</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        <p className="mt-6 text-center text-[12px] italic text-gray-500">
          Some client names anonymized for confidentiality. Full references
          available on request.
        </p>
      </div>
    </section>
  );
}

function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: ReactNode;
}) {
  return (
    <div className="bg-dark-surface border border-white/7 rounded-2xl p-8 pb-7 shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden">
      {/* Large opening quote */}
      <span
        className="absolute top-2.5 left-6 text-[78px] leading-none text-teal-500 font-serif select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Large closing quote — very faint */}
      <span
        className="absolute -bottom-8 right-3.5 text-[130px] leading-none text-teal-500/8 font-serif select-none pointer-events-none"
        aria-hidden="true"
      >
        &rdquo;
      </span>

      <blockquote className="relative z-10 text-[16px] text-gray-700 leading-[1.7] mt-9 mb-4">
        {quote}
      </blockquote>

      <div className="w-8 h-0.5 bg-teal-500 mb-4" aria-hidden="true" />

      <div className="flex items-center gap-3.5 relative z-10">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
          <Image
            src="/khalid.jpg"
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <div className="text-[15px] font-semibold text-white">{name}</div>
          <div className="text-[13px] text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
}
