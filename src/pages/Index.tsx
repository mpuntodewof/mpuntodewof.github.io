import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import WorkProcess from "@/components/WorkProcess";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <TrustMetrics />
      <Services />
      <Experience />
      <Projects />
      <TechStack />
      <WorkProcess />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
