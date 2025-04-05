import ExperienceCard from "@/components/page/home/experience/experience-card";
import SectionHeader from "@/components/page/home/section-header";
import { SectionProps } from "@/components/page/home/section-types";

export const ExperienceSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="space-y-6">
      <SectionHeader>Experience</SectionHeader>
      <div>
        <ExperienceCard />
      </div>
    </section>
  );
};
