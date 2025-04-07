import { Project } from "@/components/page/home/projects/project-types";
import Technologies from "@/lib/types/technologies";

const portfolio: Project = {
  image: {
    src: "/projects/portfolio.png",
    alt: "Portfolio Project",
    width: 2332,
    height: 1387
  },
  title: "Portfolio - Victor Malchikov",
  website: {
    name: "Portfolio website",
    url: "https://www.victormalchikov.com/",
    ariaLabel: "Portfolio website"
  },
  github: {
    name: "GitHub",
    url: "https://github.com/vmalchik/portfolio",
    ariaLabel: "Portfolio Github repository"
  },
  description: `A minimal, modern portfolio built to highlight my experience, projects, and approach to building impactful software.`,
  technologies: [
    Technologies.NextJS,
    Technologies.React,
    Technologies.TailwindCSS
  ]
};

export default portfolio;
