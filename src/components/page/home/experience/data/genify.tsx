import { Experience } from "@/components/page/home/experience/experience-types";
import Technologies from "@/lib/types/technologies";
export const experience: Experience = {
  duration: {
    startDate: "2020",
    endDate: "Apr 2022"
  },
  title: "Founding Engineer & Front-End Lead",
  company: "Genify",
  url: "https://www.ftdsolutions.net/",
  description:
    "Founding engineer at a four-person startup building a workflow platform for industrial water and energy consulting. Led front-end architecture from MVP to acquisition, developing a reusable, component-driven framework and core features including authentication, workflow logic, registration, and user roles.",
  projects: [],
  technologies: [
    Technologies.React,
    Technologies.JavaScript,
    Technologies.CSS,
    Technologies.HTML,
    Technologies.UI_UX
  ]
};

export default experience;
