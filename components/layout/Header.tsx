"use client";

import { useState, useEffect, useRef, startTransition, type KeyboardEvent } from "react";
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

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
      mobileMenuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMobileMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setMobileOpen(false);
      mobileToggleRef.current?.focus();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
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
                        <div className="grid grid-cols-2 gap-4 p-2">
                          {serviceGroups.map((grp) => (
                            <div key={grp.group} className="space-y-1">
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
                      <div className="mt-2 pt-2.5 px-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/70 -mx-4 -mb-4 p-3 rounded-b-[19px]">
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
        className={`lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        onKeyDown={handleMobileMenuKeyDown}
      >
        <nav aria-label="Mobile navigation" className="container py-6 space-y-1">
          {navigation.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === item.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 px-2 text-sm font-medium text-slate-600 hover:text-[var(--primary)] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                      <Link
                        href={item.href}
                        className="block py-2 px-2 text-sm font-bold text-[var(--accent)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        View all →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/case-studies"
            className="block px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl"
            onClick={() => setMobileOpen(false)}
          >
            Case Studies
          </Link>
          <div className="pt-6 border-t border-slate-200 mt-4">
            <Link
              href="/contact-us"
              className="btn btn-primary w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
