import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import AboutPreview from "@/components/AboutPreview";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Categories />
        <AboutPreview />
        <Offers />
        <Testimonials />
        <ContactSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
