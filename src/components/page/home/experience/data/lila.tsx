import { Experience } from "@/components/page/home/experience/experience-types";
import Technologies from "@/lib/types/technologies";

export const experienceLila: Experience = {
  duration: {
    startDate: "2025",
    endDate: "Present"
  },
  title: "Principal Software Engineer",
  company: "Lila",
  url: "https://www.lila.ai/",
  description:
    "Lead the design and development of critical components of a web application for interfacing with AI and MCP tools, enabling rich visualizations in close collaboration with scientists and product managers to pioneer next-gen scientific discovery.",
  projects: [],
  technologies: [
    Technologies.AWS,
    Technologies.JavaScript,
    Technologies.HTML,
    Technologies.CSS
  ]
};

export default experienceLila;
