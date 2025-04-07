import { LinkDetails } from "@/components/page/home/links-list";
import Technologies from "@/lib/types/technologies";

export type Project = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  website?: LinkDetails;
  github?: LinkDetails;
  youtube?: LinkDetails;
  description: string;
  technologies: Technologies[];
};

export default Project;
