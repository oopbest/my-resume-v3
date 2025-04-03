import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/types";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { LuTvMinimalPlay } from "react-icons/lu";

const MAX_LENGTH = 180;

type Props = {
  project: Project;
};

const PortfioGrid = ({ project }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false);

  const openDialog = (images: string[]) => {
    setSelectedImage(images);
    setOpen(true);
  };

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 cursor-pointer">
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
      <p className="text-sm text-zinc-400 my-4">
        {expanded || project.description.length <= MAX_LENGTH
          ? project.description
          : `${project.description.slice(0, MAX_LENGTH)}... `}
        {project.description.length > MAX_LENGTH && (
          <span
            className="text-xs p-0 ms-2 text-secondary"
            onClick={toggleExpand}
          >
            {expanded ? "Read less" : "Read more"}
          </span>
        )}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stacks.map((stack, index) => (
          <Badge key={index} variant={"secondary"} className="flex gap-1">
            {stack.icon}
            {stack.name}
          </Badge>
        ))}
      </div>
      <div className="flex items-end justify-center mt-6 gap-2">
        <a href={project.projectUrl} target="_blank" rel="noreferrer">
          <Button>
            <LuTvMinimalPlay className="h-5 w-5" /> Live Demo
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

      {selectedImage && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="w-full lg:w-auto max-w-5xl">
            <DialogHeader>
              <DialogTitle>Screenshots</DialogTitle>
              <DialogDescription>{project.title}</DialogDescription>
            </DialogHeader>
            <ImageCarousel images={selectedImage} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PortfioGrid;
