import AboutSection from "@/components/page/home/about/about-section";
import { ExperienceSection } from "@/components/page/home/experience/experience-section";
import { SectionIds } from "@/components/page/home/section-types";

export default function HomePage() {
  return (
    <main className="space-y-24">
      <AboutSection id={SectionIds.ABOUT} />
      <ExperienceSection id={SectionIds.EXPERIENCE} />
    </main>
  );
}
