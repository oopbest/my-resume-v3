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
import { Menu } from "lucide-react";
import { Link } from "react-scroll"; // For smooth scrolling

const menus = ["About", "Skills", "Portfolio", "Contact"];

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <AvatarDemo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-black">
          {menus.map((menu) => (
            <Link
              key={menu}
              to={menu.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className={`cursor-pointer hover:text-primary`}
              activeClass="text-primary"
            >
              {menu}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden bg-primary text-white"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetHeader>
              <SheetTitle>
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <AvatarDemo />
                </a>
              </SheetTitle>
              <SheetDescription>{""}</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              {menus.map((menu) => (
                <Link
                  key={menu}
                  to={menu.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={`cursor-pointer hover:text-primary`}
                  activeClass="text-primary"
                >
                  {menu}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
