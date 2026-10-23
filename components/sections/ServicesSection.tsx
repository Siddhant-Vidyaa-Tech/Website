"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { servicesData } from "@/lib/services-data";

const capabilities = [
  {
    slug: "content-development",
    title: "Content & Curriculum",
    image: "/images/Content.jpg",
    imageAlt: "Curriculum and educational content materials",
    summary:
      "Standards-aligned curriculum frameworks, student/teacher editions, and full editorial production.",
    services: ["Curriculum design", "Content development", "Editorial production"],
  },
  {
    slug: "custom-assessment-creation",
    title: "Assessment & Measurement",
    image: "/images/Assessment.png",
    imageAlt: "Assessment materials and learning questions",
    summary:
      "Psychometrically sound item banks, technology-enhanced items (TEIs), scoring rubrics, and bias review.",
    services: ["Item writing", "TEI & Test banks", "Rubrics & QA"],
  },
  {
    slug: "e-learning-solutions",
    title: "E-Learning & Interactive",
    image: "/images/Interactive EdTech Learning Dashboard.png",
    imageAlt: "Digital course and interactive learning experience",
    summary:
      "SCORM/xAPI modules, HTML5 simulations, branching scenarios, and broadcast-grade educational video.",
    services: ["SCORM courseware", "Interactive HTML5", "Educational video"],
  },
  {
    slug: "it-solutions",
    title: "Tech, Accessibility & Talent",
    image: "/images/Digital Learning & Courseware Development.png",
    imageAlt: "Digital learning and courseware technology",
    summary:
      "WCAG 2.2 AA remediation, XML/HTML5 TDX migration, LMS engineering, and vetted specialist staffing.",
    services: ["WCAG 2.2 AA", "TDX Migration", "Specialist Staffing"],
  },
];

const filterTabs = ["All", "Content", "Digital Learning", "Technology", "Assessment & QA"] as const;

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<(typeof filterTabs)[number]>("All");

  const filteredServices = servicesData.filter((s) => {
    if (activeTab === "All") return true;
    if (activeTab === "Assessment & QA") return ["Assessment", "Quality", "People"].includes(s.category);
    return s.category === activeTab;
  });

  return (
    <section
      className="section-py capabilities-section"
      aria-labelledby="capabilities-heading"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Our Capabilities</SectionLabel>
            <h2 id="capabilities-heading" className="mt-1">
              Four connected pillars. Twelve specialist services.
            </h2>
          </div>
          <Link href="/services" className="btn btn-outline btn-sm self-start md:self-auto">
            Open Full Service Directory <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="capabilities-section__grid mb-10">
          {capabilities.map((capability, index) => (
            <Link
              key={capability.slug}
              href={`/services/${capability.slug}`}
              className="capabilities-section__card group"
            >
              <div className="capabilities-section__image-wrap mb-4">
                <Image
                  src={capability.image}
                  alt={capability.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="capabilities-section__image"
                />
                <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-white/95 text-[var(--primary-dark)] text-xs font-extrabold shadow-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="px-1.5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-1.5 group-hover:text-[var(--secondary-light)] transition-colors">
                  {capability.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
                  {capability.summary}
                </p>
                <ul className="flex flex-wrap gap-1.5 mb-4 mt-auto p-0 list-none" aria-label={`${capability.title} services`}>
                  {capability.services.map((service) => (
                    <li key={service} className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium">
                      {service}
                    </li>
                  ))}
                </ul>
                <span className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[var(--primary)]">
                  Explore capability <b className="text-[var(--accent)]" aria-hidden="true">↗</b>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Interactive 12-Service Explorer Bar */}
        <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[var(--primary-dark)] m-0">
              Explore All 12 Specialist Service Lines
            </h3>
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter services by category">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === tab
                      ? "bg-[var(--primary-dark)] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {filteredServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-[var(--primary)] hover:shadow-xs transition-all flex items-start justify-between gap-2 group"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--accent)] block">
                    {svc.category}
                  </span>
                  <span className="text-sm font-bold text-[var(--primary-dark)] group-hover:text-[var(--secondary-light)] block mt-0.5">
                    {svc.title}
                  </span>
                </div>
                <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors flex-shrink-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
