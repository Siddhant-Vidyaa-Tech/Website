import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Case Studies | Vidyaa Tech",
  description:
    "See how Vidyaa Tech has helped educational publishers, K–12 schools, EdTech companies and universities deliver high-quality content, assessments and digital learning at scale.",
  alternates: { canonical: "https://vidyaa-tech.com/case-studies" },
};

const caseStudies = [
  {
    id: "publisher-content-migration",
    image: "/images/service-migration.png",
    industry: "Educational Publishing",
    title: "Large-Scale Content Migration for an Educational Publisher",
    summary:
      "Supporting a major educational publisher in migrating thousands of legacy content assets into a modern XML-based workflow—within a demanding delivery schedule.",
    challenge: "The publisher needed to transform a large library of legacy content into structured XML format to support their new digital publishing platform, without disrupting their ongoing production schedule.",
    approach: "Vidyaa Tech designed a phased migration pipeline combining automated structural conversion with expert editorial review. A dedicated QA process verified content fidelity at each stage, ensuring no accuracy or formatting issues carried over.",
    solution: "A hybrid automated-and-manual migration process delivering assets in batches, with real-time progress reporting and clear handover documentation.",
    outcome: "Content successfully transformed and verified on schedule, enabling the publisher to meet their digital platform launch date with confidence in content accuracy.",
    tags: ["Content Migration", "TDX", "Editorial Production", "QA"],
    gradient: "from-[#0a0b6c] to-[#1313a8]",
  },
  {
    id: "k12-assessment-development",
    image: "/images/service-assessment.png",
    industry: "K–12 Education",
    title: "Custom Assessment Bank Development for a School District",
    summary:
      "Developing a comprehensive bank of curriculum-aligned assessment items across multiple subjects and grade bands for a school district.",
    challenge: "The district required a scalable assessment resource that could be used across multiple schools, aligned to state standards, and practical for teachers to deploy without significant additional training.",
    approach: "Subject-matter experts and assessment specialists collaborated to develop, review and validate items against state standards. A bias and sensitivity review was incorporated into the QA process.",
    solution: "A structured item bank with metadata tagging by standard, grade, subject and cognitive demand level—formatted for integration with the district's assessment platform.",
    outcome: "A validated, standards-aligned assessment bank delivered to specification, ready for district-wide deployment.",
    tags: ["Assessment Creation", "Curriculum Alignment", "QA", "K–12"],
    gradient: "from-[#1313a8] to-[#2525cf]",
  },
  {
    id: "edtech-elearning-accessible",
    image: "/images/service-interactive.png",
    industry: "EdTech",
    title: "Accessible E-Learning Module Development for an EdTech Platform",
    summary:
      "End-to-end development of accessible, interactive e-learning modules for an EdTech company launching a new digital learning platform.",
    challenge: "The company needed to build a library of interactive e-learning modules quickly, meeting WCAG 2.2 AA accessibility requirements from day one—without the in-house capacity to deliver at scale.",
    approach: "Vidyaa Tech provided full instructional design, content development, interactive development and accessibility compliance services. A structured review cycle was established to maintain quality across all modules.",
    solution: "WCAG 2.2 AA-compliant, fully interactive SCORM modules delivered in phased batches, enabling the platform launch to proceed on schedule.",
    outcome: "Accessible, platform-ready e-learning content delivered on time, meeting both the company's quality standards and their accessibility compliance requirements.",
    tags: ["E-Learning", "Interactive Content", "Accessibility", "EdTech"],
    gradient: "from-[#c62626] to-[#e03b3b]",
  },
];

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Case Studies"
        headline="Projects We're Proud Of"
        subtitle="Representative examples of the kind of work Vidyaa Tech delivers for publishers, schools and EdTech organisations."
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
      </div>

      <section className="pb-20" aria-label="Case study list">
        <div className="container">
          <p className="text-sm text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 mb-10 max-w-3xl">
            <strong className="text-[var(--text)]">Note:</strong> These are illustrative examples of work Vidyaa Tech has delivered. Client names are not disclosed without explicit permission. Contact us to discuss our experience in more detail.
          </p>

          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.id}
                className="bg-[var(--background)] border border-[var(--border)] rounded-xl overflow-hidden"
              >
                {/* Header with image */}
                <div className={`grid grid-cols-1 md:grid-cols-3 bg-gradient-to-br ${cs.gradient} overflow-hidden`}>
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2 block">
                      {cs.industry}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-white">{cs.title}</h2>
                  </div>
                  <div className="relative h-48 md:h-full min-h-[160px] w-full bg-black/10">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-[var(--text-muted)] leading-relaxed mb-8">{cs.summary}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                      { label: "Challenge", content: cs.challenge },
                      { label: "Approach", content: cs.approach },
                      { label: "Solution", content: cs.solution },
                      { label: "Outcome", content: cs.outcome },
                    ].map(({ label, content }) => (
                      <div key={label} className="bg-[var(--surface)] rounded-lg p-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] block mb-2">
                          {label}
                        </span>
                        <p className="text-sm text-[var(--text)] leading-relaxed">{content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Working on a Similar Project?"
        body="Tell us what you need. Our team has deep experience across educational publishing, K–12, EdTech and higher education."
      />
    </PageLayout>
  );
}
