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
        <div className="industries-section__header mb-8 max-w-2xl">
          <SectionLabel>Who we work with</SectionLabel>
          <h2 id="industries-heading" className="mt-2">
            Made for the people shaping learning
          </h2>
        </div>

        <div className="industry-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industriesData.map((industry) => {
            const visual = industryVisuals[industry.slug] ?? fallbackVisual;

            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="industry-tile group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div
                  className="industry-image-frame relative w-full aspect-[16/10] overflow-hidden bg-slate-100"
                  style={{ position: "relative", width: "100%", aspectRatio: "1.68 / 1", overflow: "hidden" }}
                >
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    sizes="(max-width: 560px) calc(100vw - 32px), (max-width: 900px) calc(50vw - 36px), (max-width: 1279px) calc(33vw - 28px), 390px"
                    className="industry-tile__image object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="industry-tile__copy flex items-center justify-between gap-3 px-4 py-3.5 font-bold text-[#0a193b]">
                  <span className="industry-tile__label text-sm md:text-base">
                    {industry.title}
                  </span>
                  <span
                    className="industry-tile__arrow inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-slate-50 text-[#132a6e] group-hover:bg-[#c62626] group-hover:border-[#c62626] group-hover:text-white transition-colors shrink-0"
                    style={{ width: "32px", height: "32px", flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <svg
                      width="15"
                      height="15"
                      className="w-3.5 h-3.5"
                      style={{ width: "15px", height: "15px" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="industries-section__footer mt-8">
          <Link href="/industries" className="text-link inline-flex items-center gap-2 font-bold text-[#132a6e] hover:text-[#c62626]">
            Explore all sectors <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
