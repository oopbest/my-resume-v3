import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/types";
import ImageCarousel from "./ImageCarousel";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { LuTvMinimalPlay } from "react-icons/lu";
import { useImageDialog, useExpandableText } from "@/hooks";

interface PortfolioGridProps {
  project: Project;
}

const PortfioGrid = ({ project }: PortfolioGridProps) => {
  const { open, selectedImages, openDialog, setOpen } = useImageDialog();
  const { displayText, shouldTruncate, expanded, toggle } = useExpandableText({
    text: project.description,
    maxLength: 150,
  });

  return (
    <div className="p-4 rounded-md bg-secondary/40">
      <div className="mb-4">
        <div
          className="relative w-full overflow-hidden rounded-md shadow-lg group transition-all"
          style={{ paddingTop: "56.25%" }}
        >
          <img
            src={project.photos[0]}
            alt={project.title}
            className="absolute z-20 inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-75"
          />
          <div className="absolute z-30 inset-0 hidden group-hover:flex items-center justify-center">
            <Button onClick={() => openDialog(project.photos)}>
              Screenshots
            </Button>
          </div>
        </div>
      </div>
      <p>{project.title}</p>
      <p className="text-sm my-4">
        {displayText}
        {shouldTruncate && (
          <span className="text-xs p-0 ms-2 cursor-pointer" onClick={toggle}>
            {expanded ? "Read less" : "Read more"}
          </span>
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stacks.map((stack, index) => (
          <Badge key={index} className="flex gap-1 font-light">
            {stack.icon}
            {stack.name}
          </Badge>
        ))}
      </div>

      <div className="flex items-end justify-center mt-6 gap-2">
        <a href={project.projectUrl} target="_blank" rel="noreferrer">
          <Button>
            <LuTvMinimalPlay className="h-5 w-5 animate-pulse" /> Visit Site
          </Button>
        </a>
        {project.projectSrc && (
          <a href={project.projectSrc} target="_blank" rel="noreferrer">
            <Button>
              <FaGithub className="h-5 w-5" /> View Code
            </Button>
          </a>
        )}
      </div>

      {selectedImages.length > 0 && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="w-full lg:w-auto max-w-5xl">
            <DialogHeader>
              <DialogTitle>Screenshots</DialogTitle>
              <DialogDescription>{project.title}</DialogDescription>
            </DialogHeader>
            <ImageCarousel images={selectedImages} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PortfioGrid;
