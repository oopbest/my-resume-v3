import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Topic from "./Topic";

type TimelineItem = {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  keyProjects: string[];
  badge?: string;
};

const timelineData: TimelineItem[] = [
  {
    company: "Seeking New Opportunities",
    role: "Full-stack Developer",
    period: "5 Jan 2025 - Present",
    responsibilities: [
      "Learning and building full-stack projects.",
      "The Complete Full-Stack Web Development Bootcamp",
    ],
    keyProjects: [
      "Full-stack Project: Expense Tracker ( MERN Stack with GraphQL )",
      "Full-stack Project: Tasks To-do List ( Next.js,GraphQL, Hasura )",
      "Full-stack Project: A Social Media App ( Next.js, Prisma, PostgreSQL )",
      "Full-stack Project: Spotify Clone - Advanced Project ( MERN Stack )",
      "Full-Stack Friendly Real-Time Chat App ( MERN Stack ) : Seems like Line app.",
      "Full-Stack Real Time Chat App with Image Uploads ( MERN Stack ) : Seems like Facebook messenger app.",
      "Full-stack Project: Product Store CRUD ( MERN Stack ) : It serves as a beginner-friendly crash course for learning how to develop full-stack applications",
      "React Native Application - Developed a simple page using React Native",
      "Flutter Application - Created a basic form with stateful widgets in Flutter",
      "Full-stack simple project - Blogs CRUD ( PERN Stack )",
    ],
    badge: "Open to Work",
  },
  {
    company: "Topvalue Corporate Ltd.",
    role: "Full-stack Developer",
    period: "1 Sep 2017 - 5 Jan 2025",
    responsibilities: [
      "Designed, developed and maintained software solutions using Next.js, React, Redux, Redux Toolkit, Typescript, Javascript, Bootstrap, Tailwind CSS, RESTful APIs, PHP, MySQL, Magento and other tech stacks.",
      "Managed project timelines and priorities, ensuring alignment with business objectives.",
      "Developed and maintained e-commerce platforms using Next.js, TypeScript, Magento",
      "Led migration from Magento 1 to Magento 2, improving performance and scalability",
      "Integrated payment gateways (2C2P, Omise, Direct Bank Payment)",
      "Built a real-time admin dashboard with React, Laravel, and Firebase",
      "Collaborated with outsourced teams to develop hybrid mobile applications",
      "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 50%",
    ],
    keyProjects: [
      "Topvalue.com (E-commerce)",
      "Topvalue Housebrand sites: Alectric, Altec, Cocugu, Fennix, Namiko",
      "Microservices for Easy Shopping (Topvalue & CJ Express)",
      "POS System, Business Intelligence Dashboard",
      "Payment Gateway Integration: 2C2P, Omise, Direct Bank APIs",
      "Developed and Integreated modules for Magento 1, Magento 2. Using Docker and Nginx for webserver.",
    ],
    badge: "Full-time",
  },
  {
    company: "iBusiness Corporation Co., Ltd.",
    role: "PHP Developer",
    period: "1 Jun 2013 - 31 Aug 2017",
    responsibilities: [
      "Designed, developed, and deployed web applications for clients using various tech stacks, including using PHP, MySQL, HTML, CSS, Javascript, jQuery, Ajax, SOAP, XML, Bootstrap and responsive design.",
      "Collaborated with cross-functional teams to deliver high-quality software",
      "Managed project timelines and priorities, ensuring delivery on-time.",
      "Collaborated with clients to understand their requirements and provide technical recommendations.",
    ],
    keyProjects: [
      "Custom CMS, E-commerce, Booking systems",
      "HR payroll system with salary slip generation",
      "SOAP & REST API integrations",
    ],
    badge: "Full-time",
  },
];

export default function Timeline() {
  return (
    <div id="experiences">
      <Topic title="Experiences" />
      <div className="flex flex-col gap-6 relative pl-6 border-l-2 border-muted-foreground/20">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3.5 top-4 w-3 h-3 rounded-full bg-primary" />
            <Card className="ml-2">
              <CardContent className="py-6">
                <h3 className="text-lg font-bold">{item.company}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
                {item.badge && <Badge className="mt-2">{item.badge}</Badge>}

                <ul className="mt-4 text-sm list-disc list-inside space-y-1">
                  {item.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <p className="font-medium text-sm">Key Projects:</p>
                  <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                    {item.keyProjects.map((proj, i) => (
                      <li key={i}>{proj}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
