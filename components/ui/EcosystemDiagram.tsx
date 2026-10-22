import Image from "next/image";

export default function EcosystemDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <Image
        src="/images/EdTech Expertise in Action.png"
        alt="EdTech Expertise in Action — Education Expertise, Content Development, Technology Solutions, and Quality Assurance"
        width={1536}
        height={1024}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
        className="w-full h-auto object-contain mx-auto display-block"
        priority
      />
    </div>
  );
}
