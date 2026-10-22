import SectionLabel from "@/components/ui/SectionLabel";

// Placeholder testimonials – replace with real quotes when available
const testimonials = [
  {
    quote:
      "Placeholder testimonial: Vidyaa Tech delivered exactly what we needed—high-quality, standards-aligned content at a scale we couldn't manage in-house.",
    name: "[Client Name]",
    title: "[Title, Organisation]",
    initials: "CN",
  },
  {
    quote:
      "Placeholder testimonial: The team's understanding of educational content requirements was exceptional. Their QA process gave us real confidence in the final deliverables.",
    name: "[Client Name]",
    title: "[Title, Organisation]",
    initials: "CN",
  },
  {
    quote:
      "Placeholder testimonial: Working with Vidyaa Tech on our accessibility compliance project was seamless. They understood the regulatory requirements and delivered ahead of schedule.",
    name: "[Client Name]",
    title: "[Title, Organisation]",
    initials: "CN",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-[var(--primary-dark)]" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-12">
          <SectionLabel light>Client Feedback</SectionLabel>
          <h2 id="testimonials-heading" className="text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-white/60 text-sm">
            Testimonials will be added as client relationships develop. The placeholders below show the intended format.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-7 flex flex-col"
            >
              {/* Quote mark */}
              <svg
                className="w-8 h-8 text-[var(--accent)] mb-4 opacity-70"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-white/80 text-sm leading-relaxed flex-1 italic mb-6">
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-[var(--secondary)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
