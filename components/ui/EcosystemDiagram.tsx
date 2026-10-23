import Image from "next/image";

export default function EcosystemDiagram({
  className = "",
  variant = "circle",
}: {
  className?: string;
  variant?: "circle" | "action";
}) {
  const src =
    variant === "circle"
      ? "/images/Vidyaa Tech Ecosystem Infographic (1) - transparent.png"
      : "/images/EdTech Expertise in Action.png";

  return (
    <div className={`relative w-full aspect-square max-w-[520px] mx-auto ${className}`}>
      <Image
        src={src}
        alt="The Vidyaa Tech Connected Ecosystem — Curriculum, Content, Assessment, E-Learning, Accessibility, Technology, and Delivery"
        fill
        sizes="(max-width: 767px) 90vw, 500px"
        className="object-contain p-3"
      />
    </div>
  );
}
