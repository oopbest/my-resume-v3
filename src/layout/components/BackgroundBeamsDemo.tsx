import { BackgroundBeams } from "@/components/ui/background-beam";
import FlipWordsDemo from "./FlipWord";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

function handleDownload() {
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
}

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <FlipWordsDemo />
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10">
          I look forward to the opportunity to work with you and contribute to
          the success of your project. I am eager to be a part of your team.
          Let's create something amazing together!
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 relative z-10">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="px-6 py-3 text-lg bg-primary">
              <MdOutlineMarkEmailUnread /> Contact Me
            </Button>
          </Link>

          <a onClick={handleDownload}>
            <Button className="px-6 py-3 text-lg bg-primary/50">
              <IoMdDownload />
              Download CV
            </Button>
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
