import BaseSectionCard, {
  BaseSectionCardContent,
  BaseSectionCardInfo
} from "@/components/page/home/base-section-card";
import LinksList, { LinkDetails } from "@/components/page/home/links-list";
import TechnologyList from "@/components/page/home/technology-list";
import Technologies from "@/lib/types/technologies";
import { isNonEmptyArray } from "@/lib/utils/array";
import Image from "next/image";

export type Project = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  website?: LinkDetails;
  github?: LinkDetails;
  youtube?: LinkDetails;
  description: string;
  technologies: Technologies[];
};

type ProjectItemProps = {
  project: Project;
};

const getProjectLinks = (
  website?: LinkDetails,
  github?: LinkDetails,
  youtube?: LinkDetails
) => {
  const projects: LinkDetails[] = [];
  if (website) projects.push(website);
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

  const cardTitle = {
    main: title,
    description: description,
    url: website?.url || github?.url || undefined,
    ariaLabel: website?.ariaLabel || github?.ariaLabel || undefined
  };

  const projects: LinkDetails[] = getProjectLinks(website, github, youtube);

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
            className="aspect-video object-cover rounded border border-slate-900 mt-4 sm:mt-0"
            // todo - determine if alternative implementation where image border changes on hover is better
            // className="aspect-video object-cover rounded border border-slate-200/10 transition group-hover:border-slate-200/30 mt-4 sm:mt-0"
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
