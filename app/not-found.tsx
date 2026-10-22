import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Page Not Found | Vidyaa Tech",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageLayout>
      <section className="section-py flex items-center justify-center min-h-[60vh]">
        <div className="container text-center max-w-lg">
          <p className="text-7xl font-extrabold text-[var(--primary)] mb-4">404</p>
          <h1 className="text-2xl font-bold text-[var(--text)] mb-3">
            Page Not Found
          </h1>
          <p className="text-[var(--text-muted)] leading-relaxed mb-8">
            The page you are looking for doesn&apos;t exist or has been moved.
            Try using the navigation above or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="btn btn-primary">Back to Homepage</Link>
            <Link href="/services" className="btn btn-outline">Explore Our Services</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
