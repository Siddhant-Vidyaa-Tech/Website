import Link from "next/link";
import type { IndustryData } from "@/lib/industries-data";
import { servicesData } from "@/lib/services-data";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import IndustryArtwork from "@/components/ui/IndustryArtwork";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { industryPageSchema, faqSchema } from "@/lib/structured-data";

interface Props {
  industry: IndustryData;
}

export default function IndustryPageTemplate({ industry }: Props) {
  const relevantServices = servicesData.filter((s) =>
    industry.relevantServices.includes(s.slug)
  );

  const pageSchema = industryPageSchema(industry.slug, industry.title, industry.metaDescription);
  const faqLd = faqSchema(industry.faq);

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={faqLd} />
    <PageLayout>
      <PageHero
        label="Industry"
        headline={industry.heroHeadline}
        subtitle={industry.heroSubtitle}
        visual={<IndustryArtwork slug={industry.slug} />}
      />

      <div className="container py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
            { label: industry.title },
          ]}
        />
      </div>

      {/* Overview */}
      <section className="pb-16" aria-labelledby="industry-overview">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 id="industry-overview" className="mb-5">
                How Vidyaa Tech Supports {industry.title}
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                {industry.overview}
              </p>
            </div>
            {/* Sidebar CTA */}
            <aside>
              <div className="bg-[var(--primary)] rounded-xl p-6 text-white">
                <h3 className="text-base font-bold mb-2">Work With Us</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  Tell us about your project and our specialist team will respond within one business day.
                </p>
                <Link href="/contact-us" className="btn btn-primary btn-sm w-full text-center">
                  Let&apos;s Talk
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-py bg-[var(--surface)]" aria-labelledby="challenges-heading">
        <div className="container">
          <h2 id="challenges-heading" className="mb-10">
            The Challenges We Address
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industry.challenges.map((c) => (
              <div
                key={c.title}
                className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--accent)] bg-opacity-15 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-[var(--text)] mb-2">{c.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="section-py bg-[var(--background)]" aria-labelledby="how-we-help-heading">
        <div className="container">
          <h2 id="how-we-help-heading" className="mb-10">
            How We Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industry.howWeHelp.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 border border-[var(--border)] rounded-xl bg-[var(--surface)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text)] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="section-py bg-[var(--surface)]" aria-labelledby="relevant-services-heading">
        <div className="container">
          <h2 id="relevant-services-heading" className="mb-10">
            Services Most Relevant to {industry.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relevantServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group block bg-[var(--background)] border border-[var(--border)] rounded-xl p-6 hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-base font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
                  {svc.heroSubtitle}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[var(--secondary)]">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-[var(--background)]" aria-labelledby="ind-faq-heading">
        <div className="container max-w-3xl">
          <h2 id="ind-faq-heading" className="mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5" itemScope itemType="https://schema.org/FAQPage">
            {industry.faq.map((item) => (
              <div
                key={item.question}
                className="border border-[var(--border)] rounded-xl p-6"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="text-base font-semibold text-[var(--text)] mb-3" itemProp="name">
                  {item.question}
                </h3>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed" itemProp="text">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline={`Serving ${industry.title} With Deep Expertise`}
        body="Tell us about your project and our specialist team will help you plan the right solution."
      />
    </PageLayout>
    </>
  );
}
