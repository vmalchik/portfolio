import BaseSectionCard, {
  BaseSectionCardContent,
  BaseSectionCardInfo
} from "@/components/page/home/base-section-card";
import { Experience } from "@/components/page/home/experience/experience-types";
import LinksList from "@/components/page/home/links-list";
import TechnologyList from "@/components/page/home/technology-list";
import { isNonEmptyArray } from "@/lib/utils/array";

type ExperienceItemProps = {
  experience: Experience;
};

export const ExperienceCard = ({ experience }: ExperienceItemProps) => {
  const {
    duration: { startDate, endDate },
    title,
    company,
    url,
    previousTitle,
    description,
    projects,
    technologies
  } = experience;

  const endDateNormalized = endDate ? endDate : "Present";
  const duration = `${startDate}  ${endDateNormalized}`;
  const durationAriaLabel = `Employed from ${duration} to ${endDateNormalized}`;

  const cardTitle = {
    main: title,
    detail: company,
    description: previousTitle || "",
    url,
    ariaLabel: `Historical employment at ${company}`
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
        <div className="space-y-4">
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

export default ExperienceCard;
