import ProjectsSection from "@//components/page/home/projects/projects-section";
import AboutSection from "@/components/page/home/about/about-section";
import { ExperienceSection } from "@/components/page/home/experience/experience-section";
import { SectionIds } from "@/components/page/home/section-types";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-32">
      <AboutSection id={SectionIds.About} />
      <ExperienceSection id={SectionIds.Experience} />
      <ProjectsSection id={SectionIds.Projects} />
    </div>
  );
}
