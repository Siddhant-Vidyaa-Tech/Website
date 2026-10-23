import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const capabilities = [
  {
    slug: "content-development",
    title: "Content",
    image: "/images/service-curriculum.png",
    imageAlt: "Curriculum and educational content materials",
    summary:
      "Curriculum, subject matter and editorial expertise for learning at every stage.",
    services: [
      "Curriculum design",
      "Editorial production",
      "Digital accessibility",
    ],
  },
  {
    slug: "custom-assessment-creation",
    title: "Assessment",
    image: "/images/service-assessment.png",
    imageAlt: "Assessment materials and learning questions",
    summary:
      "Assessment programmes that measure progress and support better decisions.",
    services: ["Item writing", "Test banks", "Measurement"],
  },
  {
    slug: "e-learning-solutions",
    title: "E-learning",
    image: "/images/service-migration.png",
    imageAlt: "Digital course and interactive learning experience",
    summary:
      "Accessible digital courses and interactive experiences built for real learners.",
    services: [
      "Course development",
      "Interactive content",
      "Educational video",
    ],
  },
  {
    slug: "it-solutions",
    title: "Technology",
    image: "/images/Digital Learning & Courseware Development.png",
    imageAlt: "Digital learning and courseware technology",
    summary:
      "Education focused platforms, integrations and delivery operations.",
    services: [
      "Learning platforms",
      "Migration",
      "Quality assurance",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      className="section-py capabilities-section"
      aria-labelledby="capabilities-heading"
    >
      <div className="container capabilities-section__container">
        <div className="capabilities-section__header">
          <div className="capabilities-section__intro">
            <SectionLabel>Our capabilities</SectionLabel>
            <h2 id="capabilities-heading" className="capabilities-section__heading">
              Four connected capabilities. One learning partner.
            </h2>
          </div>
          <Link href="/services" className="capabilities-section__cta">
            Explore all services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="capabilities-section__grid">
          {capabilities.map((capability, index) => (
            <Link
              key={capability.slug}
              href={`/services/${capability.slug}`}
              className="capabilities-section__card"
            >
              <div className="capabilities-section__image-wrap">
                <Image
                  src={capability.image}
                  alt={capability.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="capabilities-section__image"
                />
                <span className="capabilities-section__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="capabilities-section__card-copy">
                <h3 className="capabilities-section__card-title">
                  {capability.title}
                </h3>
                <p className="capabilities-section__summary">
                  {capability.summary}
                </p>
                <ul className="capabilities-section__service-list" aria-label={`${capability.title} services`}>
                  {capability.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
                <span className="capabilities-section__explore">
                  Explore capability <b aria-hidden="true">↗</b>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="capabilities-section__more">
          <p>
            Specialist teams support each stage, from design and production to
            delivery.
          </p>
          <Link href="/services" className="capabilities-section__more-link">
            See all services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
