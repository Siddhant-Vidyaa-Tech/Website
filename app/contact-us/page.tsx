import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Vidyaa Tech",
  description:
    "Get in touch with Vidyaa Tech to discuss your EdTech project. We specialise in educational content development, e-learning, assessment creation, digital accessibility and more.",
  alternates: { canonical: "https://vidyaa-tech.com/contact-us" },
};

const contactInfo = [
  {
    title: "Email Us",
    value: "hello@vidyaa-tech.com",
    href: "mailto:hello@vidyaa-tech.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Response Time",
    value: "Within 1 business day",
    href: undefined,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/company/vidyaa-tech",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.227 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        label="Contact"
        headline="Let's Talk About Your Project"
        subtitle="Tell us what you are working on. Our team will review your message and respond within one business day."
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      </div>

      <section className="pb-20 contact-page-section" aria-label="Contact information and form">
        <div className="container">
          <div className="contact-page-grid grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="contact-info-card bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
                <h2 className="text-base font-bold text-[var(--text)] mb-5">Get in Touch</h2>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--primary)] bg-opacity-10 flex items-center justify-center text-[var(--secondary)] flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                          {info.title}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium text-[var(--text)] hover:text-[var(--secondary)] transition-colors"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-[var(--text)]">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="contact-next-steps bg-[var(--primary)] rounded-xl p-6 text-white">
                <h3 className="text-base font-bold mb-4">What Happens Next</h3>
                <ol className="space-y-3 text-sm">
                  {[
                    "We review your message and understand your requirements.",
                    "A specialist responds within one business day.",
                    "We schedule a call to explore your project in detail.",
                    "We provide a tailored proposal or approach.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-white/80 leading-snug">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Form */}
            <div className="contact-form-panel lg:col-span-2">
              <h2 className="text-xl font-bold text-[var(--text)] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
