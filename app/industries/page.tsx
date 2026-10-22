import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CtaSection from "@/components/sections/CtaSection";
import { industriesData } from "@/lib/industries-data";
import IndustryArtwork from "@/components/ui/IndustryArtwork";

export const metadata: Metadata = {
  title: "Industries We Serve | Vidyaa Tech",
  description:
    "Vidyaa Tech serves educational publishers, K–12 schools, EdTech companies and universities with specialist EdTech content, technology and staffing services.",
  alternates: { canonical: "https://vidyaa-tech.com/industries" },
};

export default function IndustriesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Industries"
        headline="Deep Expertise Across the Education Ecosystem"
        subtitle="From global publishers to individual schools—Vidyaa Tech works across the full range of education organisations with specialist, industry-aware services."
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      </div>

      <section className="pb-20" aria-label="Industry list">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industriesData.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group block bg-[var(--background)] border border-[var(--border)] rounded-xl overflow-hidden hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
              >
                <IndustryArtwork slug={ind.slug} />
                <div className="p-6">
                  <h2 className="text-[var(--text)] text-xl font-bold mb-3">{ind.title}</h2>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                    {ind.heroSubtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {ind.relevantServices.slice(0, 4).map((slug) => (
                      <span key={slug} className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--text-muted)]">
                        {slug.replace(/-/g, " ")}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageLayout>
  );
}
