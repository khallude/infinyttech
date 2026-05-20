"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";

const FILTERS = [
  "All Articles",
  "Engineering",
  "Product Design",
  "AI & Automation",
  "Infrastructure",
  "Strategy",
];

const ARTICLES = [
  {
    id: 1,
    category: "Engineering",
    date: "May 28, 2025",
    readTime: "6 min",
    title: "Building Scalable Microservices with Next.js and Node",
    body: "A practical guide to breaking monoliths into maintainable, independently deployable services without sacrificing developer experience.",
    author: "Khalid Sh. Xareed",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=75",
    imageAlt: "Code on screen",
  },
  {
    id: 2,
    category: "Product Design",
    date: "May 14, 2025",
    readTime: "5 min",
    title: "Design Systems That Scale: Lessons from the Trenches",
    body: "How we built a token-based design system used across 12 products and what we wish we had done differently on day one.",
    author: "Khalid Mohamud",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=75",
    imageAlt: "Design system components",
  },
  {
    id: 3,
    category: "Infrastructure",
    date: "Apr 30, 2025",
    readTime: "7 min",
    title: "Cloud-Native Deployment: From Zero to Production in 30 Minutes",
    body: "Container orchestration, CI/CD pipelines, and infrastructure-as-code patterns that let small teams ship with confidence.",
    author: "Khalid Sh. Xareed",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=75",
    imageAlt: "Server infrastructure",
  },
  {
    id: 4,
    category: "Engineering",
    date: "Apr 18, 2025",
    readTime: "5 min",
    title: "React Native vs Flutter: A 2025 Decision Framework",
    body: "We compare both ecosystems across six real client projects to help you pick the right stack for your next mobile build.",
    author: "Khalid Mohamud",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=75",
    imageAlt: "Mobile development",
  },
  {
    id: 5,
    category: "Strategy",
    date: "Apr 3, 2025",
    readTime: "4 min",
    title: "How to Evaluate a Software Partner (Before You Sign)",
    body: "The questions most buyers forget to ask — and the red flags that look like green flags until you're three sprints in.",
    author: "Abid Yusuf",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=75",
    imageAlt: "Business meeting",
  },
  {
    id: 6,
    category: "AI & Automation",
    date: "Mar 20, 2025",
    readTime: "9 min",
    title: "AI Automation ROI: A Framework for Non-Technical Leaders",
    body: "Concrete ways to measure the business value of automation investments without getting lost in technical jargon or vendor promises.",
    author: "Mohamed Abdifatah",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=75",
    imageAlt: "Data analytics dashboard",
  },
];

const POPULAR_TOPICS = [
  { label: "Artificial Intelligence", count: 12 },
  { label: "Engineering",             count: 18 },
  { label: "Infrastructure & DevOps", count: 9  },
  { label: "Product Design",          count: 7  },
  { label: "Strategy",                count: 5  },
];

