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

type Props = {
  project: Project;
};

const PortfioGrid = ({ project }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string[]>([]);

  const openDialog = (images: string[]) => {
    setSelectedImage(images);
    setOpen(true);
  };
  return (
    <div className=" bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/40 cursor-pointer">
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
            <Button onClick={() => openDialog(project.photos)}>See more</Button>
          </div>
        </div>
      </div>
      <p>{project.title}</p>
      {project.stacks.map((stack, index) => (
        <p key={index} className="text-xs mt-4">
          {stack}
        </p>
      ))}
      <div className="flex items-end justify-center mt-6 gap-2">
        <a href={project.projectUrl} target="_blank" rel="noreferrer">
          <Button variant={"link"}>Visit Site</Button>
        </a>
        {project.projectSrc && (
          <a href={project.projectSrc} target="_blank" rel="noreferrer">
            <Button variant={"link"}>Source Code</Button>
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
