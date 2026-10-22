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
    <section className="section-py bg-[var(--surface)]" aria-labelledby="case-studies-heading">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <SectionLabel>Our Work</SectionLabel>
            <h2 id="case-studies-heading" className="mb-2">
              Projects that <span className="text-[var(--secondary)]">delivered impact</span>
            </h2>
          </div>
          <Link href="/case-studies" className="btn btn-outline flex-shrink-0 self-start md:self-auto">
            View all case studies
          </Link>
        </div>

        {/* Visual case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.id}
              href="/case-studies"
              className="case-study-tile group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  {cs.summary}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded-full text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-xs text-center text-[var(--text-light)] mt-8">
          Client names not disclosed without permission. Contact us to discuss our work in more detail.
        </p>
      </div>
    </section>
  );
}
