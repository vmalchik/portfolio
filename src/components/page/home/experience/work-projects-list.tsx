import FancyLink from "@/components/common/fancy-link";
import LinkIcon from "@/components/common/icons/link";
import { Project } from "@/components/page/home/experience/experience-card";

type WorkProjectsListProps = {
  projects: Project[];
};

export const WorkProjectsList = ({ projects }: WorkProjectsListProps) => {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-2">
      {projects.map((project) => (
        <li key={project.name}>
          <FancyLink
            href={project.url}
            aria-label={project.ariaLabel}
            className="flex flex-nowrap gap-1 items-center text-sm font-normal"
          >
            <LinkIcon /> {project.name}
          </FancyLink>
        </li>
      ))}
    </ul>
  );
};

export default WorkProjectsList;
