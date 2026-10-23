import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const caseStudies = [
  {
    id: "publisher-content-migration",
    image: "/images/service-migration.png",
    industry: "Educational Publishing",
    title: "Large-Scale Content Migration",
    summary: "Migrating thousands of legacy content assets into modern XML workflow",
    tags: ["Content Migration", "TDX", "Editorial"],
  },
  {
    id: "k12-assessment",
    image: "/images/service-assessment.png",
    industry: "K–12 Education",
    title: "Assessment Bank Development",
    summary: "Comprehensive curriculum-aligned assessment items across grade bands",
    tags: ["Assessment", "Curriculum", "QA"],
  },
  {
    id: "edtech-elearning",
    image: "/images/service-interactive.png",
    industry: "EdTech",
    title: "Accessible E-Learning Modules",
    summary: "Interactive, WCAG 2.2 AA-compliant courses for platform launch",
    tags: ["E-Learning", "Interactive", "Accessibility"],
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      className="section-py bg-[var(--surface)] case-studies-section"
      aria-labelledby="case-studies-heading"
    >
      <div className="container">
        <div className="case-studies-section__header flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="case-studies-section__intro">
            <SectionLabel>Our Work</SectionLabel>
            <h2 id="case-studies-heading" className="mt-2">
              Projects that <span className="text-[var(--secondary)]">delivered impact</span>
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="btn btn-outline case-studies-section__all-link self-start md:self-auto"
          >
            View all case studies
          </Link>
        </div>

        <div className="case-studies-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              href="/case-studies"
              className="case-study-tile case-study-card group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all"
              aria-label={`${cs.title}. View all case studies.`}
            >
              <div
                className="case-study-card__media relative w-full aspect-[16/10] overflow-hidden bg-slate-100"
                style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", overflow: "hidden" }}
              >
                <Image
                  src={cs.image}
                  alt={`${cs.industry}: ${cs.title}`}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 40px), (max-width: 1279px) calc(33vw - 32px), 390px"
                  className="case-study-card__image object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="case-study-card__body flex flex-col flex-1 p-5">
                <h3 className="case-study-card__title text-lg font-bold text-[#0a193b] mb-2">
                  {cs.title}
                </h3>
                <p className="case-study-card__summary text-sm text-slate-600 mb-4">
                  {cs.summary}
                </p>

                <div className="case-study-card__tags flex flex-wrap gap-1.5 mt-auto" aria-label="Project categories">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="case-study-card__tag px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="case-studies-section__note mt-6 text-center text-xs text-slate-500">
          Client names not disclosed without permission. Contact us to discuss our work in more detail.
        </p>
      </div>
    </section>
  );
}
