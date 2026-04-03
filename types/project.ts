
export interface ProjectDetails {
  overview?: string;
  keyFeatures?: string[];
  desc?: string[];
  role: string;  
  note?: string
}

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  images: string[];
  iconLists: string[];
  link: string;
  isPrivate: boolean;
  details: ProjectDetails;
}