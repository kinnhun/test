import HeroSection from "@/features/portfolio/components/HeroSection";
import AboutSection from "@/features/portfolio/components/AboutSection";
import CoreDisciplinesSection from "@/features/portfolio/components/CoreDisciplinesSection";
import ServicesSection from "@/features/portfolio/components/ServicesSection";
import ExperienceSection from "@/features/portfolio/components/ExperienceSection";
import SelectedWorksSection from "@/features/portfolio/components/SelectedWorksSection";
import TestimonialsSection from "@/features/portfolio/components/TestimonialsSection";
import ContactSection from "@/features/portfolio/components/ContactSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FAF0E6]">
        <HeroSection />
        <AboutSection />
        <CoreDisciplinesSection />
        <ServicesSection />
        <ExperienceSection />
        <SelectedWorksSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}


