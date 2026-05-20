const COMPANY_LINKS = ["About us", "Careers", "Our Work", "Blog"];
const SERVICE_LINKS = [
  "Software Development",
  "Product Design",
  "AI & Automation",
  "Infrastructure & DevOps",
];
const CONTACT_ITEMS = [
  "hello@infinyttech.com",
  "+252 612912629",
  "Mogadishu, Nairobi",
];
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/infinyttech",
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70 pt-16 pb-7">
      <div className="max-w-300 mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] gap-9">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 text-[22px] font-extrabold text-white tracking-[-0.01em]">
              <svg
                className="h-6 w-9 shrink-0 text-white"
                viewBox="0 0 42 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M21 12C15.8 4.5 9.4 2.9 5.2 6.1C1.1 9.2 2.6 16.7 7.2 18.1C12.5 19.8 16.7 14.9 21 12ZM21 12C26.2 4.5 32.6 2.9 36.8 6.1C40.9 9.2 39.4 16.7 34.8 18.1C29.5 19.8 25.3 14.9 21 12Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                infinyt<span className="text-teal-400">Tech</span>
              </span>
            </div>
            <p className="mt-3.5 text-[13.5px] leading-[1.6] text-white/50 max-w-70">
              An engineering partner for product teams. Built in Mogadishu and
              Nairobi.
            </p>
          </div>

          <FooterCol heading="Company" links={COMPANY_LINKS} />
          <FooterCol heading="Services" links={SERVICE_LINKS} />
          <ContactCol />
        </div>

        <div className="mt-12 pt-5.5 border-t border-white/8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[12.5px] text-white/40">
          <span>&copy; {new Date().getFullYear()} infinytTech. All rights reserved.</span>
          <span>Privacy &middot; Terms &middot; Security</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: readonly string[];
}) {
  return (
    <div>
      <h4 className="text-[13px] font-semibold text-white tracking-[0.06em] uppercase mb-3.5">
        {heading}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[13.5px] text-white/55 hover:text-teal-400 transition-colors duration-180"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCol() {
  return (
    <div>
      <h4 className="text-[13px] font-semibold text-white tracking-[0.06em] uppercase mb-3.5">
        Contact
      </h4>
      <ul className="flex flex-col gap-2.5">
        {CONTACT_ITEMS.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[13.5px] text-white/55 hover:text-teal-400 transition-colors duration-180"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-4">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-5 w-5 items-center justify-center text-white/40 transition-colors duration-180 hover:text-teal-400"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="text-[20px] font-bold leading-none tracking-[-0.04em]"
              aria-hidden="true"
            >
              in
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
