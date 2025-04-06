import ProjectCard from "@/components/page/home/projects/project-card";
import Section, { SectionHeader } from "@/components/page/home/section";
import { SectionProps } from "@/components/page/home/section-types";

const experience = {
  imageSrc: "/projects/wordmuseai.jpg",
  title: "WordMuseAI",
  companyUrl: "/projects/wordmuseai.jpg",
  ariaLabel: "p1",
  description: `As a Senior Principal Engineer at RSA, I led front-end and cloud development across multiple business units, including NetWitness, Archer and SecurID. I helped launch a SaaS risk platform that contributed to RSA's leader recognition in Gartner's Magic Quadrant and filed several patents around risk modeling and access policy automation.`,
  technologies: ["React", "JavaScript", "TypeScript", "Node.js", "AWS", "Azure"]
};

const experience2 = {
  imageSrc: "/projects/wordmuseai.jpg",
  title: "WordMuseAI",
  companyUrl: "https://www.rsa.com/en-us",
  ariaLabel: "p1",
  description: `As a Senior Principal Engineer at RSA, I led front-end and cloud development across multiple business units, including NetWitness, Archer and SecurID. I helped launch a SaaS risk platform that contributed to RSA's leader recognition in Gartner's Magic Quadrant and filed several patents around risk modeling and access policy automation.`,
  technologies: []
};

const experience3 = {
  imageSrc: "/projects/wordmuseai.jpg",
  title: "WordMuseAI",
  companyUrl: "https://www.rsa.com/en-us",
  ariaLabel: "p1",
  description: `As a Senior Principal Engineer at RSA, I led front-end and cloud development across multiple business units, including NetWitness, Archer and SecurID. I helped launch a SaaS risk platform that contributed to RSA's leader recognition in Gartner's Magic Quadrant and filed several patents around risk modeling and access policy automation.`,
  technologies: []
};

export const ProjectsSection = ({ id }: SectionProps) => {
  return (
    <Section id={id}>
      <SectionHeader>Projects</SectionHeader>
      <div className="space-y-12">
        <ProjectCard project={experience} />
        <ProjectCard project={experience2} />
        <ProjectCard project={experience3} />
      </div>
    </Section>
  );
};

export default ProjectsSection;
