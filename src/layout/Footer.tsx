import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4 text-center">
        <div className="flex gap-4">
          <a href="https://github.com/oopbest" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <FaGithub className="h-5 w-5" />
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/setthawut-pimthong"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <FaLinkedin className="h-5 w-5" />
            </Button>
          </a>
        </div>
        <Separator className="w-full max-w-md bg-gray-700" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
