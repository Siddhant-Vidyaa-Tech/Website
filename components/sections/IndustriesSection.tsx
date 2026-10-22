import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { industriesData } from "@/lib/industries-data";

const industryVisuals: Record<string, { src: string; alt: string }> = {
  "educational-publishers": {
    src: "/images/image 187.png",
    alt: "Educational publishing materials and digital learning resources arranged around a laptop",
  },
  "k12-schools": {
    src: "/images/K-12-Schools-Districts-1.png",
    alt: "A primary school classroom with desks, a chalkboard and learning materials",
  },
  edtech: {
    src: "/images/Interactive EdTech Learning Dashboard.png",
    alt: "A digital learning dashboard shown across a laptop, tablet and phone",
  },
  universities: {
    src: "/images/Collaborative Study on Campus.png",
    alt: "University students collaborating on coursework with a laptop on campus",
  },
  "corporate-learning": {
    src: "/images/Corporate Learning Team Workshop.png",
    alt: "A corporate learning team participating in a workshop around a training dashboard",
  },
  "training-providers": {
    src: "/images/Training Organisations.png",
    alt: "A facilitator leading a collaborative training session with colleagues",
  },
};

const fallbackVisual = {
  src: "/images/image 187.png",
  alt: "Educational publishing materials and digital learning resources",
};

export default function IndustriesSection() {
  return (
    <section
      className="section-py bg-[var(--surface)] industries-section"
      aria-labelledby="industries-heading"
    >
      <div className="container">
        <div className="industries-section__header">
          <SectionLabel>Who we work with</SectionLabel>
          <h2 id="industries-heading">Made for the people shaping learning</h2>
        </div>

        <div className="industry-grid">
          {industriesData.map((industry) => {
            const visual = industryVisuals[industry.slug] ?? fallbackVisual;

            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="industry-tile group"
              >
                <div className="industry-image-frame">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    sizes="(max-width: 560px) calc(100vw - 32px), (max-width: 900px) calc(50vw - 36px), (max-width: 1279px) calc(33vw - 28px), 390px"
                    className="industry-tile__image object-cover"
                  />
                </div>

                <div className="industry-tile__copy">
                  <span className="industry-tile__label">{industry.title}</span>
                  <span className="industry-tile__arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="industries-section__footer">
          <Link href="/industries" className="text-link">
            Explore all sectors <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
