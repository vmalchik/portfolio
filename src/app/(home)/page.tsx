import AboutSection from "@/components/page/home/about-section";
import { SectionIds } from "@/components/page/home/section-types";

export default function HomePage() {
  return (
    <main>
      <AboutSection id={SectionIds.ABOUT} />
    </main>
  );
}
