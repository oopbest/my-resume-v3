import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import ContactForm from "./components/ContactForm";
import Footer from "@/components/Footer";
import AboutMe from "./components/AboutMe";
import useScrollReveal from "@/hooks/useScrollReveal";

const MainLayout = () => {
  // useScrollReveal(".about-me", { delay: 300, origin: "left" });
  // useScrollReveal(".skill", { delay: 500, origin: "right" });
  // useScrollReveal(".portfolio", { delay: 700, origin: "top" });
  // useScrollReveal(".contact", { delay: 900, origin: "bottom" });
  return (
    <div className="flex flex-col bg-black text-white">
      <Navbar />
      <Hero />

      <div className="flex flex-col container mx-auto overflow-x-hidden">
        <section className="about-me">
          <AboutMe />
        </section>
        <section className="skill">
          <Skill />
        </section>
        <section className="portfolio">
          <Portfolio />
        </section>
      </div>
      <section className="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
