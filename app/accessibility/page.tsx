import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Accessibility Statement | Vidyaa Tech",
  description:
    "Vidyaa Tech is committed to digital accessibility. Read our accessibility statement for this website.",
  alternates: { canonical: "https://vidyaa-tech.com/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <PageLayout>
      <PageHero
        label="Accessibility"
        headline="Accessibility Statement"
        subtitle="Our commitment to making this website accessible to all users."
        variant="light"
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Accessibility" }]} />
      </div>

      <section className="pb-20">
        <div className="container max-w-3xl prose">
          <p className="text-sm text-[var(--text-muted)]">Last updated: September 2026</p>

          <h2>Our Commitment</h2>
          <p>
            Vidyaa Tech is committed to ensuring that this website is accessible to the widest possible audience, including people with disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standard.
          </p>

          <h2>Technical Specification</h2>
          <p>
            This website has been built using semantic HTML5, with appropriate ARIA attributes, keyboard navigation support, visible focus states and sufficient colour contrast. We use responsive design to support all screen sizes and device types.
          </p>

          <h2>Known Issues</h2>
          <p>
            We are committed to ongoing accessibility improvement. If you encounter any accessibility barriers on this website, please contact us so we can address them promptly.
          </p>

          <h2>Keyboard Navigation</h2>
          <p>
            All interactive elements on this website can be accessed using a keyboard. A skip link is provided at the top of each page to allow keyboard users to jump directly to the main content.
          </p>

          <h2>Screen Reader Support</h2>
          <p>
            We have designed this website to work with screen readers. Images include descriptive alt text, and form controls have appropriate labels. We test with common screen reader and browser combinations.
          </p>

          <h2>Colour Contrast</h2>
          <p>
            Text and interactive elements meet WCAG 2.2 AA minimum contrast ratios of 4.5:1 for normal text and 3:1 for large text and UI components.
          </p>

          <h2>Reduced Motion</h2>
          <p>
            Animations on this website respect the <code>prefers-reduced-motion</code> media query. Users who have enabled reduced motion in their operating system settings will see minimal or no animation.
          </p>

          <h2>Reporting Accessibility Issues</h2>
          <p>
            If you experience accessibility barriers or have feedback about the accessibility of this website, please contact us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:hello@vidyaa-tech.com">hello@vidyaa-tech.com</a>
            </li>
          </ul>
          <p>
            We aim to respond to accessibility feedback within two business days.
          </p>

          <h2>Our Accessibility Services</h2>
          <p>
            Vidyaa Tech also provides digital accessibility services to educational publishers, EdTech companies and schools. If your organisation needs support with accessibility compliance, content remediation or WCAG audits, please{" "}
            <Link href="/services/digital-accessibility">learn more about our Digital Accessibility service</Link>{" "}
            or <Link href="/contact-us">contact us</Link>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
