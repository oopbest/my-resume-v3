import Topic from "@/components/Topic";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { skills } from "@/data/skills";

const Skill = () => {
  return (
    <div id="services" className="p-6">
      <Topic title="services" />
      <div className="w-full">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
};

export default Skill;
