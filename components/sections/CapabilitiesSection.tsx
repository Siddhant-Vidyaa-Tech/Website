"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const techFlow = [
  { 
    label: "Content", 
    icon: "📚",
    description: "Curriculum & material creation",
    color: "bg-[#1313a8]"
  },
  { 
    label: "Assessment", 
    icon: "📝",
    description: "Items & test banks",
    color: "bg-[#2525cf]"
  },
  { 
    label: "E-Learning", 
    icon: "💻",
    description: "Digital experiences",
    color: "bg-[#c62626]"
  },
  { 
    label: "Accessibility", 
    icon: "♿",
    description: "WCAG 2.2 AA compliant",
    color: "bg-[#059669]"
  },
  { 
    label: "QA", 
    icon: "✅",
    description: "Multi-stage testing",
    color: "bg-[#1a22b8]"
  },
  { 
    label: "Delivery", 
    icon: "🚀",
    description: "Platform-ready output",
    color: "bg-[#c62626]"
  },
];

export default function CapabilitiesSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-py bg-[var(--surface-alt)]" aria-labelledby="capabilities-heading">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <SectionLabel>Technology</SectionLabel>
          <h2 id="capabilities-heading" className="mb-2">
            Technology that makes education <span className="text-[var(--secondary)]">delivery smarter</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm">
            An integrated ecosystem from content creation to final delivery
          </p>
        </div>

        {/* Visual technology flow diagram */}
        <div className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techFlow.map((item, idx) => (
              <div 
                key={item.label}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-5 border border-[var(--border)] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                  {/* Icon circle */}
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-[var(--text)] mb-1">{item.label}</h3>
                  <p className="text-xs text-[var(--text-muted)]">{item.description}</p>
                </div>
                
                {/* Arrow connector for mobile */}
                {idx < techFlow.length - 1 && (
                  <div className="lg:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <svg className="w-4 h-4 text-[var(--text-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility highlight */}
        <div className={`mt-10 bg-gradient-to-r from-[#059669] to-[#10b981] rounded-2xl p-6 md:p-8 text-white transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Accessibility Built In</h3>
                <p className="text-white/80 text-sm">Every deliverable meets WCAG 2.2 AA standards as standard</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">WCAG 2.2</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Section 508</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">PDF/UA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}