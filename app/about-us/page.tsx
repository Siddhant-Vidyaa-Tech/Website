import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CtaSection from "@/components/sections/CtaSection";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "About Us | Vidyaa Tech",
  description:
    "Vidyaa Tech is an EdTech services and technology company with deep expertise in educational content, curriculum design, digital learning and assessment. Learn about who we are.",
  alternates: { canonical: "https://vidyaa-tech.com/about-us" },
};

const values = [
  {
    title: "Education First",
    description:
      "Every decision we make is guided by what is best for learners and educators. We understand education from the inside—not just as a market.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Quality Without Compromise",
    description:
      "We hold our work to high standards because the materials we create end up in front of learners. Accuracy, clarity and pedagogical quality are non-negotiable.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Partnership Mindset",
    description:
      "We work as an extension of your team—not as a remote vendor. Transparent communication, responsive support and genuine commitment to your outcomes.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Technology-Enabled",
    description:
      "We use modern tools and workflows to deliver efficiently and consistently at scale—while keeping the human expertise that educational content requires.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Inclusion & Accessibility",
    description:
      "Education should be accessible to every learner. We design and produce content that meets accessibility standards and supports diverse learning needs.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="1.5" />
        <path d="M6 12l2-4h8l2 4M9 12l1 7m4-7l-1 7m-2-7h2" />
      </svg>
    ),
  },
  {
    title: "Scalable & Reliable",
    description:
      "Our systems, processes and people are built to handle large-scale programmes without sacrificing consistency or quality at volume.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
];

const expertise = [
  "Educational Publishing",
  "Curriculum & Instructional Design",
  "Custom Assessment Development",
  "E-Learning & Digital Learning",
  "Digital Accessibility (WCAG 2.2 AA)",
  "Interactive Content Development",
  "Educational Video Production",
  "Content & Data Migration",
  "Quality Assurance & Testing",
  "EdTech Platform Support",
  "Talent & Specialist Staffing",
  "K–12 to Higher Education",
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        label="About Us"
        headline="An EdTech Services Company Built Around Education"
        subtitle="Vidyaa Tech brings together deep educational expertise and technology-enabled delivery to help publishers, schools and EdTech companies succeed."
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
      </div>

      {/* Who We Are */}
      <section className="pb-16" aria-labelledby="who-we-are">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 id="who-we-are" className="mt-2 mb-5">
                Specialist EdTech Services. Delivered With Expertise.
              </h2>
              <div className="prose">
                <p>
                  Vidyaa Tech is an EdTech services and technology company that works with educational
                  publishers, K–12 schools, EdTech companies, universities and learning organisations
                  to create high-quality educational content, assessments, digital learning experiences
                  and technology solutions at scale.
                </p>
                <p>
                  We are not a generalist agency that has moved into education. We are a specialist
                  company built from the ground up around the education sector—with the domain knowledge,
                  pedagogical understanding and operational capability that education projects demand.
                </p>
                <p>
                  Our team combines experienced educators, curriculum specialists, instructional designers,
                  editorial professionals, accessibility experts and technologists—all focused on one
                  sector.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/services" className="btn btn-primary">Explore Our Services</Link>
                <Link href="/contact-us" className="btn btn-outline">Get in Touch</Link>
              </div>
            </div>

            {/* Visual: Office snapshot & expertise badge */}
            <div className="about-feature-card relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-md group bg-white">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/office-snapshot.png"
                  alt="Vidyaa Tech educational technology team working on digital learning content"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-[var(--surface)] border-t border-[var(--border)]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                  Delivering Across The Full Ecosystem
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertise.slice(0, 6).map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 bg-white border border-[var(--border)] rounded-md font-medium text-[var(--text)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py bg-[var(--primary)] about-mission" aria-labelledby="mission-heading">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel light>Our Mission</SectionLabel>
            <h2 id="mission-heading" className="text-white mt-2 mb-5">
              To Help Educational Organisations Create Better Learning
            </h2>
            <p className="text-white/75 text-lg leading-relaxed">
              We believe every learner deserves access to high-quality, accurate and engaging
              educational content. Vidyaa Tech exists to make that possible—by giving the
              organisations that create educational materials the expertise, capacity and
              technology-enabled workflows to deliver at their best.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-[var(--background)]" aria-labelledby="values-heading">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-12">
            <SectionLabel>Our Values</SectionLabel>
            <h2 id="values-heading" className="mt-2">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="about-value-card bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg bg-[var(--primary)] bg-opacity-10 flex items-center justify-center text-[var(--secondary)] mb-4">
                  {v.icon}
                </div>
                <h3 className="text-base font-semibold text-[var(--text)] mb-2">{v.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="section-py bg-[var(--surface-alt)]" aria-labelledby="why-work-heading">
        <div className="container">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <SectionLabel>Why Work With Us</SectionLabel>
              <h2 id="why-work-heading" className="mt-2 mb-5">
                The Vidyaa Tech Difference
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                {[
                  { t: "Education Sector Specialists", d: "We only serve education. That focus means deeper domain knowledge and more relevant expertise for every project." },
                  { t: "Flexible Engagement Models", d: "Whether you need project-based delivery, embedded team capacity or long-term partnership, we structure engagements to suit your needs." },
                  { t: "Multi-Subject, Multi-Grade Capacity", d: "We can deliver across the full K–12 curriculum and into higher education—simultaneously and at scale." },
                  { t: "Quality You Can Count On", d: "Our structured QA processes and experienced review teams ensure every deliverable meets the standard before it reaches you." },
                ].map((item) => (
                  <div key={item.t} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text)] text-sm">{item.t}</p>
                      <p className="text-[var(--text-muted)] text-sm mt-0.5 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaSection />
    </PageLayout>
  );
}
