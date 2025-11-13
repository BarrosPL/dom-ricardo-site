import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingInstagram from "@/components/FloatingInstagram";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingInstagram />
    </div>
  );
};

export default Index;
