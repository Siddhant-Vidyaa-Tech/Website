import Link from "next/link";
import Logo from "@/components/ui/Logo";

const footerServices = [
  { label: "Curriculum Design",          href: "/services/curriculum-design" },
  { label: "Content Development",        href: "/services/content-development" },
  { label: "Assessment Creation",        href: "/services/custom-assessment-creation" },
  { label: "E-Learning Solutions",       href: "/services/e-learning-solutions" },
  { label: "Digital Accessibility",      href: "/services/digital-accessibility" },
  { label: "Learning Technology",        href: "/services/it-solutions" },
];

const footerIndustries = [
  { label: "Educational Publishers",    href: "/industries/educational-publishers" },
  { label: "K–12 Schools",             href: "/industries/k12-schools" },
  { label: "EdTech Companies",          href: "/industries/edtech" },
  { label: "Universities",              href: "/industries/universities" },
  { label: "Corporate Learning",        href: "/industries/corporate-learning" },
  { label: "Training Organisations",     href: "/industries/training-providers" },
];

const footerCompany = [
  { label: "About Us",      href: "/about-us" },
  { label: "Services",      href: "/services" },
  { label: "Industries",    href: "/industries" },
  { label: "Case Studies",  href: "/case-studies" },
  { label: "Resources",     href: "/resources" },
  { label: "Contact Us",    href: "/contact-us" },
];

const footerResources = [
  { label: "Case Studies",  href: "/case-studies" },
  { label: "Resources",     href: "/resources" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  return (
    <footer
      className="bg-[var(--primary-dark)] text-white site-footer"
      aria-label="Site footer"
    >
      {/* Main footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">

          {/* Brand column */}
          <div className="lg:col-span-4 footer-brand">
            <Link href="/" aria-label="Vidyaa Tech – Home" className="inline-block mb-6">
              <Logo variant="light" size="md" />
            </Link>
            <p className="text-sm text-slate-100/90 leading-relaxed max-w-xs footer-desc">
              Vidyaa Tech is an EdTech services and technology company helping educational publishers, schools and learning organisations deliver high-quality content and digital learning at scale.
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 footer-heading">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-100/90 hover:text-white transition-colors footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/services" className="inline-block mt-4 text-sm font-semibold text-white hover:text-red-300 transition-colors footer-all-link">
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Industries + Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 footer-heading">
              Industries
            </h3>
            <ul className="space-y-2.5 mb-8">
              {footerIndustries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-100/90 hover:text-white transition-colors footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 footer-heading">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {footerResources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-100/90 hover:text-white transition-colors footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 footer-heading">
              Company
            </h3>
            <ul className="space-y-2.5 mb-8">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-100/90 hover:text-white transition-colors footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-5 footer-heading">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@vidyaa-tech.com"
                  className="text-sm text-slate-100/90 hover:text-white transition-colors flex items-center gap-2 footer-link"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@vidyaa-tech.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/vidyaa-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors text-white footer-social-btn"
                aria-label="Vidyaa Tech on LinkedIn"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/vidyaatech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors text-white footer-social-btn"
                aria-label="Vidyaa Tech on X (Twitter)"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-300 footer-copy">
            © {new Date().getFullYear()} Vidyaa Tech. All rights reserved.
          </p>
          <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-5 gap-y-1">
            {[
              { label: "Privacy Policy",      href: "/privacy-policy" },
              { label: "Terms & Conditions",  href: "/terms" },
              { label: "Accessibility",       href: "/accessibility" },
              { label: "Cookie Policy",       href: "/privacy-policy#cookies" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-slate-300 hover:text-white transition-colors footer-legal-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
