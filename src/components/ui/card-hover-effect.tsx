import { cn } from "@/lib/utils";
import { Skill } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Props = {
  items: Skill[];
  className?: string;
};

const getIconTitle = (url: string): string => {
  const cleanUrl = url.toLowerCase();
  
  const customMap: Record<string, string> = {
    "react": "React.js",
    "nextjs": "Next.js",
    "angularjs": "AngularJS",
    "javascript": "JavaScript",
    "tailwindcss": "Tailwind CSS",
    "bootstrap": "Bootstrap",
    "chakra-ui": "Chakra UI",
    "daisy-ui": "daisyUI",
    "shadcn-ui": "shadcn/ui",
    "redux": "Redux / Redux Toolkit",
    "zustand": "Zustand",
    "nodejs": "Node.js",
    "express": "Express.js",
    "php": "PHP",
    "magento": "Magento",
    "laravel": "Laravel",
    "mysql": "MySQL",
    "mongodb": "MongoDB",
    "postgresql": "PostgreSQL",
    "firebase": "Firebase",
    "prisma": "Prisma ORM",
    "sequelize": "Sequelize",
    "clerk": "Clerk",
    "oauth": "OAuth",
    "nextauth": "NextAuth.js",
    "jwt": "JWT",
    "graphql": "GraphQL",
    "hasura": "Hasura",
    "apollo": "Apollo GraphQL",
    "passportjs": "Passport.js",
    "git": "Git",
    "github": "GitHub",
    "docker": "Docker",
    "vercel": "Vercel",
    "githubactions": "GitHub Actions",
    "render": "Render",
    "neon": "Neon DB",
    "github-copilot": "GitHub Copilot",
    "codeium": "Codeium / Windsurf",
    "anthropic": "Claude Code",
    "openai": "OpenAI / Codex",
    "opencode": "OpenCode",
    "ollama": "Ollama",
    "flutter": "Flutter",
    "react-native": "React Native",
    "go": "Go",
    "nestjs": "NestJS",
    "vitest": "Vitest",
    "jest": "Jest",
    "testing-library": "React Testing Library",
    "storybook": "Storybook"
  };

  for (const [key, value] of Object.entries(customMap)) {
    if (cleanUrl.includes(key)) {
      return value;
    }
  }

  const filename = url.substring(url.lastIndexOf("/") + 1);
  const nameWithoutExt = filename.substring(0, filename.lastIndexOf(".")) || filename;
  return nameWithoutExt.split(/[-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

export const HoverEffect = ({ items, className }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          // href={item?.link}
          // key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardStacks>
              {item.stacks.map((stack, index) => (
                <li key={index}>{stack}</li>
              ))}
            </CardStacks>
            <div className="max-w-sm flex flex-wrap mx-auto gap-4 items-center justify-center">
              {item.devIcons.map((icon, index) => {
                const title = getIconTitle(icon);
                return (
                  <div
                    key={index}
                    className="bg-zinc-200 rounded-md p-2 transition-transform hover:scale-110 cursor-pointer"
                    title={title}
                  >
                    <img src={icon} alt={title} className="w-6 h-6" />
                  </div>
                );
              })}
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-secondary border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-black dark:text-zinc-100 font-bold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-black dark:text-zinc-100 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardStacks = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "my-6 text-black dark:text-zinc-100 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
