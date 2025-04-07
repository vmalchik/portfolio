import { LinkDetails } from "@/components/page/home/links-list";
import Technologies from "@/lib/types/technologies";

export type Experience = {
  duration: {
    startDate: string;
    endDate?: string;
  };
  title: string;
  company: string;
  url: string;
  previousTitle?: string;
  projects?: LinkDetails[];
  description: string;
  technologies?: Technologies[];
};
