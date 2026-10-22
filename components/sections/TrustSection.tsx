import Image from "next/image";

const audiences = ["Educational publishers", "K–12 schools", "EdTech companies", "Universities", "Learning organisations"];

const clientLogos = Array.from({ length: 15 }, (_, i) => `/images/clients/client-${i + 1}.png`);

export default function TrustSection() {
  return (
    <section className="py-10 bg-white border-b border-[var(--border)]" aria-label="Organisations we support">
      <div className="container">
        <div className="audience-strip mb-6 justify-center">
          <span className="audience-strip__label">Supporting</span>
          {audiences.map((name) => (
            <span className="audience-strip__item" key={name}>{name}</span>
          ))}
        </div>
        
        {/* Trusted By Client Logos */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-[var(--text-light)] mb-5">
            Trusted by education leaders and innovators
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {clientLogos.map((logo, index) => (
              <div key={index} className="relative h-8 w-24 md:w-28 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
