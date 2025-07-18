import Header from "@/components/Header";
import ModernHero from "@/components/ModernHero";
import ModernServices from "@/components/ModernServices";
import TechStackSection from "@/components/TechStackSection";
import PopularAutomations from "@/components/PopularAutomations";
import ModernProcess from "@/components/ModernProcess";
import ModernFAQ from "@/components/ModernFAQ";
import ContactSection from "@/components/ContactSection";
import ModernCTA from "@/components/ModernCTA";
import ModernFooter from "@/components/ModernFooter";
import SectionNavigation from "@/components/SectionNavigation";
import TechBackground from "@/components/TechBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <TechBackground />
      <SectionNavigation />
      <Header />
      <main>
        <ModernHero />
        <ModernServices />
        <TechStackSection />
        <PopularAutomations />
        <ModernProcess />
        <ModernFAQ />
        <ContactSection />
        <ModernCTA />
      </main>
      <ModernFooter />
    </div>
  );
};

export default Index;