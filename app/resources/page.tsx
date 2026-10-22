import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Resources | Vidyaa Tech",
  description:
    "Educational content, guides and insights from Vidyaa Tech—covering EdTech services, curriculum design, digital accessibility, e-learning and educational content development.",
  alternates: { canonical: "https://vidyaa-tech.com/resources" },
};

// Placeholder resources — replace with real articles when content is available
const resources = [
  {
    type: "Guide",
    title: "Understanding Digital Accessibility in Education",
    image: "/images/service-accessibility.png",
    summary:
      "A practical introduction to WCAG 2.2 AA compliance for educational publishers and EdTech companies—covering requirements, common issues and remediation approaches.",
    topic: "Digital Accessibility",
    href: "#",
    placeholder: true,
  },
  {
    type: "Guide",
    title: "How to Plan a Large-Scale Content Migration Project",
    image: "/images/service-migration.png",
    summary:
      "Key considerations for educational publishers undertaking XML, DITA or HTML5 content migration projects—from scoping and planning through to QA and delivery.",
    topic: "TDX / Migration",
    href: "#",
    placeholder: true,
  },
  {
    type: "Article",
    title: "What Makes a Good Educational Assessment Item?",
    image: "/images/service-assessment.png",
    summary:
      "The principles of effective assessment item design—validity, reliability, bias and cognitive demand—explained for curriculum teams and content commissioners.",
    topic: "Assessment",
    href: "#",
    placeholder: true,
  },
  {
    type: "Article",
    title: "Choosing the Right E-Learning Authoring Tool",
    image: "/images/service-elearning-crop.png",
    summary:
      "A comparison of leading e-learning authoring tools for educational publishers and EdTech companies—Storyline, Rise, Captivate and custom HTML5.",
    topic: "E-Learning",
    href: "#",
    placeholder: true,
  },
  {
    type: "Guide",
    title: "Curriculum Alignment: Matching Content to Learning Standards",
    image: "/images/service-curriculum.png",
    summary:
      "How to approach curriculum alignment across Common Core, NGSS, state standards and international frameworks—and why it matters for publishers and districts.",
    topic: "Curriculum",
    href: "#",
    placeholder: true,
  },
  {
    type: "Article",
    title: "Scaling Educational Content Delivery Without Sacrificing Quality",
    image: "/images/service-content.png",
    summary:
      "Practical approaches to maintaining content quality on large-scale educational programmes—processes, team structures and technology tools.",
    topic: "Content Operations",
    href: "#",
    placeholder: true,
  },
];

const topicColors: Record<string, string> = {
  "Digital Accessibility": "bg-emerald-50 text-emerald-700",
  "TDX / Migration":       "bg-purple-50 text-purple-700",
  Assessment:              "bg-blue-50 text-blue-700",
  "E-Learning":            "bg-orange-50 text-orange-700",
  Curriculum:              "bg-teal-50 text-teal-700",
  "Content Operations":    "bg-rose-50 text-rose-700",
};

export default function ResourcesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Resources"
        headline="Insights for Education Organisations"
        subtitle="Guides, articles and practical resources covering EdTech services, curriculum design, digital accessibility and content delivery."
        variant="light"
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
      </div>

      <section className="pb-20" aria-label="Resource list">
        <div className="container">
          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 mb-10 max-w-3xl">
            <p className="text-sm text-[var(--text-muted)]">
              <strong className="text-[var(--text)]">Coming Soon:</strong> Resources and articles are currently in development. The examples below show the planned resource structure. Contact us to be notified when new content is published.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <article
                key={r.title}
                className="bg-[var(--background)] border border-[var(--border)] rounded-xl overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[var(--surface)] border border-[var(--border)] rounded text-[var(--text-muted)]">
                      {r.type}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${topicColors[r.topic] ?? "bg-gray-100 text-gray-600"}`}>
                      {r.topic}
                    </span>
                    {r.placeholder && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded ml-auto">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h2 className="text-base font-semibold text-[var(--text)] mb-2 flex-1">
                    {r.title}
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {r.summary}
                  </p>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-light)] cursor-default">
                    Read article
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-8 max-w-2xl">
            <h2 className="text-lg font-bold text-[var(--text)] mb-2">
              Stay Updated
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
              We will be publishing practical guides and insights for education organisations.
              Get in touch to be notified when new content is available.
            </p>
            <Link href="/contact-us" className="btn btn-primary btn-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </PageLayout>
  );
}
