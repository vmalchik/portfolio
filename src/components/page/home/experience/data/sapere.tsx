import { Experience } from "@/components/page/home/experience/experience-types";
import Technologies from "@/lib/types/technologies";

export const experienceSapere: Experience = {
  duration: {
    startDate: "2017",
    endDate: "May 2017"
  },
  title: "Front-End Lead, Contractor",
  company: "Sapere",
  url: "https://www.f6s.com/company/saperecorporation",
  description:
    "Led front-end development of an AWS-hosted single-page app for monitoring wine production quality at an IoT startup. Designed and implemented core features including authentication, sensor data visualization, device management, and user notifications. Delivered the MVP on-time and on-budget in close collaboration with cross-functional teams.",
  projects: [],
  technologies: [
    Technologies.Ember,
    Technologies.JavaScript,
    Technologies.HTML,
    Technologies.CSS,
    Technologies.AWS
  ]
};

export default experienceSapere;
