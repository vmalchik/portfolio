import FancyLink from "@/components/common/fancy-link";
import experience from "@/components/page/home/experience/data/experience-data";
import ExperienceCard from "@/components/page/home/experience/experience-card";
import Section, { SectionHeader } from "@/components/page/home/section";
import { SectionProps } from "@/components/page/home/section-types";

export const ExperienceSection = ({ id }: SectionProps) => {
  return (
    <Section id={id}>
      <SectionHeader>Experience</SectionHeader>
      <div className="space-y-12">
        {experience.map((exp) => (
          <ExperienceCard
            key={`${exp.company}-${exp.duration.startDate}`}
            experience={exp}
          />
        ))}
        <FancyLink
          noWrap
          showArrow
          href="/documents/resume.pdf"
          aria-label="Victor's Resume"
        >
          View Full Résumé
        </FancyLink>
      </div>
    </Section>
  );
};
