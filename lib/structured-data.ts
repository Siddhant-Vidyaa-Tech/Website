const BASE = "https://vidyaa-tech.com";

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: "Vidyaa Tech",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/images/vidyaa-social-preview.jpg`,
  },
  description:
    "Vidyaa Tech is an EdTech services and technology company helping educational publishers, K–12 schools, EdTech companies and universities create high-quality content, assessments, digital learning experiences and technology solutions at scale.",
  email: "hello@vidyaa-tech.com",
  sameAs: [
    "https://www.linkedin.com/company/vidyaa-tech",
    "https://twitter.com/vidyaatech",
  ],
  knowsAbout: [
    "Educational Content Development",
    "Curriculum Design",
    "Custom Assessment Creation",
    "E-Learning Development",
    "Digital Accessibility",
    "EdTech Services",
    "Educational Technology",
    "K-12 Education",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Vidyaa Tech",
  description: "EdTech services and technology for educational publishers, schools and learning organisations.",
  publisher: { "@id": `${BASE}/#organization` },
};

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}/#webpage`,
  url: BASE,
  name: "Vidyaa Tech – EdTech Content, Technology & Learning Solutions",
  description:
    "Vidyaa Tech helps educational publishers, K–12 schools, EdTech companies and universities create high-quality content, assessments, digital learning experiences and technology solutions at scale.",
  isPartOf: { "@id": `${BASE}/#website` },
  about: { "@id": `${BASE}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@id": BASE, name: "Home" } },
    ],
  },
};

export function serviceSchema(slug: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/services/${slug}#service`,
    name,
    description,
    provider: { "@id": `${BASE}/#organization` },
    url: `${BASE}/services/${slug}`,
    serviceType: name,
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Educational Publishers, Schools, EdTech Companies, Universities",
    },
  };
}

export function industryPageSchema(
  slug: string,
  name: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE}/industries/${slug}#webpage`,
    url: `${BASE}/industries/${slug}`,
    name,
    description,
    isPartOf: { "@id": `${BASE}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@id": BASE, name: "Home" } },
        { "@type": "ListItem", position: 2, item: { "@id": `${BASE}/industries`, name: "Industries" } },
        { "@type": "ListItem", position: 3, item: { "@id": `${BASE}/industries/${slug}`, name } },
      ],
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@id": `${BASE}${item.href}`, name: item.name },
    })),
  };
}
