import { Suspense, lazy } from "react";
import Navbar from "@/layout/Navbar";
import AboutMe from "@/sections/AboutMe";
import Footer from "@/layout/Footer";
import { motion } from "framer-motion";
import { BackgroundBeamsDemo } from "@/sections/BackgroundBeamsDemo";

// Lazy-loaded below-fold sections for code-splitting
const Timeline = lazy(() => import("@/sections/Timeline"));
const Skill = lazy(() => import("@/sections/Skill"));
const Portfolio = lazy(() => import("@/sections/Portfolio"));
const ContactForm = lazy(() => import("@/sections/ContactForm"));

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
            viewport={{ once: true }}
          >
            <AboutMe />
          </motion.div>

          <Suspense fallback={null}>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Timeline />
            </motion.div>

            {/* skills */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Skill />
            </motion.div>

            {/* portfolio */}
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Portfolio />
            </motion.div>
          </Suspense>
        </div>

        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
