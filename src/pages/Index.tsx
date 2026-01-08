import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CapabilitiesSection />
        <TechnologySection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
