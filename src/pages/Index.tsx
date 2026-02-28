import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FormatSection from "@/components/FormatSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FormatSection />
      <BenefitsSection />
      <div id="cta">
        <CTASection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
