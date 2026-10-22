import Link from "next/link";
import type { ServiceData } from "@/lib/services-data";
import { servicesData } from "@/lib/services-data";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import ServiceArtwork from "@/components/ui/ServiceArtwork";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/structured-data";

interface Props {
  service: ServiceData;
}

export default function ServicePageTemplate({ service }: Props) {
  const related = servicesData.filter((s) => service.relatedServices.includes(s.slug));

  const svcSchema = serviceSchema(service.slug, service.title, service.metaDescription);
  const faqLd = faqSchema(service.faq);
  const bcSchema = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.slug}` },
  ]);

  return (
    <>
      <JsonLd data={svcSchema} />
      <JsonLd data={faqLd} />
      <JsonLd data={bcSchema} />
    <PageLayout>
      <PageHero
        label={service.category}
        headline={service.heroHeadline}
        subtitle={service.heroSubtitle}
        visual={<ServiceArtwork slug={service.slug} />}
      />

      <div className="container py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="pb-16" aria-labelledby="overview-heading">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="overview-heading" className="mb-5">
                Service Overview
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
                {service.overview}
              </p>

              {/* Why it matters */}
              <div className="bg-[var(--surface-alt)] border-l-4 border-[var(--accent)] rounded-r-xl p-6">
                <h3 className="text-base font-bold text-[var(--text)] mb-2">Why It Matters</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {service.whyItMatters}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Who we work with */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                  Who We Work With
                </h3>
                <ul className="space-y-2.5" role="list">
                  {service.whoWeWorkWith.map((org) => (
                    <li key={org} className="flex items-center gap-2.5 text-sm text-[var(--text)]">
                      <svg className="w-4 h-4 text-[var(--accent)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {org}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-[var(--primary)] rounded-xl p-6 text-white">
                <h3 className="text-base font-bold mb-2">Discuss Your Project</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Tell us about your {service.shortTitle.toLowerCase()} requirements and we&apos;ll help you plan the right solution.
                </p>
                <Link href="/contact-us" className="btn btn-primary btn-sm w-full text-center">
                  Let&apos;s Talk
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section-py bg-[var(--surface)]" aria-labelledby="deliver-heading">
        <div className="container">
          <h2 id="deliver-heading" className="mb-10">
            What We Deliver
          </h2>
          <div className="service-deliver-grid">
            {service.whatWeDeliver.map((item) => (
              <div
                key={item.title}
                className="service-deliver-item"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--primary)] bg-opacity-10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[var(--secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[var(--text)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-[var(--background)]" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <h2 id="faq-heading" className="mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5" itemScope itemType="https://schema.org/FAQPage">
            {service.faq.map((item) => (
              <details
                key={item.question}
                className="service-faq-item"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary className="service-faq-item__question">
                  <h3 itemProp="name">{item.question}</h3>
                </summary>
                <div
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed" itemProp="text">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section-py bg-[var(--surface)]" aria-labelledby="related-heading">
          <div className="container">
            <h2 id="related-heading" className="mb-8">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group block bg-[var(--background)] border border-[var(--border)] rounded-xl p-6 hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300"
                  aria-label={rel.title}
                >
                  <h3 className="text-base font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
                    {rel.heroSubtitle}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[var(--secondary)]">
                    Learn more
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection
        headline={`Ready to Discuss Your ${service.shortTitle} Project?`}
        body={`Our team has deep experience in ${service.title.toLowerCase()}. Tell us what you need and we'll help you plan the right approach.`}
      />
    </PageLayout>
    </>
  );
}
