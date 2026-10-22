import Image from "next/image";

export default function EcosystemDiagram({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`ecosystem-diagram relative w-full ${className}`}>
      <Image
        src="/images/EdTech Expertise in Action.png"
        alt="EdTech Expertise in Action — Education Expertise, Content Development, Technology Solutions, and Quality Assurance"
        fill
        sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) 90vw, (max-width: 1400px) 48vw, 650px"
        className="ecosystem-diagram__image"
        priority
      />
    </div>
  );
}
