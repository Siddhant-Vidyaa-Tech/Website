import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { organisationSchema, websiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Vidyaa Tech – EdTech Content, Technology & Learning Solutions",
    template: "%s",
  },
  description:
    "Vidyaa Tech helps educational publishers, K–12 schools, EdTech companies and universities create high-quality content, assessments, digital learning experiences and technology solutions at scale.",
  keywords: [
    "EdTech services",
    "education content development",
    "curriculum design",
    "e-learning solutions",
    "custom assessment creation",
    "educational technology",
    "digital accessibility",
    "K-12 content development",
    "educational publishers",
    "learning solutions",
  ],
  authors: [{ name: "Vidyaa Tech" }],
  creator: "Vidyaa Tech",
  publisher: "Vidyaa Tech",
  metadataBase: new URL("https://vidyaa-tech.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vidyaa-tech.com",
    siteName: "Vidyaa Tech",
    title: "Vidyaa Tech – EdTech Content, Technology & Learning Solutions",
    description:
      "Helping educational publishers, schools and learning organisations create high-quality content, assessments and digital learning experiences at scale.",
    images: [
      {
        url: "/images/vidyaa-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Vidyaa Tech – EdTech Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidyaa Tech – EdTech Content, Technology & Learning Solutions",
    description:
      "Helping educational publishers, schools and learning organisations create high-quality content, assessments and digital learning experiences at scale.",
    images: ["/images/vidyaa-social-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={organisationSchema} />
        <JsonLd data={websiteSchema} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
