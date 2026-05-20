"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Field = "name" | "email" | "company" | "service" | "message";

const SERVICES = [
  "Software Development",
  "Product Design",
  "AI & Automation",
  "Infrastructure & DevOps",
  "Other",
];

const INPUT =
  "px-4 py-2.5 rounded-lg border border-white/7 bg-site-bg text-[13.5px] text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/15 transition-colors w-full";

const LABEL = "text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500";

export default function ContactForm() {
  const [fields, setFields] = useState<Record<Field, string>>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function set(f: Field) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => setFields((prev) => ({ ...prev, [f]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-500/15 border border-teal-500/30 text-teal-400 text-lg">
          ✓
        </div>
        <h3 className="text-[20px] font-bold text-white tracking-[-0.01em]">
          Message sent.
        </h3>
        <p className="text-[14px] text-gray-500 max-w-85 leading-[1.65]">
          We&rsquo;ll get back to you within one business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFields({
              name: "",
              email: "",
              company: "",
              service: "",
              message: "",
            });
          }}
          className="mt-1 text-[13px] font-semibold text-teal-400 hover:text-teal-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className={LABEL}>
            Full name <span className="text-teal-400 normal-case tracking-normal">*</span>
          </span>
          <input
            required
            type="text"
            placeholder="Jane Smith"
            value={fields.name}
            onChange={set("name")}
            className={INPUT}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={LABEL}>
            Work email <span className="text-teal-400 normal-case tracking-normal">*</span>
          </span>
          <input
            required
            type="email"
            placeholder="jane@company.com"
            value={fields.email}
            onChange={set("email")}
            className={INPUT}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="flex flex-col gap-2">
          <span className={LABEL}>Company</span>
          <input
            type="text"
            placeholder="Acme Inc."
            value={fields.company}
            onChange={set("company")}
            className={INPUT}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={LABEL}>Area of interest</span>
          <select
            value={fields.service}
            onChange={set("service")}
            className={`${INPUT} scheme-dark`}
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={LABEL}>
          Tell us about your project{" "}
          <span className="text-teal-400 normal-case tracking-normal">*</span>
        </span>
        <textarea
          required
          rows={5}
          placeholder="Describe what you're building, where you're stuck, or what outcome you're aiming for…"
          value={fields.message}
          onChange={set("message")}
          className={`${INPUT} resize-none leading-[1.65]`}
        />
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-linear-to-r from-teal-600 to-teal-500 pl-6 pr-2 py-2 text-[14px] font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px shadow-[0_8px_24px_rgba(14,158,181,0.25)] hover:shadow-[0_12px_28px_rgba(14,158,181,0.35)]"
      >
        <span>Send message</span>
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white"
          aria-hidden="true"
        >
          <ArrowRight size={14} strokeWidth={2.2} />
        </span>
      </button>
    </form>
  );
}
