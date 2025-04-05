import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/common/card";
import FancyLink from "@/components/common/fancy-link";
import ArrowOutIcon from "@/components/common/icons/arrow-out";
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

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
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
  const duration = `${startDate} - ${endDateNormalized}`;
  const durationAriaLabel = `Work start date ${duration} to ${endDateNormalized}`;

  return (
    // use group hover to ensure hover is triggered for absolute positioned element
    <div className="relative group sm:flex sm:gap-12 lg:gap-6 ">
      {/* highlight card on-hover with a light custom inset box shadow (a 1px inner top border in light gray-blue) */}
      <span
        aria-hidden="true"
        className="absolute -inset-x-4 -top-3 -bottom-3.5 sm:-inset-y-4 pointer-events-none rounded-md group-hover:bg-slate-400/5 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition"
      ></span>
      <span
        aria-label={durationAriaLabel}
        className="inline-block min-w-fit text-xs font-semibold uppercase tracking-wide text-slate-500 sm:mt-1"
      >
        {startDate} &ndash; {endDateNormalized}
      </span>
      <Card>
        <CardHeader>
          <CardTitle>
            <FancyLink highlightOnGroupHover href="https://www.rsa.com/en-us">
              <h3 className="flex items-center gap-2">
                {title} &middot; {company}{" "}
                {/* Move the arrow on hover to signal outbound link (quick start, smooth finish) */}
                <ArrowOutIcon className="mb-0.5 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
            </FancyLink>
          </CardTitle>
          {/* Instruct screen readers to ignore processing previous job titles */}
          <CardDescription aria-hidden="true">{previousTitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {description && <p>{description}</p>}
            {isNonEmptyArray(projects) && (
              <WorkProjectsList projects={projects} />
            )}
            {isNonEmptyArray(technologies) && (
              <TechnologyList list={technologies} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperienceItem;
