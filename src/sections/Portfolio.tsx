import PortfolioGrid from "./PortfolioGrid";
import { projects } from "@/data/projects";
import Topic from "@/components/Topic";

const Portfolio = () => {
  return (
    <div id="portfolio" className="p-2">
      <Topic title="Portfolio" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projects.map((project, index) => (
          <PortfolioGrid key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
