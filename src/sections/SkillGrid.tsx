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
        {skill.devIcons.map((icon, index) => (
          <div key={index} className="bg-zinc-200 rounded-md p-2">
            <img src={icon} alt={skill.title} className="w-8 h-8" />
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default SkillGrid;
