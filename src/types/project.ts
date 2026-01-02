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
