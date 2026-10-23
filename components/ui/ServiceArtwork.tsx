import Image from "next/image";

const artwork = {
  "content-development": { eyebrow: "CONTENT STUDIO", title: "Standards-Aligned Instructional Assets", chips: ["Curriculum", "Manuscript", "Visuals"], image: "/images/Content.jpg" },
  "curriculum-design": { eyebrow: "LEARNING ARCHITECTURE", title: "Scope, Sequence & Progressions", chips: ["Objectives", "Modules", "Outcomes"], image: "/images/service-curriculum.png" },
  "custom-assessment-creation": { eyebrow: "ASSESSMENT BUILDER", title: "Psychometric & TEI Item Banks", chips: ["MCQ", "HOTS", "Rubrics"], image: "/images/Assessment.png" },
  "e-learning-solutions": { eyebrow: "DIGITAL LEARNING", title: "SCORM, xAPI & Responsive Courseware", chips: ["SCORM", "Activity", "Multi-device"], image: "/images/Interactive EdTech Learning Dashboard.png" },
  "editorial-production": { eyebrow: "EDITORIAL WORKFLOW", title: "Copyediting, Proofing & Rights", chips: ["Copyedit", "Design", "Print/Digital"], image: "/images/service-editorial.png" },
  "digital-accessibility": { eyebrow: "ACCESSIBILITY CHECK", title: "WCAG 2.2 AA & PDF/UA Compliance", chips: ["Alt Text", "Keyboard", "Screen Reader"], image: "/images/service-accessibility.png" },
  "interactive-content": { eyebrow: "INTERACTIVE LESSON", title: "Simulations, Labs & Gamified Flows", chips: ["Explore", "Simulate", "Reflect"], image: "/images/service-interactive.png" },
  "educational-video-production": { eyebrow: "VIDEO PRODUCTION", title: "Storyboard to Broadcast Animation", chips: ["Script", "Animate", "Captions"], image: "/images/service-video.png" },
  "tdx-migration": { eyebrow: "CONTENT TRANSFORMATION", title: "Legacy Print/PDF to XML, DITA & HTML5", chips: ["Source", "XML/HTML5", "Validate"], image: "/images/service-migration.png" },
  "quality-assurance": { eyebrow: "QUALITY REVIEW", title: "Pedagogical, Functional & Device QA", chips: ["Accuracy", "Cross-Device", "WCAG QA"], image: "/images/service-artwork__screen.png" },
  "it-solutions": { eyebrow: "LEARNING TECHNOLOGY", title: "LMS Integration & Platform Engineering", chips: ["LMS/CMS", "APIs", "Cloud Ops"], image: "/images/Digital Learning & Courseware Development.png" },
  "talent-staffing": { eyebrow: "SPECIALIST NETWORK", title: "Vetted Educators, IDs & Editors", chips: ["SMEs", "Instructional Design", "Editorial"], image: "/images/staffing-recruiting.jpg" },
} as const;

type ServiceArtworkProps = { slug: string; className?: string; compact?: boolean };

export default function ServiceArtwork({ slug, className = "", compact = false }: ServiceArtworkProps) {
  const item = artwork[slug as keyof typeof artwork] ?? artwork["content-development"];

  return (
    <div
      className={`service-artwork ${compact ? "service-artwork--compact" : ""} ${className}`}
      data-slug={slug}
      aria-label={`${item.eyebrow}: ${item.title}`}
      role="img"
    >
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900/95 text-white text-[10px] font-bold tracking-wider uppercase">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          {item.eyebrow}
        </span>
        <div className="flex gap-1">
          {item.chips.map((chip) => (
            <span key={chip} className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-semibold text-slate-200">
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="service-artwork__screen">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 767px) 90vw, 35vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
