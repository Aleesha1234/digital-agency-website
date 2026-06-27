import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
