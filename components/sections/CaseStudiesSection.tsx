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
        <div className="case-studies-section__header">
          <div className="case-studies-section__intro">
            <SectionLabel>Our Work</SectionLabel>
            <h2 id="case-studies-heading">
              Projects that <span className="text-[var(--secondary)]">delivered impact</span>
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="btn btn-outline case-studies-section__all-link"
          >
            View all case studies
          </Link>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              href="/case-studies"
              className="case-study-tile case-study-card group"
              aria-label={`${cs.title}. View all case studies.`}
            >
              <div className="case-study-card__media">
                <Image
                  src={cs.image}
                  alt={`${cs.industry}: ${cs.title}`}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 40px), (max-width: 1279px) calc(33vw - 32px), 390px"
                  className="case-study-card__image"
                />
              </div>

              <div className="case-study-card__body">
                <h3 className="case-study-card__title">{cs.title}</h3>
                <p className="case-study-card__summary">{cs.summary}</p>

                <div className="case-study-card__tags" aria-label="Project categories">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="case-study-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="case-studies-section__note">
          Client names not disclosed without permission. Contact us to discuss our work in more detail.
        </p>
      </div>
    </section>
  );
}
