"use client";

import { useState, useEffect, useRef, startTransition, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    startTransition(() => {
      setMobileOpen(false);
      setActiveDropdown(null);
    });
  }, [pathname]);

  // Close dropdown when clicking outside
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

  // Keep keyboard focus inside the open mobile menu and return it to the toggle on close.
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "header-scrolled" : "border-b border-transparent"
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Vidyaa Tech – Home"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav
            ref={dropdownRef}
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-0.5"
          >
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                      pathname.startsWith(item.href) && item.href !== "/"
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    } hover:bg-surface`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
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
                    className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 block ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary hover:bg-surface"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="nav-dropdown" role="menu">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-dropdown-item"
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span>
                          <span className="block font-semibold text-sm text-[var(--text)]">{child.label}</span>
                          {child.description && (
                            <span className="block text-xs text-[var(--text-muted)] mt-0.5">{child.description}</span>
                          )}
                        </span>
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t border-[var(--border)]">
                      <Link
                        href={item.href}
                        className="nav-dropdown-item text-secondary font-semibold text-sm"
                        onClick={() => setActiveDropdown(null)}
                      >
                        View all →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact-us" className="btn btn-primary btn-sm">
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={mobileToggleRef}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-surface transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-0.5 bg-[var(--text)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--text)] transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--text)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-[var(--text)] hover:bg-surface rounded-md"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
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
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[var(--border)] pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2.5 px-2 text-sm font-medium text-[var(--text-muted)] hover:text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                      <Link
                        href={item.href}
                        className="block py-2.5 px-2 text-sm font-semibold text-secondary"
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
                  className="block px-4 py-3 text-base font-semibold text-[var(--text)] hover:bg-surface rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-6 border-t border-[var(--border)] mt-4">
            <Link
              href="/contact-us"
              className="btn btn-primary w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Let&apos;s Talk
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
