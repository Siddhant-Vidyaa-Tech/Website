import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  { number: "01", title: "Understand", description: "Align on learners, goals and constraints." },
  { number: "02", title: "Plan", description: "Shape the scope, milestones and team." },
  { number: "03", title: "Create", description: "Develop the content and experience." },
  { number: "04", title: "Review", description: "Bring subject and editorial expertise." },
  { number: "05", title: "Quality check", description: "Validate accuracy, access and function." },
  { number: "06", title: "Deliver", description: "Prepare final assets for your platform." },
];

export default function ProcessSection() {
  return (
    <section className="section-py process-section" aria-labelledby="process-heading">
      <div className="container">
        <div className="process-heading">
          <SectionLabel>How we work</SectionLabel>
          <h2 id="process-heading">A clear path from brief to delivery</h2>
          <p>One accountable team, with quality built into every stage.</p>
        </div>
        <ol className="process-timeline">
          {steps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
