import type { MetadataRoute } from "next";
import { servicesData } from "@/lib/services-data";
import { industriesData } from "@/lib/industries-data";

const BASE = "https://vidyaa-tech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                   lastModified: now, changeFrequency: "weekly",  priority: 1.0  },
    { url: `${BASE}/about-us`,     lastModified: now, changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/services`,     lastModified: now, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${BASE}/industries`,   lastModified: now, changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7  },
    { url: `${BASE}/resources`,    lastModified: now, changeFrequency: "weekly",  priority: 0.7  },
    { url: `${BASE}/contact-us`,   lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`,        lastModified: now, changeFrequency: "yearly",  priority: 0.3  },
    { url: `${BASE}/accessibility`,lastModified: now, changeFrequency: "yearly",  priority: 0.4  },
  ];

  const servicePages: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = industriesData.map((i) => ({
    url: `${BASE}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...industryPages];
}
