import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { isRTL } = useLanguage();

  return (
    <main className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
