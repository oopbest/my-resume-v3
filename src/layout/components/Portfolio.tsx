import PortfioGrid from "./PortfioGrid";
import { projects } from "@/data/projects";

const Portfolio = () => {
  return (
    <div id="portfolio" className="p-2">
      <h2 className="text-center text-3xl font-bold py-8">Portfolio</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {projects.map((project, index) => (
          <PortfioGrid key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
