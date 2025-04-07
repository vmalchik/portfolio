import { Experience } from "@/components/page/home/experience/experience-types";
import Technologies from "@/lib/types/technologies";

export const experienceAirPR: Experience = {
  duration: {
    startDate: "2017",
    endDate: "Jan 2018"
  },
  title: "Senior Software Engineer",
  company: "AirPR (Onclusive)",
  url: "https://onclusive.com/",
  description:
    "Developed and delivered a new author analysis page in EmberJS from UX wireframes, enhancing contributor visibility and influencer insights. Supported a front-end rebuild of a media tracking platform with a focus on UI migration and user experience improvements.",
  projects: [],
  technologies: [
    Technologies.Ember,
    Technologies.JavaScript,
    Technologies.HTML,
    Technologies.CSS
  ]
};

export default experienceAirPR;
