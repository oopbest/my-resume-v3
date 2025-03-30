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
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="text-xl flex items-center gap-2">
            {skill.title} {skill.icon}
          </p>
        </CardTitle>
        <CardDescription>{skill.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside text-zinc-800">
          {skill.stacks.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-4 items-center justify-center">
        {skill.devIcons.map((icon, index) => (
          <img key={index} src={icon} alt={skill.title} className="w-8 h-8" />
        ))}
      </CardFooter>
    </Card>
  );
};

export default SkillGrid;
