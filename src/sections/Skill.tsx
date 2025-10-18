import {
  Cpu,
  Lightbulb,
  Monitor,
  Network,
  Server,
  UploadCloud,
} from "lucide-react";
import Topic from "./Topic";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const mySkills = [
  {
    id: 1,
    title: "Frontend Development",
    icon: <Monitor className="animate-bounce" />,
    description:
      "I build responsive, high-performance web applications using the latest technologies and frameworks. I specialize in building user-friendly interfaces and optimizing performance for optimal user experience.",
    stacks: [
      "React.js, Next.js (12, 14, 15) for modern, interactive UIs",
      "TypeScript & JavaScript (ES6+) for scalable and maintainable code",
      "Tailwind CSS, Bootstrap, daisyUI, shadcn/ui, Chakra UI for stunning and responsive designs",
      "State Management with Redux, Redux Toolkit, Zustand, and useContext",
    ],
    devIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      "/devicons/chakra-ui.svg",
      "/devicons/daisy-ui.svg",
      "/devicons/shadcn-ui.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      "/devicons/zustand.svg",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    icon: <Server className="animate-bounce" />,
    description:
      "I create secure and scalable backend systems using the latest technologies and frameworks. I specialize in building robust and efficient server-side logic and APIs for web applications.",
    stacks: [
      "Node.js & Express for RESTful APIs and server-side logic",
      "PHP (Magento 1 & 2, Laravel) for e-commerce and enterprise solutions",
      "Database Management: MySQL, PostgreSQL, MongoDB, Firebase",
      "ORMs: Mongoose, Prisma, and Sequelize",
    ],
    devIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
      "/devicons/prisma.svg",
      "/devicons/sequelize.svg",
    ],
  },
  {
    id: 3,
    title: "API Integration & Development",
    icon: <Network className="animate-bounce" />,
    description:
      "I develop and integrate powerful APIs for web applications. I specialize in building secure and efficient APIs for web applications.",
    stacks: [
      "RESTful API design and implementation",
      "GraphQL with Apollo and Hasura.io for real-time data and flexible API development",
      "Secure authentication with Clerk, Passport.js, JWT, OAuth, bcryptjs, and NextAuth.js",
      "Third-party API integrations",
    ],
    devIcons: [
      "devicons/clerk.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg",
      "/devicons/nextauth.png",
      "/devicons/jwt.svg",
      "/devicons/graphql.svg",
      "/devicons/hasura.svg",
      "/devicons/apollo.svg",
      "/devicons/passportjs.svg",
    ],
  },
  {
    id: 4,
    title: "CI/CD & Deployment",
    icon: <UploadCloud className="animate-bounce" />,
    description:
      "I streamline the development lifecycle with CI/CD and deployment tools.",
    stacks: [
      "Git & GitFlow for version control",
      "Docker & GitHub Actions for automated workflows",
      "Vercel for seamless Next.js deployments",
      "Render.com build, deploy, and scale your apps",
      "Neon Serverless Postgres for scalable database solutions",
    ],
    devIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-plain.svg",
      "/devicons/render.jpg",
      "/devicons/neon.svg",
    ],
  },
  {
    id: 5,
    title: "AI-Powered Development",
    icon: <Cpu className="animate-bounce" />,
    description:
      "Leveraging AI tools like GitHub Copilot and Windsurf Plugin (formerly Codeium)",
    stacks: [
      "GitHub Copilot & Windsurf Plugin (formerly Codeium) for enhanced productivity",
      "AI-assisted debugging and code optimization",
    ],
    devIcons: ["/devicons/github-copilot.svg", "/devicons/codeium.svg"],
  },
  {
    id: 6,
    title: "Currently Exploring",
    icon: <Lightbulb className="animate-bounce" />,
    description: "I am currently exploring the following technologies",
    stacks: [
      "Flutter (Dart) & React Native for cross-platform mobile development",
      "Golang & NestJS for high-performance backend solutions",
    ],
    devIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg",
      "/devicons/react-native.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    ],
  },
  {
    id: 7,
    title: "Testing & Quality Assurance",
    icon: <Lightbulb className="animate-bounce" />,
    description: "I perform end-to-end testing and quality assurance",
    stacks: [
      "Vitest and React Testing Library for unit and component testing",
      "Storybook for isolated component testing and UI documentation",
    ],
    devIcons: [
      "/devicons/vitest.svg",
      "/devicons/testing-library.svg",
      "/devicons/storybook.svg",
    ],
  },
];

const Skill = () => {
  return (
    <div id="services" className="p-6">
      <Topic title="services" />
      <div className="w-full">
        <HoverEffect items={mySkills} />
      </div>
    </div>
  );
};

export default Skill;
