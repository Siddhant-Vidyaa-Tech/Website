"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const capabilities = [
  {
    number: "01",
    category: "CONTENT",
    title: "Content",
    description: "Curriculum design, development & editorial production",
    href: "/services/content-development",
    gradient: "from-[#0a0b6c] to-[#1313a8]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    number: "02",
    category: "ASSESSMENT",
    title: "Assessment",
    description: "Custom items, test banks & validated tools",
    href: "/services/custom-assessment-creation",
    gradient: "from-[#1313a8] to-[#2525cf]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    category: "TECHNOLOGY",
    title: "Technology",
    description: "E-learning, migration, QA & delivery at scale",
    href: "/services/e-learning-solutions",
    gradient: "from-[#c62626] to-[#e03b3b]",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function WhatWeDoSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-py bg-[var(--background)]" 
      aria-labelledby="what-we-do-heading"
    >
      <div className="container">
        {/* Header - concise */}
        <div className="max-w-2xl mb-12">
          <SectionLabel>Our Capabilities</SectionLabel>
          <h2 id="what-we-do-heading" className="mb-3">
            Education expertise, delivered at <span className="text-[var(--secondary)]">scale</span>.
          </h2>
          <p className="text-[var(--text-muted)] text-base max-w-lg">
            Three integrated capabilities that power better learning experiences.
          </p>
        </div>

        {/* Visual capability blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <Link
              key={cap.category}
              href={cap.href}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} p-8 pt-12`}>
                {/* Number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/10">
                  {cap.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-white/80 text-sm">{cap.description}</p>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}