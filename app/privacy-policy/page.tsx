import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Vidyaa Tech",
  description: "Vidyaa Tech's privacy policy—how we collect, use and protect your personal data.",
  alternates: { canonical: "https://vidyaa-tech.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <PageHero
        label="Legal"
        headline="Privacy Policy"
        subtitle="How Vidyaa Tech collects, uses and protects your personal data."
        variant="light"
      />

      <div className="container py-10">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      </div>

      <section className="pb-20">
        <div className="container max-w-3xl prose">
          <p className="text-sm text-[var(--text-muted)]">
            Last updated: September 2026
          </p>

          <h2>1. Who We Are</h2>
          <p>
            Vidyaa Tech (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an EdTech services and technology company. This Privacy Policy explains how we handle personal data collected through our website at{" "}
            <a href="https://vidyaa-tech.com">vidyaa-tech.com</a> and in the course of our business activities.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect the following types of personal data:</p>
          <ul>
            <li><strong>Contact data:</strong> Name, email address, phone number and company name submitted through our contact form.</li>
            <li><strong>Usage data:</strong> Information about how you use our website, including pages visited and time spent.</li>
            <li><strong>Communication data:</strong> Records of communications between you and Vidyaa Tech.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use personal data to:</p>
          <ul>
            <li>Respond to enquiries and provide the services you request.</li>
            <li>Improve and maintain our website.</li>
            <li>Send relevant communications about our services (where you have consented).</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            We process personal data on the following legal bases: legitimate interests (responding to business enquiries), contract performance and legal obligations.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
          </p>

          <h2 id="cookies">6. Cookies</h2>
          <p>
            Our website may use cookies to improve your experience. Functional cookies are necessary for the website to operate. Analytics cookies (if used) are only placed with your consent.
          </p>

          <h2>7. Third Parties</h2>
          <p>
            We do not sell or rent personal data to third parties. We may share data with trusted service providers who assist us in operating our website and business, under strict data protection agreements.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            Under applicable data protection law, you have the right to access, correct, delete or restrict the processing of your personal data. To exercise these rights, contact us at{" "}
            <a href="mailto:hello@vidyaa-tech.com">hello@vidyaa-tech.com</a>.
          </p>

          <h2>9. Security</h2>
          <p>
            We take appropriate technical and organisational measures to protect personal data against unauthorised access, alteration or disclosure.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The current version will always be available on this page.
          </p>

          <h2>11. Contact</h2>
          <p>
            For privacy-related queries, contact us at{" "}
            <a href="mailto:hello@vidyaa-tech.com">hello@vidyaa-tech.com</a>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
