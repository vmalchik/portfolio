import BaseSectionCard, {
  BaseSectionCardContent,
  BaseSectionCardInfo
} from "@/components/page/home/base-section-card";
import TechnologyList from "@/components/page/home/technology-list";
import { isNonEmptyArray } from "@/lib/utils/array";
import Image from "next/image";

export type Project = {
  name: string;
  url: string;
  ariaLabel: string;
};

type ProjectItemProps = {
  project: {
    imageSrc: string;
    title: string;
    companyUrl: string;
    ariaLabel: string;
    description: string;
    technologies: string[];
  };
};

export const ProjectCard = ({ project }: ProjectItemProps) => {
  const { imageSrc, title, companyUrl, ariaLabel, description, technologies } =
    project;

  const cardTitle = {
    main: title,
    detail: "detail",
    description: "description",
    url: companyUrl,
    ariaLabel: `todo`
  };

  return (
    <BaseSectionCard title={cardTitle}>
      <BaseSectionCardInfo position="bottom">
        <figure>
          <Image
            loading="lazy"
            src={imageSrc}
            alt="todo"
            width={800}
            height={512}
            className="aspect-video object-cover rounded border border-slate-200/10 transition group-hover:border-slate-200/30 mt-4 sm:mt-0"
          />
          <figcaption className="sr-only">
            Screenshot of the project {cardTitle.main}
          </figcaption>
        </figure>
      </BaseSectionCardInfo>
      <BaseSectionCardContent>
        <div className="space-y-3">
          {description && <p>{description}</p>}
          {isNonEmptyArray(technologies) && (
            <TechnologyList list={technologies} />
          )}
        </div>
      </BaseSectionCardContent>
    </BaseSectionCard>
  );
};

export default ProjectCard;
