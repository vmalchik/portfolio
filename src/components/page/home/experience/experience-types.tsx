import Technologies from "@/lib/types/technologies";

export type Project = {
  name: string;
  url: string;
  ariaLabel: string;
};

export type Experience = {
  duration: {
    startDate: string;
    endDate?: string;
  };
  title: string;
  company: string;
  url: string;
  previousTitle?: string;
  projects?: Project[];
  description: string;
  technologies?: Technologies[];
};
