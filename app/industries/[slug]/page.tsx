import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageTemplate from "@/components/ui/IndustryPageTemplate";
import { getIndustryBySlug, industriesData } from "@/lib/industries-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return industriesData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  return industry ? {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `https://vidyaa-tech.com/industries/${industry.slug}` },
  } : {};
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryPageTemplate industry={industry} />;
}
