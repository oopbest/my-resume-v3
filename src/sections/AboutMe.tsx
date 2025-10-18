import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Code2, User } from "lucide-react";
import { calculateAge } from "@/utils/common.utils";
import Topic from "./Topic";

export default function AboutMe() {
  const birthdate = "1988-05-31"; // YYYY-MM-DD
  const age = calculateAge(birthdate);

  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-10">
      <Topic title="About Me" />

      <Card className="rounded-2xl shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-center">
          <div>
            <User className="mx-auto text-primary mb-2" size={32} />
            <p className="font-semibold text-lg">Age</p>
            <p className="text-muted-foreground">{age}</p>
          </div>
          <div>
            <Briefcase className="mx-auto text-primary mb-2" size={32} />
            <p className="font-semibold text-lg">Experience</p>
            <p className="text-muted-foreground">11+ Years</p>
          </div>
          <div>
            <Code2 className="mx-auto text-primary mb-2" size={32} />
            <p className="font-semibold text-lg">Projects</p>
            <p className="text-muted-foreground">20+ Completed</p>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col sm:flex-row gap-6 items-center">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <Avatar className="w-24 h-24 ring-2 ring-primary ring-offset-2">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/21325913?v=4"
                alt="oopbest"
              />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
          </div>

          {/* Text Section */}
          <div className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              I'm a passionate Full-stack Developer with over 11+ years of
              experience building scalable web applications and enterprise-level
              solutions. I specialize in frontend technologies like{" "}
              <strong>React</strong> and <strong>Next.js</strong>, along with
              modern styling tools such as
              <strong> Tailwind CSS</strong> and <strong>shadcn/ui</strong>.
            </p>
            <p className="mt-4">
              On the backend, I work with <strong>Node.js</strong>,{" "}
              <strong>Express</strong>, and{" "}
              <strong>PHP (Magento & Laravel)</strong>. I manage databases like
              <strong> MySQL</strong>, <strong>PostgreSQL</strong>,{" "}
              <strong>MongoDB</strong>, and <strong>Firebase</strong> using ORMs
              like
              <strong> Prisma</strong> and <strong>Sequelize</strong>.
            </p>
            <p className="mt-4">
              I'm experienced in CI/CD with <strong>GitHub Actions</strong> and{" "}
              <strong>Docker</strong>, and deploy apps using
              <strong> Vercel</strong>, <strong>Render</strong>, and{" "}
              <strong>Neon</strong>. I handle authentication with
              <strong> Clerk</strong>, <strong>NextAuth.js</strong>,{" "}
              <strong>Passport.js</strong>, and <strong>JWT</strong>.
            </p>
            <p className="mt-4">
              Always eager to explore, I'm currently diving into{" "}
              <strong>GraphQL</strong> to build dynamic and flexible APIs.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
