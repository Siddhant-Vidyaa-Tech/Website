"use client";

import { useState } from "react";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  budget: string;
  source: string;
}

interface FormErrors {
  [key: string]: string;
}

const services = [
  "Curriculum Design",
  "Content Development",
  "Custom Assessment Creation",
  "E-Learning Solutions",
  "Editorial & Production",
  "Digital Accessibility",
  "Interactive Content",
  "Educational Video Production",
  "TDX / Content Migration",
  "Quality Assurance & Testing",
  "IT Solutions",
  "Talent & Staffing",
  "Multiple Services / Not Sure",
];

const budgets = [
  "Under £10,000",
  "£10,000 – £25,000",
  "£25,000 – £50,000",
  "£50,000 – £100,000",
  "Over £100,000",
  "Prefer not to say",
];

const sources = [
  "Search engine (Google, Bing, etc.)",
  "LinkedIn",
  "Referral from a colleague",
  "Industry event or conference",
  "Social media",
  "Other",
];

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  description: "",
  budget: "",
  source: "",
};

function buildMailtoHref(form: FormState) {
  return `mailto:hello@vidyaa-tech.com?subject=${encodeURIComponent(
    `Website enquiry: ${form.service || "New project"}`
  )}&body=${encodeURIComponent(
    [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : "",
      `Service: ${form.service}`,
      form.budget ? `Budget: ${form.budget}` : "",
      form.source ? `Source: ${form.source}` : "",
      "",
      form.description,
    ]
      .filter(Boolean)
      .join("\n")
  )}`;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Your name is required.";
    if (!form.company.trim()) newErrors.company = "Company name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.service) newErrors.service = "Please select a service.";
    if (!form.description.trim()) newErrors.description = "A brief project description is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (result.error === "not_configured") {
        window.location.href = buildMailtoHref(form);
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const mailtoHref = buildMailtoHref(form);

  if (status === "success") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="bg-[var(--surface)] border border-green-200 rounded-xl p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[var(--text)] mb-3">
          Message Received — Thank You
        </h3>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-md mx-auto">
          A member of our team will review your message and respond within one business day.
          We look forward to learning about your project.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-6"
    >
      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="form-label">
            Full Name <span aria-hidden="true" className="text-[var(--error)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? "error" : ""}`}
            placeholder="Your full name"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" className="form-error" role="alert">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="form-label">
            Company / Organisation <span aria-hidden="true" className="text-[var(--error)]">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            className={`form-input ${errors.company ? "error" : ""}`}
            placeholder="Your organisation"
            aria-required="true"
            aria-describedby={errors.company ? "company-error" : undefined}
            aria-invalid={!!errors.company}
          />
          {errors.company && (
            <p id="company-error" className="form-error" role="alert">{errors.company}</p>
          )}
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="form-label">
            Email Address <span aria-hidden="true" className="text-[var(--error)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? "error" : ""}`}
            placeholder="you@organisation.com"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className="form-error" role="alert">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-[var(--text-light)] font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="+44 (0) 000 000 0000"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="form-label">
          Service of Interest <span aria-hidden="true" className="text-[var(--error)]">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`form-input ${errors.service ? "error" : ""}`}
          aria-required="true"
          aria-describedby={errors.service ? "service-error" : undefined}
          aria-invalid={!!errors.service}
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="form-error" role="alert">{errors.service}</p>
        )}
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="description" className="form-label">
          Project Description <span aria-hidden="true" className="text-[var(--error)]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={form.description}
          onChange={handleChange}
          className={`form-input resize-y min-h-[120px] ${errors.description ? "error" : ""}`}
          placeholder="Tell us about your project—what you are building, the scope, your timelines and any specific requirements."
          aria-required="true"
          aria-describedby={errors.description ? "description-error" : undefined}
          aria-invalid={!!errors.description}
        />
        {errors.description && (
          <p id="description-error" className="form-error" role="alert">{errors.description}</p>
        )}
      </div>

      {/* Budget + Source */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className="form-label">
            Budget / Scope <span className="text-[var(--text-light)] font-normal">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a range…</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="source" className="form-label">
            How Did You Hear About Us? <span className="text-[var(--text-light)] font-normal">(optional)</span>
          </label>
          <select
            id="source"
            name="source"
            value={form.source}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select…</option>
            {sources.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Privacy note */}
      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
        By submitting this form you agree to Vidyaa Tech processing your data to respond to your enquiry.
        Read our{" "}
        <a href="/privacy-policy" className="text-[var(--secondary)] hover:underline">Privacy Policy</a>.
        Required fields are marked <span aria-hidden="true" className="text-[var(--error)]">*</span>
      </p>

      {status === "error" && (
        <p id="form-submit-error" className="form-error" role="alert">
          We could not send your message automatically. Please email{" "}
          <a href={mailtoHref} className="text-[var(--secondary)] hover:underline">
            hello@vidyaa-tech.com
          </a>{" "}
          and we will respond within one business day.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary btn-lg w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        aria-busy={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
