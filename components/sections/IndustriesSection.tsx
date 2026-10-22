import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { industriesData } from "@/lib/industries-data";

const industryImages: Record<string, string> = {
  "educational-publishers": "/images/image 187.png",
  "k12-schools": "/images/K-12-Schools-Districts-1.png",
  "edtech": "/images/Interactive EdTech Learning Dashboard.png",
  "universities": "/images/Collaborative Study on Campus.png",
  "corporate-learning": "/images/Corporate Learning Team Workshop.png",
  "training-providers": "/images/Training Organisations.png",
};

const containImages = new Set<string>([]);

export default function IndustriesSection() {
  return (
    <section className="section-py bg-[var(--surface)]" aria-labelledby="industries-heading">
      <div className="container">
        <div className="max-w-2xl mb-9"><SectionLabel>Who we work with</SectionLabel><h2 id="industries-heading">Made for the people shaping learning</h2></div>
        <div className="industry-grid">
          {industriesData.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="industry-tile group">
              <div className="industry-image-frame">
                <Image
                  src={industryImages[industry.slug] ?? "/images/image 187.png"}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 420px) 100vw, (max-width: 767px) 45vw, (max-width: 1023px) 33vw, 25vw"
                  className={containImages.has(industry.slug) ? "object-contain" : "object-cover"}
                />
              </div>
              <div className="industry-tile__copy"><span>{industry.title}</span><b aria-hidden="true">↗</b></div>
            </Link>
          ))}
        </div>
        <div className="mt-8"><Link href="/industries" className="text-link">Explore all sectors <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
  );
}
