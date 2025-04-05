import BaseSectionCard, {
  BaseSectionCardContent,
  BaseSectionCardInfo
} from "@/components/page/home/base-section-card";
import WorkProjectsList from "@/components/page/home/experience/work-projects-list";
import TechnologyList from "@/components/page/home/technology-list";
import { isNonEmptyArray } from "@/lib/utils/array";

export type Project = {
  name: string;
  url: string;
  ariaLabel: string;
};

type ExperienceItemProps = {
  experience: {
    duration: {
      startDate: string;
      endDate?: string;
    };
    title: string;
    company: string;
    previousTitle?: string;
    projects?: Project[];
    description?: string;
    technologies?: string[];
  };
};

export const ExperienceCard = ({ experience }: ExperienceItemProps) => {
  const {
    duration: { startDate, endDate },
    title,
    company,
    previousTitle,
    description,
    projects,
    technologies
  } = experience;

  const endDateNormalized = endDate ? endDate : "Present";
  const duration = `${startDate}  ${endDateNormalized}`;
  const durationAriaLabel = `Work start date ${duration} to ${endDateNormalized}`;

  const cardTitle = {
    main: title,
    detail: company,
    description: previousTitle || "",
    url: "",
    ariaLabel: `Work at ${company}`
  };

  return (
    <BaseSectionCard title={cardTitle}>
      <BaseSectionCardInfo position="top">
        <span
          aria-label={durationAriaLabel}
          className="inline-block min-w-fit text-xs font-semibold uppercase tracking-wide text-slate-500 sm:mt-1"
        >
          {startDate} &mdash; {endDateNormalized}
        </span>
      </BaseSectionCardInfo>
      <BaseSectionCardContent>
        <div className="space-y-3">
          {description && <p>{description}</p>}
          {isNonEmptyArray(projects) && (
            <WorkProjectsList projects={projects} />
          )}
          {isNonEmptyArray(technologies) && (
            <TechnologyList list={technologies} />
          )}
        </div>
      </BaseSectionCardContent>
    </BaseSectionCard>
  );
};

export default ExperienceCard;
