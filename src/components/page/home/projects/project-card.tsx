import BaseSectionCard, {
  BaseSectionCardContent,
  BaseSectionCardSideInfo
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
      <BaseSectionCardSideInfo>
        <Image
          loading="lazy"
          src={imageSrc}
          alt="todo"
          width={800}
          height={512}
          className="w-full h-auto object-cover outline-1 outline-light-gray-900"
        />
      </BaseSectionCardSideInfo>
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
