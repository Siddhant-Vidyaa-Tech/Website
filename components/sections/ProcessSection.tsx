import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  { number: "01", title: "Understand", gate: "Discovery Brief", description: "Align on target learners, curriculum standards, platform specs, and accessibility requirements." },
  { number: "02", title: "Plan", gate: "Scope & Architecture", description: "Define learning progressions, style guides, batch milestones, and specialist team allocation." },
  { number: "03", title: "Create", gate: "Iterative Authoring", description: "Develop manuscripts, assessment items, interactive storyboards, and digital courseware." },
  { number: "04", title: "Review", gate: "SME & Editorial Audit", description: "Conduct rigorous subject-matter verification, copyediting, and bias/sensitivity checks." },
  { number: "05", title: "Quality Check", gate: "WCAG & Device QA", description: "Validate SCORM/xAPI functionality, cross-browser responsiveness, and WCAG 2.2 AA compliance." },
  { number: "06", title: "Deliver", gate: "Platform Handover", description: "Package final validated assets with full metadata tagging ready for immediate LMS/CMS deployment." },
];

export default function ProcessSection() {
  return (
    <section className="section-py bg-[var(--surface)]" aria-labelledby="process-heading">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <SectionLabel>How We Work</SectionLabel>
          <h2 id="process-heading" className="mt-1 mb-3">
            A transparent path from brief to platform-ready delivery
          </h2>
          <p className="text-base text-[var(--text-muted)]">
            One accountable team with documented quality gates built into every stage of production.
          </p>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative bg-white border border-[var(--border)] rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--primary-dark)] text-white text-sm font-extrabold">
                  {step.number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  {step.gate}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed m-0">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
