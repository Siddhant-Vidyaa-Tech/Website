import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyVidyaaSection from "@/components/sections/WhyVidyaaSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { homePageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Vidyaa Tech – EdTech Content, Technology & Learning Solutions",
  description:
    "Vidyaa Tech helps educational publishers, K–12 schools, EdTech companies and universities create high-quality content, assessments, digital learning experiences and technology solutions at scale.",
  alternates: { canonical: "https://vidyaa-tech.com" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchema} />
      <PageLayout>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyVidyaaSection />
        <ProcessSection />
        <CaseStudiesSection />
        <CtaSection />
      </PageLayout>
    </>
  );
}
