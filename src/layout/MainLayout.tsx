import Navbar from "@/layout/Navbar";
import Portfolio from "@/sections/Portfolio";
import Skill from "@/sections/Skill";
import ContactForm from "@/sections/ContactForm";
import Footer from "@/layout/Footer";
import AboutMe from "@/sections/AboutMe";
import { motion } from "framer-motion";
import { BackgroundBeamsDemo } from "@/sections/BackgroundBeamsDemo";
import Timeline from "@/sections/Timeline";

const MainLayout = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex flex-col overflow-x-hidden">
        <BackgroundBeamsDemo />

        <div className="container mx-auto">
          {/* about me */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }} // Ensure animation only happens once
          >
            <AboutMe />
          </motion.div>

          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }} // Ensure animation only happens once
          >
            <Timeline />
          </motion.div>

          {/* skills */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }} // Ensure animation only happens once
          >
            <Skill />
          </motion.div>

          {/* portfolio */}
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }} // Ensure animation only happens once
          >
            <Portfolio />
          </motion.div>
        </div>

        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
