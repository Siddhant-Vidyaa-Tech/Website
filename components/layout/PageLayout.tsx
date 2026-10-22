import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-16 md:pt-[4.5rem]">
        {children}
      </main>
      <Footer />
    </>
  );
}
