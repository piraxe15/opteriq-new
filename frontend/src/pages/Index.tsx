import Header from "@/components/Header";
import ModernHero from "@/components/ModernHero";
import ModernServices from "@/components/ModernServices";
import ModernProcess from "@/components/ModernProcess";
import ModernFAQ from "@/components/ModernFAQ";
import ContactSection from "@/components/ContactSection";
import ModernCTA from "@/components/ModernCTA";
import ModernFooter from "@/components/ModernFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ModernHero />
        <ModernServices />
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