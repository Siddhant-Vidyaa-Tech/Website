import Link from "next/link";

interface CtaSectionProps {
  headline?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaSection({
  headline = "Let’s build better learning experiences together.",
  body = "Have a curriculum, assessment bank, e-learning course, WCAG remediation, or XML migration project in mind? Speak directly with our education specialists.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact-us",
  secondaryLabel = "Browse All 12 Services",
  secondaryHref = "/services",
}: CtaSectionProps) {
  return (
    <section className="cta-section" aria-label="Call to action">
      <div className="container cta-layout">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-300">
            A Partner From Brief to Platform Delivery
          </span>
          <h2 className="text-white mt-2 mb-3">{headline}</h2>
          <p className="text-slate-200 max-w-xl mb-7">{body}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={primaryHref} className="btn btn-primary btn-lg">
              {primaryLabel} <span aria-hidden="true">→</span>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="btn btn-secondary btn-lg">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-3.5 text-white">
          <div className="text-xs font-extrabold uppercase tracking-wider text-red-200">
            Why Teams Partner With Vidyaa Tech
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/15 text-sm">
            <span className="text-slate-200">Accessibility Standard</span>
            <span className="font-bold text-white">WCAG 2.2 AA / PDF-UA</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-white/15 text-sm">
            <span className="text-slate-200">Delivery Formats</span>
            <span className="font-bold text-white">SCORM, xAPI, XML, DITA, EPUB3</span>
          </div>
          <div className="flex items-center justify-between py-2 text-sm">
            <span className="text-slate-200">Engagement Models</span>
            <span className="font-bold text-white">Fixed-Scope, Batch, or Staff Aug</span>
          </div>
        </div>
      </div>
    </section>
  );
}
