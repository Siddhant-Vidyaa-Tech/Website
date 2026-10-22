import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CtaSection from "@/components/sections/CtaSection";
import { servicesData } from "@/lib/services-data";
import ServiceArtwork from "@/components/ui/ServiceArtwork";

export const metadata: Metadata = {
  title: "EdTech Services | Vidyaa Tech",
  description:
    "Explore Vidyaa Tech's full range of EdTech services—curriculum design, content development, e-learning, assessment creation, digital accessibility, QA, IT solutions and talent staffing.",
  alternates: { canonical: "https://vidyaa-tech.com/services" },
};

const categories = ["Content", "Assessment", "Digital Learning", "Technology", "Quality", "People"] as const;

const categoryMeta: Record<string, { label: string; description: string }> = {
  Content:         { label: "Content Services",         description: "Expert content creation, curriculum design and editorial production" },
  Assessment:      { label: "Assessment Services",       description: "Custom assessment creation and item bank development" },
  "Digital Learning": { label: "Digital Learning",       description: "E-learning, interactive content and educational video" },
  Technology:      { label: "Technology Services",       description: "IT solutions, accessibility and content migration" },
  Quality:         { label: "Quality Assurance",         description: "Rigorous QA and testing for educational content and platforms" },
  People:          { label: "Talent & Staffing",         description: "Specialist education talent on demand" },
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        label="What We Do"
        headline="Expert Services for Every Stage of Educational Content Delivery"
        subtitle="Twelve specialist service areas—designed to work independently or as an integrated end-to-end solution for education organisations."
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      </div>

      {categories.map((cat) => {
        const catServices = servicesData.filter((s) => s.category === cat);
        if (!catServices.length) return null;
        const meta = categoryMeta[cat];
        return (
          <section key={cat} className="pb-14" aria-labelledby={`cat-${cat.replace(/\s/g, "-").toLowerCase()}`}>
            <div className="container">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="section-label">{meta.label}</span>
                  <h2 id={`cat-${cat.replace(/\s/g, "-").toLowerCase()}`} className="text-xl mt-1">
                    {meta.description}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="service-listing-card group block bg-[var(--background)] border border-[var(--border)] hover:shadow-[var(--shadow-md)] transition-all duration-300"
                  >
                    <ServiceArtwork slug={service.slug} compact />
                    <div className="p-5">
                    <h3 className="text-base font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-3">
                      {service.heroSubtitle}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                      Learn more
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CtaSection />
    </PageLayout>
  );
}
