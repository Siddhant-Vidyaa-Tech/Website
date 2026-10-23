import SectionLabel from "@/components/ui/SectionLabel";
import EcosystemDiagram from "@/components/ui/EcosystemDiagram";

const pillars = [
  {
    title: "Education-First Domain Expertise",
    desc: "Led by former teachers, academic editors, and psychometricians who understand classroom realities.",
  },
  {
    title: "Scalable Multi-Grade Production",
    desc: "Structured pipelines capable of authoring and migrating thousands of curriculum assets on schedule.",
  },
  {
    title: "Accessibility & QA Built In",
    desc: "Every asset undergoes multi-stage editorial, functional, and WCAG 2.2 AA verification before handover.",
  },
  {
    title: "Technology-Enabled Workflows",
    desc: "Seamless integration with Canvas, Moodle, Blackboard, XML/DITA repositories, and modern authoring suites.",
  },
];

export default function WhyVidyaaSection() {
  return (
    <section className="section-py bg-white" aria-labelledby="why-vidyaa-heading">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionLabel>One Connected Partner</SectionLabel>
            <h2 id="why-vidyaa-heading" className="mt-1 mb-4">
              Better learning happens when every part works together.
            </h2>
            <p className="text-base text-[var(--text-muted)] mb-8 max-w-xl">
              Instead of coordinating separate vendors for curriculum writing, assessment item banks, e-learning production, and accessibility remediation, partner with one accountable team across the entire lifecycle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-blue-200 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-[var(--accent)] text-xs font-extrabold flex items-center justify-center">
                      ✓
                    </span>
                    <h3 className="text-sm font-bold text-[var(--primary-dark)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200/80 p-4 shadow-md">
              <EcosystemDiagram variant="circle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
