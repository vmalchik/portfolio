import SectionHeader from "@/components/page/home/section-header";
import { SectionProps } from "./section-types";

export const ExperienceSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="space-y-6">
      <SectionHeader>Experience</SectionHeader>

      <div></div>
    </section>
  );
};
