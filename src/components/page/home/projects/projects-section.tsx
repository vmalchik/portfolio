import projects from "@/components/page/home/projects/data/projects-data";
import ProjectCard from "@/components/page/home/projects/project-card";
import Section, { SectionHeader } from "@/components/page/home/section";
import { SectionProps } from "@/components/page/home/section-types";

export const ProjectsSection = ({ id }: SectionProps) => {
  return (
    <Section id={id}>
      <SectionHeader>Projects</SectionHeader>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
