import Link from "next/link";
import EcosystemDiagram from "@/components/ui/EcosystemDiagram";

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
  body = "Have an education project in mind? Tell us what you’re building.",
  primaryLabel = "Let’s Talk",
  primaryHref = "/contact-us",
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="cta-section" aria-label="Call to action">
      <div className="container cta-layout">
        <div>
          <span className="cta-eyebrow">A partner from idea to delivery</span>
          <h2>{headline}</h2>
          <p>{body}</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link href={primaryHref} className="btn btn-primary btn-lg">{primaryLabel}<span aria-hidden="true">→</span></Link>
            {secondaryLabel && secondaryHref && <Link href={secondaryHref} className="btn cta-secondary btn-lg">{secondaryLabel}</Link>}
          </div>
        </div>
        <div className="cta-diagram"><EcosystemDiagram className="ecosystem-diagram" /></div>
      </div>
    </section>
  );
}
