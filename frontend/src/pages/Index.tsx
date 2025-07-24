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
import TechBackground from "@/components/TechBackground";

const Index = () => {
  return (
    <div className="bg-background text-foreground relative">
      <TechBackground />
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