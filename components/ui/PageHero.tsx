import SectionLabel from "./SectionLabel";
import type { ReactNode } from "react";

interface PageHeroProps {
  label?: string;
  headline: string;
  subtitle?: string;
  variant?: "navy" | "light";
  visual?: ReactNode;
}

export default function PageHero({ label, headline, subtitle, variant = "navy", visual }: PageHeroProps) {
  const isNavy = variant === "navy";
  return (
    <section
      className={`relative overflow-hidden py-16 md:py-20 ${
        visual ? "bg-[var(--surface)] page-hero--visual" : isNavy ? "bg-[var(--primary)]" : "bg-[var(--surface)]"
      }`}
      aria-label="Page header"
    >
      {/* Subtle background pattern */}
      {!visual && <div className="absolute inset-0 hero-grid-pattern opacity-50" aria-hidden="true" />}
      {!visual && <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white opacity-[0.03] pointer-events-none" aria-hidden="true" />}

      <div className={`container relative ${visual ? "page-hero-grid" : ""}`}>
        <div>
          {label && <SectionLabel light={isNavy && !visual}>{label}</SectionLabel>}
          <h1 className={`max-w-3xl mt-2 mb-4 ${isNavy && !visual ? "text-white" : "text-[var(--text)]"}`}>
            {headline}
          </h1>
          {subtitle && (
            <p className={`text-lg max-w-2xl leading-relaxed ${isNavy && !visual ? "text-white/70" : "text-[var(--text-muted)]"}`}>
              {subtitle}
            </p>
          )}
        </div>
        {visual && <div className="page-hero-visual">{visual}</div>}
      </div>
    </section>
  );
}
