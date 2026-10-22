import Image from "next/image";
const artwork = {
  "content-development": { eyebrow: "CONTENT STUDIO", title: "A lesson takes shape", chips: ["Curriculum", "Manuscript", "Visuals"], image: "/images/Content.jpg" },
  "curriculum-design": { eyebrow: "LEARNING ARCHITECTURE", title: "From goals to outcomes", chips: ["Objectives", "Modules", "Outcomes"], image: "/images/service-curriculum.png" },
  "custom-assessment-creation": { eyebrow: "ASSESSMENT BUILDER", title: "Check for understanding", chips: ["MCQ", "HOTS", "Performance"], image: "/images/service-assessment.png" },
  "e-learning-solutions": { eyebrow: "DIGITAL LEARNING", title: "A course in progress", chips: ["Video", "Activity", "Progress"], image: "/images/service-elearning-crop.png" },
  "editorial-production": { eyebrow: "EDITORIAL WORKFLOW", title: "Clear at every stage", chips: ["Edit", "Design", "Quality"], image: "/images/service-editorial.png" },
  "digital-accessibility": { eyebrow: "ACCESSIBILITY CHECK", title: "Designed for everyone", chips: ["Alt text", "Keyboard", "Contrast"], image: "/images/service-accessibility.png" },
  "interactive-content": { eyebrow: "INTERACTIVE LESSON", title: "Explore, try, learn", chips: ["Explore", "Simulate", "Reflect"], image: "/images/service-interactive.png" },
  "educational-video-production": { eyebrow: "VIDEO PRODUCTION", title: "Storyboard to screen", chips: ["Script", "Animate", "Publish"], image: "/images/service-video.png" },
  "tdx-migration": { eyebrow: "CONTENT TRANSFORMATION", title: "Ready for the next platform", chips: ["Source", "Structure", "Deliver"], image: "/images/service-migration.png" },
  "quality-assurance": { eyebrow: "QUALITY REVIEW", title: "Every detail accounted for", chips: ["Accuracy", "Format", "Validate"], image: "/images/service-artwork__screen.png" },
  "it-solutions": { eyebrow: "LEARNING TECHNOLOGY", title: "Connected by design", chips: ["Platform", "Data", "Insights"], image: "/images/it-solutions.png" },
  "talent-staffing": { eyebrow: "SPECIALIST NETWORK", title: "The right expertise, in sync", chips: ["Content", "Learning", "Technology"], image: "/images/service-staffing-crop.png" },
} as const;

type ServiceArtworkProps = { slug: string; className?: string; compact?: boolean };

export default function ServiceArtwork({ slug, className = "", compact = false }: ServiceArtworkProps) {
  const item = artwork[slug as keyof typeof artwork] ?? artwork["content-development"];

  return (
    <div className={`service-artwork ${compact ? "service-artwork--compact" : ""} ${className}`} data-slug={slug} aria-label={`${item.eyebrow}: ${item.title}; ${item.chips.join(", ")}`} role="img">
      <div className="service-artwork__screen">
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 767px) 90vw, 30vw" className="object-contain" />
      </div>
    </div>
  );
}
