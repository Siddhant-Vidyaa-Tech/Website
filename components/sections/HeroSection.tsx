import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section bg-[var(--surface)]" aria-label="Hero">
      <div className="container py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 z-10">
            <span className="section-label">Education · Content · Technology</span>
            <h1 className="hero-title text-[var(--primary)] mt-3 mb-5">Better learning, <span>built together.</span></h1>
            <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-7 max-w-lg">
              For publishers, schools, universities and EdTech teams, we bring curriculum, assessment, digital learning and technology together—with accessibility and quality built in.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/contact-us" className="btn btn-primary btn-lg">
                Let&apos;s Talk
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg">Explore Services</Link>
            </div>
            <div className="hero-signals" aria-label="Our areas of expertise">
              <span>Curriculum</span><span>Assessment</span><span>Digital learning</span><span>Accessibility</span>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="hero-visual relative w-full aspect-[3/2] bg-white rounded-xl overflow-hidden">
              <Image src="/images/Hero Image.png" alt="Original illustration of a connected digital learning experience, with a course, assessment, progress and learning analytics" fill sizes="(max-width: 1023px) 100vw, (max-width: 1350px) 52vw, 640px" className="object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
