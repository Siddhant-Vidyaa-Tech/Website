"use client";

import { useState, useEffect, useMemo, useRef, startTransition, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import Logo from "@/components/ui/Logo";

const serviceGroups = [
  {
    group: "Content & Editorial",
    items: [
      { label: "Curriculum Design", href: "/services/curriculum-design", description: "Standards-aligned frameworks & progressions" },
      { label: "Content Development", href: "/services/content-development", description: "Subject-matter writing & instructional assets" },
      { label: "Editorial & Production", href: "/services/editorial-production", description: "Copyediting, fact-checking & print/digital prep" },
    ],
  },
  {
    group: "Assessment & Quality",
    items: [
      { label: "Custom Assessment Creation", href: "/services/custom-assessment-creation", description: "Validated item banks, TEIs & scoring rubrics" },
      { label: "Quality Assurance", href: "/services/quality-assurance", description: "Pedagogical, functional & regression testing" },
      { label: "Digital Accessibility", href: "/services/digital-accessibility", description: "WCAG 2.2 AA, Section 508 & PDF/UA remediation" },
    ],
  },
  {
    group: "Digital Learning & Media",
    items: [
      { label: "E-Learning Solutions", href: "/services/e-learning-solutions", description: "SCORM/xAPI modules & responsive courseware" },
      { label: "Interactive Content", href: "/services/interactive-content", description: "HTML5 simulations, labs & branching scenarios" },
      { label: "Educational Video", href: "/services/educational-video-production", description: "Animated explainers, voiceover & captions" },
    ],
  },
  {
    group: "Technology & Talent",
    items: [
      { label: "TDX / Content Migration", href: "/services/tdx-migration", description: "Legacy to XML, DITA, HTML5 & EPUB3 pipelines" },
      { label: "IT Solutions", href: "/services/it-solutions", description: "LMS integration, CMS & platform engineering" },
      { label: "Talent & Staffing", href: "/services/talent-staffing", description: "Vetted SMEs, instructional designers & editors" },
    ],
  },
];

type SearchResult = {
  label: string;
  href: string;
  description?: string;
  category: string;
};

const allPages: SearchResult[] = (() => {
  const results: SearchResult[] = [];
  for (const grp of serviceGroups) {
    for (const item of grp.items) {
      results.push({ ...item, category: grp.group });
    }
  }
  for (const item of navigation) {
    if (item.children) {
      for (const child of item.children) {
        if (child.href.startsWith("/industries")) {
          results.push({ label: child.label, href: child.href, description: child.description, category: "Industries" });
        }
      }
    } else {
      results.push({ label: item.label, href: item.href, category: "Pages" });
    }
  }
  results.push({ label: "Case Studies", href: "/case-studies", category: "Pages" });
  results.push({ label: "Contact Us", href: "/contact-us", category: "Pages" });
  return results;
})();

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const accordionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setMobileOpen(false);
      setActiveDropdown(null);
    });
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!activeDropdown || mobileOpen) return;
    const handler = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        dropdownRef.current?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [activeDropdown, mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => searchInputRef.current?.focus(), 350);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      setSearchQuery("");
      setMobileExpanded(null);
    }
  }, [mobileOpen]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return allPages.filter(
      (p) =>
        p.label.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }, [searchQuery, allPages]);

  const toggleAccordion = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    for (const key of Object.keys(accordionRefs.current)) {
      const el = accordionRefs.current[key];
      if (!el) continue;
      const isOpen = mobileExpanded === key || searchQuery.trim() !== "";
      if (isOpen) {
        el.style.maxHeight = `${el.scrollHeight}px`;
      } else {
        el.style.maxHeight = "0px";
      }
    }
  }, [mobileExpanded, searchQuery]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      for (const key of Object.keys(accordionRefs.current)) {
        const el = accordionRefs.current[key];
        if (el && (mobileExpanded === key || searchQuery.trim() !== "")) {
          el.style.maxHeight = `${el.scrollHeight}px`;
        }
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen, mobileExpanded, searchQuery]);

  const handleMobileMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setMobileOpen(false);
      mobileToggleRef.current?.focus();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled])");
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const closeMobile = () => setMobileOpen(false);

  const renderMobileServices = () => {
    if (searchResults) {
      const filtered = searchResults.filter((r) => r.href.startsWith("/services"));
      if (filtered.length === 0) return <p className="px-4 py-3 text-sm text-slate-400">No matching services</p>;
      return filtered.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block py-2.5 px-2 text-sm font-medium text-slate-600 hover:text-[var(--primary)] transition-colors"
          onClick={closeMobile}
        >
          {item.label}
        </Link>
      ));
    }
    return serviceGroups.map((grp) => (
      <div key={grp.group} className="space-y-0.5">
        <p className="px-2 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent)]">
          {grp.group}
        </p>
        {grp.items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block py-2.5 px-2 text-sm font-medium text-slate-600 hover:text-[var(--primary)] transition-colors"
            onClick={closeMobile}
          >
            {item.label}
          </Link>
        ))}
      </div>
    ));
  };

  const renderMobileIndustries = () => {
    const industriesNav = navigation.find((n) => n.label === "Industries");
    if (!industriesNav?.children) return null;
    if (searchResults) {
      const filtered = searchResults.filter((r) => r.href.startsWith("/industries"));
      if (filtered.length === 0) return <p className="px-4 py-3 text-sm text-slate-400">No matching industries</p>;
      return filtered.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block py-2.5 px-2 text-sm font-medium text-slate-600 hover:text-[var(--primary)] transition-colors"
          onClick={closeMobile}
        >
          {item.label}
        </Link>
      ));
    }
    return industriesNav.children.map((child) => (
      <Link
        key={child.href}
        href={child.href}
        className="block py-2.5 px-2 text-sm font-medium text-slate-600 hover:text-[var(--primary)] transition-colors"
        onClick={closeMobile}
      >
        {child.label}
      </Link>
    ));
  };

  const searching = searchQuery.trim() !== "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "header-scrolled border-b border-slate-200/80" : "border-b border-slate-100"
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          <Link
            href="/"
            aria-label="Vidyaa Tech – Home"
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <Logo />
          </Link>

          <nav
            ref={dropdownRef}
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {navigation.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              const isServices = item.label === "What We Do";
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => item.children && setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-150 ${
                        isActive
                          ? "text-[var(--primary)] bg-blue-50/80"
                          : "text-slate-700 hover:text-[var(--primary)] hover:bg-slate-100/80"
                      }`}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180 text-[var(--accent)]" : "text-slate-400"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-150 block ${
                        isActive
                          ? "text-[var(--primary)] bg-blue-50/80"
                          : "text-slate-700 hover:text-[var(--primary)] hover:bg-slate-100/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.children && activeDropdown === item.label && (
                    <div
                      className={`nav-dropdown ${isServices ? "" : "nav-dropdown--compact"}`}
                      role="menu"
                    >
                      {isServices ? (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          {serviceGroups.map((grp) => (
                            <div key={grp.group} className="space-y-0.5">
                              <p className="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent)]">
                                {grp.group}
                              </p>
                              {grp.items.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="nav-dropdown-item"
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span>
                                    <span className="block font-semibold text-sm text-slate-900">
                                      {child.label}
                                    </span>
                                    <span className="block text-xs text-slate-500 mt-0.5 font-normal">
                                      {child.description}
                                    </span>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-1 p-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="nav-dropdown-item"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>
                                <span className="block font-semibold text-sm text-slate-900">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="block text-xs text-slate-500 mt-0.5 font-normal">
                                    {child.description}
                                  </span>
                                )}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                      <div className="mt-2 pt-2.5 px-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/70 -mx-[.85rem] -mb-[.85rem] p-3 rounded-b-[13px]">
                        <span className="text-xs text-slate-500 font-medium">
                          WCAG 2.2 AA compliant delivery at scale
                        </span>
                        <Link
                          href={item.href}
                          className="text-xs font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Explore all {item.label.toLowerCase()} →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-slate-600 hover:text-[var(--primary)] px-3 py-2 transition-colors"
            >
              Case Studies
            </Link>
            <Link href="/contact-us" className="btn btn-primary btn-sm">
              Let&apos;s Talk
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            ref={mobileToggleRef}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-900 transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-slate-900 transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`lg:hidden mobile-drawer ${mobileOpen ? "mobile-drawer--open" : ""}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        onKeyDown={handleMobileMenuKeyDown}
      >
        <div className="mobile-drawer__overlay" onClick={closeMobile} />
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__search">
            <svg
              className="w-5 h-5 text-slate-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search all services & industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
              aria-label="Search navigation"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-slate-400 hover:text-slate-600 flex-shrink-0"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <nav aria-label="Mobile navigation" className="mobile-drawer__nav">
            {searchResults ? (
              <div className="space-y-1">
                {searchResults.length === 0 ? (
                  <p className="px-4 py-6 text-center text-sm text-slate-400">
                    No results for &ldquo;{searchQuery}&rdquo;
                  </p>
                ) : (
                  searchResults.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors"
                      onClick={closeMobile}
                    >
                      <span className="block text-sm font-semibold text-slate-900">{item.label}</span>
                      {item.description && (
                        <span className="block text-xs text-slate-500 mt-0.5">{item.description}</span>
                      )}
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] mt-1">
                        {item.category}
                      </span>
                    </Link>
                  ))
                )}
              </div>
            ) : (
              <div className="space-y-1">
                {/* What We Do - Services accordion */}
                <div>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                    onClick={() => toggleAccordion("What We Do")}
                    aria-expanded={mobileExpanded === "What We Do"}
                  >
                    What We Do
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileExpanded === "What We Do" ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    ref={(el) => { accordionRefs.current["What We Do"] = el; }}
                    className="mobile-accordion"
                  >
                    <div className="ml-4 mt-1 border-l-2 border-slate-200 pl-4 pb-2 space-y-0.5">
                      {renderMobileServices()}
                      <Link
                        href="/services"
                        className="block py-2.5 px-2 text-sm font-bold text-[var(--accent)]"
                        onClick={closeMobile}
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Industries accordion */}
                <div>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                    onClick={() => toggleAccordion("Industries")}
                    aria-expanded={mobileExpanded === "Industries"}
                  >
                    Industries
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileExpanded === "Industries" ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    ref={(el) => { accordionRefs.current["Industries"] = el; }}
                    className="mobile-accordion"
                  >
                    <div className="ml-4 mt-1 border-l-2 border-slate-200 pl-4 pb-2 space-y-0.5">
                      {renderMobileIndustries()}
                      <Link
                        href="/industries"
                        className="block py-2.5 px-2 text-sm font-bold text-[var(--accent)]"
                        onClick={closeMobile}
                      >
                        View all industries →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Simple links */}
                {navigation
                  .filter((item) => !item.children)
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  ))}
                <Link
                  href="/case-studies"
                  className="block px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
                  onClick={closeMobile}
                >
                  Case Studies
                </Link>
              </div>
            )}
          </nav>

          <div className="mobile-drawer__footer">
            <Link href="/contact-us" className="btn btn-primary w-full text-center" onClick={closeMobile}>
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
