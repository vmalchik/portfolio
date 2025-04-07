import { Project } from "@/components/page/home/projects/project-types";
import Technologies from "@/lib/types/technologies";

const eventFinder: Project = {
  image: {
    src: "/projects/event-finder.png",
    alt: "Event Finder Project",
    width: 1917,
    height: 988
  },
  title: "Event Finder",
  website: {
    name: "GitHub - Event Finder",
    url: "https://event-finder-coral.vercel.app/",
    ariaLabel: "Event Finder website"
  },
  github: {
    name: "GitHub",
    url: "https://github.com/vmalchik/petsoft",
    ariaLabel: "Event Finder Github repository"
  },
  youtube: {
    name: "YouTube",
    url: "https://www.youtube.com/watch?v=6GHVFSZg3rM",
    ariaLabel: "Event Finder YouTube demo video"
  },
  description: `Web app for discovering local events built for a course. Users can search by location and keyword, 
    save favorite events, and view event details.`,
  technologies: [
    Technologies.NextJS,
    Technologies.React,
    Technologies.Prisma,
    Technologies.PostgreSQL
  ]
};

export default eventFinder;