const ARTICLES_PER_PAGE = 3;

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");

  const filtered = ARTICLES.filter((a) => {
    const matchesFilter =
      activeFilter === "All Articles" || a.category === activeFilter;
    const matchesSearch =
      search.trim() === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.body.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (safePage - 1) * ARTICLES_PER_PAGE,
    safePage * ARTICLES_PER_PAGE
  );

  function changePage(n: number) {
    setPage(Math.min(Math.max(1, n), totalPages));
    document
      .getElementById("articles")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleFilterClick(f: string) {
    setActiveFilter(f);
    setPage(1);
  }

  return (
    <section id="articles" className="py-16 bg-site-bg">
      <div className="max-w-300 mx-auto px-8">
        {/* Filters + search */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => handleFilterClick(f)}
                className={`px-4 py-1.5 rounded-full text-[12.5px] font-semibold transition-all duration-150 ${
                  activeFilter === f
                    ? "bg-linear-to-r from-teal-600 to-teal-500 text-white shadow-[0_4px_14px_rgba(14,158,181,0.25)]"
                    : "bg-dark-surface text-gray-500 border border-white/7 hover:border-teal-500/30 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative shrink-0">
            <Search
              size={13}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="pl-9 pr-4 py-2 rounded-full border border-white/7 bg-dark-surface text-[13px] text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/40 w-52.5 transition-colors"
            />
          </div>
        </div>

        {/* Grid + sidebar */}
        <div className="flex gap-8 items-start">
          <div className="flex-1 min-w-0">
            {visible.length === 0 ? (
              <p className="text-[14px] text-gray-500">No articles match your search.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {visible.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => changePage(safePage - 1)}
                  disabled={safePage === 1}
                  className="w-9 h-9 rounded-full border border-white/7 bg-dark-surface flex items-center justify-center text-gray-500 hover:border-teal-500/30 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={15} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => changePage(n)}
                    className={`w-9 h-9 rounded-full text-[13px] font-semibold transition-all duration-150 ${
                      n === safePage
                        ? "bg-linear-to-r from-teal-600 to-teal-500 text-white"
                        : "border border-white/7 bg-dark-surface text-gray-500 hover:border-teal-500/30 hover:text-white"
                    }`}
                    aria-current={n === safePage ? "page" : undefined}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => changePage(safePage + 1)}
                  disabled={safePage === totalPages}
                  className="w-9 h-9 rounded-full border border-white/7 bg-dark-surface flex items-center justify-center text-gray-500 hover:border-teal-500/30 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="hidden xl:flex flex-col gap-5 w-[264px] shrink-0">
            {/* Newsletter */}
            <div className="bg-linear-to-b from-dark-surface to-[#0A1828] rounded-2xl border border-white/7 shadow-[0_2px_8px_rgba(0,0,0,0.35)] p-6 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-0.5 w-full"
                style={{ background: "linear-gradient(90deg, var(--color-teal-400), var(--color-teal-600))" }}
                aria-hidden="true"
              />
              <h3 className="text-[15px] font-semibold text-white mb-1 tracking-[-0.01em]">
                Stay in the loop
              </h3>
              <p className="text-[12.5px] text-gray-500 leading-[1.6] mb-4">
                New articles to your inbox, no noise.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-white/7 bg-site-bg text-[13px] text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/40 transition-colors"
                />
                <button
                  onClick={() => setEmail("")}
                  className="w-9 h-9 shrink-0 bg-linear-to-r from-teal-600 to-teal-500 text-white rounded-full flex items-center justify-center hover:brightness-110 transition-all"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Popular topics */}
            <div className="bg-linear-to-b from-dark-surface to-[#0A1828] rounded-2xl border border-white/7 shadow-[0_2px_8px_rgba(0,0,0,0.35)] p-6">
              <h3 className="text-[15px] font-semibold text-white mb-4 tracking-[-0.01em]">
                Popular topics
              </h3>
              <ul className="flex flex-col gap-3">
                {POPULAR_TOPICS.map(({ label, count }) => (
                  <li key={label}>
                    <button
                      onClick={() => {
                        const match = FILTERS.find((f) =>
                          f.toLowerCase().includes(label.split(" ")[0].toLowerCase())
                        );
                        if (match) handleFilterClick(match);
                      }}
                      className="flex items-center justify-between w-full group"
                    >
                      <span className="flex items-center gap-2 text-[13px] text-gray-500 font-medium group-hover:text-teal-400 transition-colors">
                        <Tag size={11} className="text-teal-500 shrink-0" aria-hidden="true" />
                        {label}
                      </span>
                      <span className="text-[11px] font-semibold text-teal-400 bg-teal-500/15 px-2 py-0.5 rounded-full">
                        {count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
}: {
  article: (typeof ARTICLES)[number];
}) {
  const { category, date, readTime, title, body, author, image, imageAlt } =
    article;
  return (
    <article className="group relative flex flex-col bg-linear-to-b from-dark-surface to-[#0A1828] rounded-2xl border border-white/7 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-teal-500/25 hover:shadow-[0_20px_50px_-10px_rgba(14,158,181,0.28)]">
      {/* Top teal line */}
      <div
        className="absolute left-0 top-0 h-0.5 w-0 transition-all duration-300 ease-out group-hover:w-full z-10"
        style={{
          background:
            "linear-gradient(90deg, var(--color-teal-400), var(--color-teal-600))",
        }}
        aria-hidden="true"
      />

      {/* Image */}
      <div className="relative h-[172px] overflow-hidden shrink-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 340px"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center bg-navy-900/90 backdrop-blur-sm text-white text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 text-[11.5px] text-gray-500 mb-3">
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-white/15" aria-hidden="true" />
          <span>{readTime} read</span>
        </div>
        <h3 className="text-[15px] font-semibold text-white leading-[1.35] mb-2 tracking-[-0.01em] transition-colors duration-300 group-hover:text-teal-400">
          {title}
        </h3>
        <p className="text-[12.5px] text-gray-500 leading-[1.65] flex-1">{body}</p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/7">
          <span className="text-[12px] font-medium text-gray-500">{author}</span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            Read
            <ArrowRight size={12} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
