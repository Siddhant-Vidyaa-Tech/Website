"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: "elearning",
    tabLabel: "01 · E-Learning & Courseware",
    eyebrow: "E-Learning & Digital Courseware",
    title: "Digital learning that moves education forward.",
    description:
      "Create engaging, WCAG 2.2 AA accessible learning experiences with interactive HTML5 courseware, SCORM/xAPI modules, educational video, and evidence-based instructional design.",
    image: "/images/Interactive EdTech Learning Dashboard.png",
    imageAlt: "Interactive EdTech learning dashboard across laptop, tablet, and mobile devices",
    fit: "cover",
    primaryLabel: "Explore E-Learning Solutions",
    primaryHref: "/services/e-learning-solutions",
    badgeTitle: "Multi-Device SCORM & HTML5",
    badgeNote: "Interactive modules · Video · WCAG 2.2 AA",
  },
  {
    id: "curriculum",
    tabLabel: "02 · Curriculum & Assessment",
    eyebrow: "Curriculum, Content & Assessment",
    title: "Standards-aligned content built for real classrooms.",
    description:
      "Partner with subject-matter educators, psychometric item writers, and editorial specialists to deliver K–12, higher-ed, and publishing programmes at volume.",
    image: "/images/Hero Image.png",
    imageAlt: "Educator guiding students with books and digital tablets in a modern classroom",
    fit: "cover",
    primaryLabel: "Explore Content & Assessment",
    primaryHref: "/services/curriculum-design",
    badgeTitle: "Full-Curriculum Coverage",
    badgeNote: "Common Core · NGSS · IB · Custom Item Banks",
  },
  {
    id: "technology",
    tabLabel: "03 · Technology & Talent",
    eyebrow: "Technology, Migration & Specialist Talent",
    title: "Scale your learning operations with confidence.",
    description:
      "Modernise legacy libraries into structured XML/HTML5, integrate LMS platforms, and extend your team with vetted instructional designers, editors, and QA engineers.",
    image: "/images/office-snapshot.png",
    imageAlt: "Vidyaa Tech specialist team collaborating on digital learning delivery",
    fit: "cover",
    primaryLabel: "Explore IT & Talent Solutions",
    primaryHref: "/services/it-solutions",
    badgeTitle: "End-to-End Delivery Partner",
    badgeNote: "TDX Migration · Multi-Stage QA · Specialist Staffing",
  },
] as const;

const heroMetrics = [
  { value: "12", label: "Specialist EdTech Services" },
  { value: "WCAG 2.2", label: "Level AA Accessibility Built In" },
  { value: "6-Stage", label: "Editorial & Technical QA Pipeline" },
  { value: "< 24h", label: "Specialist Team Response" },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const paused = manualPaused || interactionPaused;
  const slide = slides[activeSlide];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section
      className="hero-section hero-carousel"
      aria-label="Featured Vidyaa Tech solutions"
      aria-roledescription="carousel"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setInteractionPaused(false);
        }
      }}
    >
      <div className="container py-12 md:py-16 lg:py-20">
        {/* Interactive Pillar Switcher Bar */}
        <div
          className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-slate-200/80"
          role="tablist"
          aria-label="Solution pillars"
        >
          {slides.map((item, index) => {
            const active = activeSlide === index;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => showSlide(index)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  active
                    ? "bg-[var(--primary-dark)] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {item.tabLabel}
              </button>
            );
          })}
          <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
            WCAG 2.2 AA &amp; Section 508 Ready
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 z-10">
            <div className="min-h-[260px] flex flex-col justify-center" aria-live={paused ? "polite" : "off"} aria-atomic="true">
              <span className="section-label">{slide.eyebrow}</span>
              <h1 className="hero-title mt-2 mb-5">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-xl">
                {slide.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-8">
              <Link href={slide.primaryHref} className="btn btn-primary btn-lg">
                {slide.primaryLabel}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact-us" className="btn btn-outline btn-lg">
                Request a Consultation
              </Link>
            </div>

            {/* Key Trust Proof Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
              {heroMetrics.map((m) => (
                <div key={m.label} className="bg-white/90 border border-slate-200/80 rounded-xl p-3">
                  <div className="text-lg font-extrabold text-[var(--primary-dark)] leading-tight">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative min-w-0">
            <div className="hero-carousel__visual">
              {slides.map((item, index) => (
                <div
                  key={item.image}
                  className={"hero-carousel__image-layer " + (activeSlide === index ? "is-active" : "")}
                  aria-hidden={activeSlide !== index}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1023px) 100vw, 620px"
                    className="hero-carousel__image hero-carousel__image--cover"
                  />
                </div>
              ))}
              <div className="hero-carousel__image-note">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-red-50 text-[var(--accent)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8 12 2.5 2.5L16 9" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </span>
                  <div>
                    <strong className="block text-sm font-bold text-slate-900">{slide.badgeTitle}</strong>
                    <small className="block text-xs text-slate-600">{slide.badgeNote}</small>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setManualPaused((v) => !v)}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100"
                    aria-label={manualPaused ? "Resume slide rotation" : "Pause slide rotation"}
                    aria-pressed={manualPaused}
                  >
                    {manualPaused ? "▶" : "❚❚"}
                  </button>
                  <button
                    type="button"
                    onClick={() => showSlide(activeSlide - 1)}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100"
                    aria-label="Previous slide"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => showSlide(activeSlide + 1)}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100"
                    aria-label="Next slide"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
