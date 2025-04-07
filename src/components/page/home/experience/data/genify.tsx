import { Experience } from "@/components/page/home/experience/experience-types";
import Technologies from "@/lib/types/technologies";
export const experienceGenify: Experience = {
  duration: {
    startDate: "2020",
    endDate: "Apr 2022"
  },
  title: "Founding Engineer & Front-End Lead",
  company: "Genify",
  url: "https://www.ftdsolutions.net/",
  description:
    "Founding engineer at a four-person startup building a workflow platform for industrial water and energy consulting. Led front-end architecture from MVP to acquisition, creating a reusable component framework and core features like authentication, workflow logic, registration, and role management.",
  projects: [],
  technologies: [
    Technologies.React,
    Technologies.JavaScript,
    Technologies.CSS,
    Technologies.HTML,
    Technologies.UI_UX
  ]
};

export default experienceGenify;
