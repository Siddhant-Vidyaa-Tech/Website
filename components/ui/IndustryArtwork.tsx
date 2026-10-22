import Image from "next/image";

const scenes = {
  "educational-publishers": { label: "PUBLISHING WORKFLOW", title: "Manuscript to learning", tags: ["Editorial", "Digital edition"], iconImage: "/images/industry-publisher.png" },
  "k12-schools": { label: "CLASSROOM LEARNING", title: "Built for real classrooms", tags: ["Teacher-led", "Inclusive"], iconImage: "/images/industry-school.png" },
  edtech: { label: "LEARNING PLATFORM", title: "Content meets product", tags: ["Experience", "Analytics"], iconImage: "/images/Interactive EdTech Learning Dashboard.png" },
  universities: { label: "HIGHER EDUCATION", title: "Learning across disciplines", tags: ["Online course", "Research"], iconImage: "/images/industry-universities.png" },
  "corporate-learning": { label: "WORKFORCE LEARNING", title: "Skills that move forward", tags: ["Learning path", "Progress"], iconImage: "/images/industry-corporate.png" },
  "training-providers": { label: "TRAINING DELIVERY", title: "From practice to progress", tags: ["Practice", "Assessment"], iconImage: "/images/industry-training.png" },
} as const;

export default function IndustryArtwork({ slug, className = "" }: { slug: string; className?: string }) {
  const scene = scenes[slug as keyof typeof scenes] ?? scenes.edtech;
  return (
    <div className={`industry-artwork ${className}`} role="img" aria-label={`${scene.label.toLowerCase()}: ${scene.title}`}>
      <div className="industry-artwork__paper">
        <span>{scene.label}</span>
        <div className="industry-artwork__symbol relative overflow-hidden">
          <Image src={scene.iconImage} alt="" fill sizes="40px" className="object-contain p-0.5" />
        </div>
        <strong>{scene.title}</strong>
        <div className="industry-artwork__lines"><i /><i /><i /></div>
        <div className="industry-artwork__tags">{scene.tags.map((tag) => <b key={tag}>{tag}</b>)}</div>
      </div>
      <div className="industry-artwork__accent" aria-hidden="true" />
    </div>
  );
}
