import Navbar from "@/components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import ContactForm from "./components/ContactForm";
import Footer from "@/components/Footer";
import AboutMe from "./components/AboutMe";
import { motion } from "framer-motion";

const MainLayout = () => {
  return (
    <div className="flex flex-col bg-black text-white">
      <Navbar />
      <Hero />

      <div className="flex flex-col container mx-auto overflow-x-hidden">
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
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
          <Skill />
        </motion.div>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }} // Ensure animation only happens once
        >
          <Portfolio />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>
      <Footer />
    </div>
  );
};

export default MainLayout;
