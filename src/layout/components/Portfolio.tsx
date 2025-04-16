import PortfioGrid from "./PortfioGrid";
import { projects } from "@/data/projects";
import Topic from "./Topic";

const Portfolio = () => {
  return (
    <div id="portfolio" className="p-2">
      <Topic title="Portfolio" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {projects.map((project, index) => (
          <PortfioGrid key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
