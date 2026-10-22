import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vidyaa Tech",
  description: "Terms and conditions for use of the Vidyaa Tech website and services.",
  alternates: { canonical: "https://vidyaa-tech.com/terms" },
};

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Legal"
        headline="Terms & Conditions"
        subtitle="Terms governing use of the Vidyaa Tech website and engagement with our services."
        variant="light"
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      </div>

      <section className="pb-20">
        <div className="container max-w-3xl prose">
          <p className="text-sm text-[var(--text-muted)]">Last updated: September 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Vidyaa Tech website at{" "}
            <a href="https://vidyaa-tech.com">vidyaa-tech.com</a>, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.
          </p>

          <h2>2. Use of This Website</h2>
          <p>
            You may use this website for lawful purposes only. You must not use it in any way that is unlawful, fraudulent or harmful, or in connection with any unlawful activity.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, graphics, logos and design, is the property of Vidyaa Tech and is protected by copyright. You may not reproduce, distribute or commercially exploit any content without prior written permission.
          </p>

          <h2>4. Service Engagements</h2>
          <p>
            Engagements for Vidyaa Tech&apos;s services are governed by separate contractual agreements. These website terms do not constitute a contract for services.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Vidyaa Tech makes no warranties regarding the accuracy or completeness of website content. To the fullest extent permitted by law, Vidyaa Tech excludes liability for any loss or damage arising from use of this website.
          </p>

          <h2>6. External Links</h2>
          <p>
            This website may contain links to third-party websites. Vidyaa Tech is not responsible for the content or practices of those sites.
          </p>

          <h2>7. Privacy</h2>
          <p>
            Use of this website is also governed by our{" "}
            <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms at any time. Continued use of the website following any changes constitutes acceptance of the updated Terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by applicable law. Any disputes shall be subject to the exclusive jurisdiction of the courts in the relevant jurisdiction.
          </p>

          <h2>10. Contact</h2>
          <p>
            For queries regarding these Terms, contact us at{" "}
            <a href="mailto:hello@vidyaa-tech.com">hello@vidyaa-tech.com</a>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
