import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skill } from "@/types";

type Props = {
  skill: Skill;
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

const SkillGrid = ({ skill }: Props) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>
          <p className="text-xl flex items-center gap-2">
            {skill.title} {skill.icon}
          </p>
        </CardTitle>
        <CardDescription>{skill.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside">
          {skill.stacks.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="max-w-sm flex flex-wrap mx-auto gap-4 items-center justify-center">
        {skill.devIcons.map((icon, index) => {
          const title = getIconTitle(icon);
          return (
            <div
              key={index}
              className="bg-zinc-200 rounded-md p-2 transition-transform hover:scale-110 cursor-pointer"
              title={title}
            >
              <img src={icon} alt={title} className="w-8 h-8" />
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
};

export default SkillGrid;
