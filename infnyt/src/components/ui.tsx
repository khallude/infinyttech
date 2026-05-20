import { ReactNode } from "react";

export function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.12em] uppercase text-teal-400
        after:content-[''] after:inline-block after:w-7 after:h-[1.5px] after:bg-teal-400
        ${center ? "justify-center" : ""}`}
    >
      {children}
    </span>
  );
}

export function PrimaryBtn({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-5 py-2 text-[14px] font-semibold text-white whitespace-nowrap transition-all duration-[180ms] hover:brightness-110 shadow-[0_4px_14px_rgba(14,158,181,0.25)]"
    >
      <span className="text-white">{children}</span>
    </a>
  );
}

export function SecondaryBtn({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-5 py-2 text-[14px] font-semibold text-white whitespace-nowrap transition-all duration-[180ms] hover:border-teal-500/40 hover:bg-white/[0.1]"
    >
      <span>{children}</span>
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

export function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute bottom-6 right-6 w-[140px] opacity-30 pointer-events-none ${className}`}
      viewBox="0 0 140 36"
      fill="none"
      stroke="rgba(43,184,207,0.5)"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M0 18 Q 17.5 0, 35 18 T 70 18 T 105 18 T 140 18" />
    </svg>
  );
}
