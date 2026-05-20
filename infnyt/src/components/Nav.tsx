"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    const handleHashChange = () => setActiveHash(window.location.hash);

    handleScroll();
    handleHashChange();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && activeHash === href;
    }
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-dark-surface-2/90 border-b border-white/7 shadow-(--shadow-nav)"
          : "bg-site-bg/60 border-b border-transparent"
      }`}
    >
      <div className="max-w-300 mx-auto px-8">
        <nav className="h-20.5 flex items-center gap-5" aria-label="Main navigation">
          <Link href="/" className="shrink-0" aria-label="InfinytTech home">
            <Image
              src="/logo.png"
              alt="InfinytTech"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-5">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`relative flex items-center py-2 text-[13.5px] font-medium transition-colors duration-300 hover:text-white ${
                  isActive(href)
                    ? "font-bold text-teal-400"
                    : scrolled ? "text-white/60" : "text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-teal-600 to-teal-500 px-4.5 py-1.5 text-[13.5px] font-semibold text-white whitespace-nowrap transition-all duration-180 hover:brightness-110 shadow-[0_4px_14px_rgba(14,158,181,0.22)]"
          >
            <span className="text-white">Book a call</span>
          </a>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/8 text-white transition-colors hover:bg-white/12"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 bg-dark-surface rounded-2xl p-6 border border-white/7 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`text-[14px] transition-colors hover:text-white ${
                    isActive(href)
                      ? "font-bold text-teal-400"
                      : "font-medium text-white/70"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="/contact"
                className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-linear-to-r from-teal-600 to-teal-500 px-5 py-2 text-[14px] font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                <span className="text-white">Book a call</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
