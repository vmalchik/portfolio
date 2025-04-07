import BaseSectionCard, {
  BaseSectionCardContent,
  BaseSectionCardInfo,
  CardTitle
} from "@/components/page/home/base-section-card";
import LinksList, { LinkDetails } from "@/components/page/home/links-list";
import Project from "@/components/page/home/projects/project-types";
import TechnologyList from "@/components/page/home/technology-list";
import { isNonEmptyArray } from "@/lib/utils/array";
import Image from "next/image";

type ProjectItemProps = {
  project: Project;
};

const getProjectLinks = (github?: LinkDetails, youtube?: LinkDetails) => {
  const projects: LinkDetails[] = [];
  if (github) projects.push(github);
  if (youtube) projects.push(youtube);
  return projects;
};

export const ProjectCard = ({ project }: ProjectItemProps) => {
  const {
    image: { src, alt, width, height },
    title,
    website,
    github,
    youtube,
    description,
    technologies
  } = project;

  const cardTitle: CardTitle = {
    main: title,
    url: website?.url || github?.url || undefined,
    ariaLabel: website?.ariaLabel || github?.ariaLabel || undefined
  };

  const projects: LinkDetails[] = getProjectLinks(github, youtube);

  return (
    <BaseSectionCard title={cardTitle}>
      <BaseSectionCardInfo position="bottom">
        <figure>
          <Image
            loading="lazy"
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="aspect-video object-cover rounded-sm border border-slate-900 mt-4 sm:mt-0.5"
          />
          <figcaption className="sr-only">
            Screenshot of the project {cardTitle.main}
          </figcaption>
        </figure>
      </BaseSectionCardInfo>
      <BaseSectionCardContent>
        <div className="space-y-3">
          {description && <p>{description}</p>}
          {isNonEmptyArray(projects) && <LinksList links={projects} />}

          {isNonEmptyArray(technologies) && (
            <TechnologyList list={technologies} />
          )}
        </div>
      </BaseSectionCardContent>
    </BaseSectionCard>
  );
};

export default ProjectCard;
