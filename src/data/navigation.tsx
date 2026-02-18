import {
  FaUser,
  FaBriefcase,
  FaTools,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";
import { MenuItem } from "@/types";

export const menus: MenuItem[] = [
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
