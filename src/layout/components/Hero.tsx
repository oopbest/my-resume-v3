import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function HeroAnimation() {
  const handleDownload = () => {
    const pdfUrl = "/resume.pdf";
    if (window.innerWidth < 768) {
      window.open(pdfUrl, "_blank");
    } else {
      fetch(pdfUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "setthawut-resume.pdf");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => console.error("Error downloading the file:", error));
    }
  };
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen bg-zinc-800 text-white text-center px-6"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        I am a Frontend Developer, Full Stack Developer
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I look forward to the opportunity to work with you and contribute to the
        success of your project. I am eager to be a part of your team. Let's
        create something amazing together!
      </motion.p>

      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}>
          <Button className="px-6 py-3 text-lg bg-primary">Contact Me</Button>
        </Link>

        <a onClick={handleDownload}>
          <Button variant="outline" className="px-6 py-3 text-lg text-black">
            Resume
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
