"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "E-learning solutions",
    title: "Digital learning that moves education forward.",
    description:
      "Create engaging, accessible learning experiences with interactive content, courseware, educational video and thoughtful instructional design.",
    image: "/images/image 186.png",
    imageAlt: "Digital learning experience designed to make educational content engaging and accessible",
    fit: "contain",
    primaryLabel: "Explore e-learning",
    primaryHref: "/services/e-learning-solutions",
    note: "Interactive content · Courseware · Video",
  },
  {
    eyebrow: "IT solutions",
    title: "Technology designed around better learning.",
    description:
      "Connect platforms, workflows and content operations with practical technology support built for education teams and evolving learning needs.",
    image: "/images/it-solutions.png",
    imageAlt: "Technology solutions supporting digital education and learning operations",
    fit: "contain",
    primaryLabel: "Explore IT solutions",
    primaryHref: "/services/it-solutions",
    note: "Platforms · Migration · QA",
  },
  {
    eyebrow: "Talent & staffing solutions",
    title: "The right expertise for every learning project.",
    description:
      "Extend your team with education, content, editorial, technology and production specialists who can support delivery at scale.",
    image: "/images/1536x1040_Office_snapshot_Q1_2024 1.png",
    imageAlt: "Professionals collaborating in a modern office environment",
    fit: "cover",
    primaryLabel: "Explore talent solutions",
    primaryHref: "/services/talent-staffing",
    note: "Specialist talent · Flexible delivery · Team support",
  },
] as const;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
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
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="container py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 items-center">
          <div className="lg:col-span-5 z-10">
            <div className="hero-carousel__eyebrow">
              <span className="hero-carousel__eyebrow-dot" aria-hidden="true" />
              {slide.eyebrow}
            </div>
            <h1 key={slide.title} className="hero-title mt-4 mb-5 animate-fade-up">
              {slide.title}
            </h1>
            <p key={slide.description} className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-7 max-w-lg hero-carousel__description animate-fade-up">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8 hero-carousel__actions">
              <Link href={slide.primaryHref} className="btn btn-primary btn-lg">
                {slide.primaryLabel}
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact-us" className="btn btn-outline btn-lg">
                Talk to our team
              </Link>
            </div>
            <div className="hero-signals" aria-label="Our areas of expertise">
              <span>Curriculum</span>
              <span>Assessment</span>
              <span>Digital learning</span>
              <span>Accessibility</span>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-w-0">
            <div className="hero-visual hero-carousel__visual relative w-full aspect-[3/2] bg-white rounded-xl overflow-hidden">
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
                    sizes="(max-width: 1023px) 100vw, (max-width: 1350px) 56vw, 680px"
                    className={item.fit === "contain" ? "hero-carousel__image hero-carousel__image--contain" : "hero-carousel__image hero-carousel__image--cover"}
                  />
                </div>
              ))}
              <div className="hero-carousel__image-note" aria-live="off">
                <span className="hero-carousel__note-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8 12 2.5 2.5L16 9" />
                  </svg>
                </span>
                <span>
                  <strong>{slide.eyebrow}</strong>
                  <small>{slide.note}</small>
                </span>
              </div>
            </div>

            <div className="hero-carousel__toolbar">
              <span className="hero-carousel__count" aria-hidden="true">
                <strong>{String(activeSlide + 1).padStart(2, "0")}</strong> / {String(slides.length).padStart(2, "0")}
              </span>
              <div className="hero-carousel__dots" role="group" aria-label="Choose featured solution">
                {slides.map((item, index) => (
                  <button
                    key={item.eyebrow}
                    type="button"
                    className={"hero-carousel__dot " + (activeSlide === index ? "is-active" : "")}
                    onClick={() => showSlide(index)}
                    aria-label={"Show " + item.eyebrow}
                    aria-pressed={activeSlide === index}
                  />
                ))}
              </div>
              <div className="hero-carousel__arrows">
                <button
                  type="button"
                  className="hero-carousel__pause"
                  onClick={() => setPaused((value) => !value)}
                  aria-label={paused ? "Resume automatic slide rotation" : "Pause automatic slide rotation"}
                  aria-pressed={paused}
                >
                  {paused ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m9 5 10 7-10 7V5Z" /></svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5v14M15 5v14" /></svg>
                  )}
                </button>
                <button type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous solution">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" /></svg>
                </button>
                <button type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="Next solution">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
