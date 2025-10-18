import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AvatarDemo } from "@/layout/components/Avatar";
import { ModeToggle } from "@/layout/components/ModeToggle";
import { Menu } from "lucide-react";
import { Link } from "react-scroll"; // For smooth scrolling
import {
  FaUser,
  FaBriefcase,
  FaTools,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";

const menus = [
  {
    title: "About Me",
    url: "about",
    icon: <FaUser />,
  },
  {
    title: "Experiences",
    url: "experiences",
    icon: <FaBriefcase />,
  },
  {
    title: "Services",
    url: "services",
    icon: <FaTools />,
  },
  {
    title: "Portfolio",
    url: "portfolio",
    icon: <FaImages />,
  },
  {
    title: "Contact",
    url: "contact",
    icon: <FaEnvelope />,
  },
];

export default function Navbar() {
  return (
    <header className="shadow-lg bg-background/95 sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 uppercase">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="cursor-pointer bg-transparent border-0 p-0"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AvatarDemo />
        </button>

        {/* Desktop Nav */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <nav className="hidden md:flex space-x-6">
            {menus.map((menu, index) => (
              <Link
                key={index}
                to={menu.url.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={`cursor-pointer hover:text-primary flex items-center gap-2`}
                activeClass="text-primary"
              >
                {menu.icon}
                {menu.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden bg-primary"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle>
                <button
                  type="button"
                  className="cursor-pointer bg-transparent border-0 p-0"
                  aria-label="Scroll to top"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <AvatarDemo />
                </button>
              </SheetTitle>
              <SheetDescription>{""}</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6 uppercase">
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  to={menu.url.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={`cursor-pointer hover:text-primary flex items-center gap-2`}
                  activeClass="text-primary"
                >
                  {menu.icon}
                  {menu.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
