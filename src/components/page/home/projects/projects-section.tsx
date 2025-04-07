import ProjectCard from "@/components/page/home/projects/project-card";
import Section, { SectionHeader } from "@/components/page/home/section";
import { SectionProps } from "@/components/page/home/section-types";

// image
// description
// name
// technologies

// Website
// GitHub
// Youtube

// type Project = {
//   image: {
//     src: string;
//     alt: string;
//     width: number;
//     height: number;
//   };
//   title: string;
//   website?: string;
//   github?: string;
//   youtube?: string;
//   description: string;
//   technologies: string[];
// };
import { Project } from "@/components/page/home/projects/project-card";

const project: Project = {
  image: {
    src: "/projects/wordmuseai.jpg",
    alt: "WordMuseAI",
    width: 800,
    height: 512
  },
  title: "WordMuseAI",
  website: {
    name: "WordMuseAI",
    url: "https://wordmuse.ai",
    ariaLabel: "WordMuseAI"
  },
  description: "description",
  technologies: ["React", "JavaScript", "TypeScript", "Node.js", "AWS", "Azure"]
};

const project2: Project = {
  image: {
    src: "/projects/wordmuseai.jpg",
    alt: "WordMuseAI",
    width: 800,
    height: 512
  },
  title: "WordMuseAI",

  description: "description",
  technologies: ["React", "JavaScript", "TypeScript", "Node.js", "AWS", "Azure"]
};

export const ProjectsSection = ({ id }: SectionProps) => {
  return (
    <Section id={id}>
      <SectionHeader>Projects</SectionHeader>
      <div className="space-y-12">
        <ProjectCard project={project} />
        <ProjectCard project={project2} />
        {/* <ProjectCard project={project3} /> */}
      </div>
    </Section>
  );
};

export default ProjectsSection;
