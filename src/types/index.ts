export interface Skill {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  stacks: string[];
  devIcons: string[];
}

export interface StackItem {
  icon: React.ReactNode;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  stacks: StackItem[];
  photos: string[];
  projectUrl: string;
  projectSrc: string;
}
