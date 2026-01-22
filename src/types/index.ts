export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'iot' | 'web' | 'ai' | '3d';
  technologies: string[];
  github?: string;
  demoLink?: string;
  status: string;
  statusColor: string;
  viewText?: string;
}