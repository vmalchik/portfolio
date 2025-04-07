import { Project } from "@/components/page/home/projects/project-types";
import Technologies from "@/lib/types/technologies";

const petsoft: Project = {
  image: {
    src: "/projects/petsoft.png",
    alt: "Petsoft Project",
    width: 2046,
    height: 994
  },
  title: "Petsoft",
  website: {
    name: "Petsoft",
    url: "https://petsoft-one.vercel.app/",
    ariaLabel: "Petsoft website"
  },
  github: {
    name: "GitHub",
    url: "https://github.com/vmalchik/petsoft",
    ariaLabel: "Petsoft Github Repository"
  },
  youtube: {
    name: "YouTube",
    url: "https://www.youtube.com/watch?v=toDKzAJwT1s",
    ariaLabel: "Petsoft YouTube demo video"
  },
  description: `Full-stack pet management web app for a course project. 
    PetSoft offers virtual daycare tools including pet check-in/out, detailed pet records, and personalized care notes.`,
  technologies: [
    Technologies.NextJS,
    Technologies.TailwindCSS,
    Technologies.Rest,
    Technologies.Prisma,
    Technologies.PostgreSQL,
    Technologies.Stripe
  ]
};

export default petsoft;
