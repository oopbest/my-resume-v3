import {
  FaUser,
  FaBriefcase,
  FaTools,
  FaImages,
  FaEnvelope,
} from "react-icons/fa";

export interface NavItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export const navigationItems: NavItem[] = [
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
