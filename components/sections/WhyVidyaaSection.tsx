import SectionLabel from "@/components/ui/SectionLabel";
import EcosystemDiagram from "@/components/ui/EcosystemDiagram";

const principles = ["Education expertise", "Scalable delivery", "Quality at every stage", "Technology-enabled workflows"];

export default function WhyVidyaaSection() {
  return (
    <section className="section-py bg-white" aria-labelledby="why-vidyaa-heading">
      <div className="container">
        <div className="ecosystem-layout">
          <div className="ecosystem-copy">
            <SectionLabel>One connected partner</SectionLabel>
            <h2 id="why-vidyaa-heading">Better learning happens when every part works together.</h2>
            <p>We connect educational expertise with thoughtful content and technology, from early design through quality review and delivery.</p>
            <ul>{principles.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          </div>
          <div className="ecosystem-visual"><EcosystemDiagram className="ecosystem-diagram" /></div>
        </div>
      </div>
    </section>
  );
}
