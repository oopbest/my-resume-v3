import Navbar from "@/components/Navbar";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import ContactForm from "./components/ContactForm";
import Footer from "@/components/Footer";
import AboutMe from "./components/AboutMe";
import { motion } from "framer-motion";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import Timeline from "./components/Timeline";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col overflow-x-hidden">
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
      </div>
    </>
  );
};

export default MainLayout;
