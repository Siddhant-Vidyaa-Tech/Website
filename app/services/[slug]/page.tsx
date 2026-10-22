import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";
import { getServiceBySlug, servicesData } from "@/lib/services-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return service
    ? {
        title: service.metaTitle,
        description: service.metaDescription,
        alternates: { canonical: `https://vidyaa-tech.com/services/${service.slug}` },
      }
    : {};
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
