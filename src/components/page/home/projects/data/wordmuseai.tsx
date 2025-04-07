import { Project } from "@/components/page/home/projects/project-types";
import Technologies from "@/lib/types/technologies";

const wordMuseAi: Project = {
  image: {
    src: "/projects/wordmuseai.jpg",
    alt: "WordMuse AI",
    width: 800,
    height: 512
  },
  title: "WordMuse AI",
  website: {
    name: "WordMuse AI website",
    url: "https://wordmuse.ai",
    ariaLabel: "WordMuse AI"
  },
  description: `Built a full-stack serverless app to help users craft messages. Trained a custom OpenAI model on 400 custom prompts and improved UX through user testing and iteration.`,
  technologies: [
    Technologies.NextJS,
    Technologies.React,
    Technologies.OpenAI,
    Technologies.AWS,
    Technologies.UI_UX
  ]
};

export default wordMuseAi;
