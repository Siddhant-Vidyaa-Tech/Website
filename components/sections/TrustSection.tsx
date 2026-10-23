import Link from "next/link";

const sectors = [
  { label: "Educational Publishers", href: "/industries/educational-publishers" },
  { label: "K–12 Schools & Districts", href: "/industries/k12-schools" },
  { label: "EdTech Companies", href: "/industries/edtech" },
  { label: "Universities & Higher Ed", href: "/industries/universities" },
  { label: "Corporate Learning", href: "/industries/corporate-learning" },
  { label: "Training Organisations", href: "/industries/training-providers" },
];

export default function TrustSection() {
  return (
    <section className="py-6 bg-white border-b border-[var(--border)]" aria-label="Organisations we support">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent)]">
            Trusted Delivery Partner For
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {sectors.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] hover:bg-blue-50 text-xs font-semibold text-slate-700 hover:text-[var(--primary)] border border-[var(--border)] transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
