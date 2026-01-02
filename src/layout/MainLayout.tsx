import Navbar from "@/layout/Navbar";
import Portfolio from "@/sections/Portfolio";
import Skill from "@/sections/Skill";
import ContactForm from "@/sections/ContactForm";
import Footer from "@/layout/Footer";
import AboutMe from "@/sections/AboutMe";
import { BackgroundBeamsDemo } from "@/sections/BackgroundBeamsDemo";
import Timeline from "@/sections/Timeline";
import { AnimatedSection } from "@/components/common";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col overflow-x-hidden">
        <BackgroundBeamsDemo />

        <div className="container mx-auto">
          <AnimatedSection delay={0.5}>
            <AboutMe />
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Timeline />
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <Skill />
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <Portfolio />
          </AnimatedSection>
        </div>

        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
