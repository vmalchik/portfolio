import ProjectsSection from "@//components/page/home/projects/projects-section";
import FancyLink, { FancyLinkProps } from "@/components/common/fancy-link";
import AboutSection from "@/components/page/home/about/about-section";
import { ExperienceSection } from "@/components/page/home/experience/experience-section";
import { SectionIds } from "@/components/page/home/section-types";

const FooterLink = (props: FancyLinkProps) => {
  return (
    <FancyLink {...props} className="text-slate-400">
      {props.children}
    </FancyLink>
  );
};

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24 lg:space-y-28">
      <AboutSection id={SectionIds.About} />
      <ExperienceSection id={SectionIds.Experience} />
      <ProjectsSection id={SectionIds.Projects} />
      <footer className="text-sm text-slate-500">
        Inspired by{" "}
        <FooterLink href="https://github.com/bchiang7">
          Brittany Chiang
        </FooterLink>{" "}
        and coded in{" "}
        <FooterLink href="https://code.visualstudio.com/">
          Visual Studio Code
        </FooterLink>
        . Built with <FooterLink href="https://nextjs.org/">Next.js</FooterLink>{" "}
        and{" "}
        <FooterLink href="https://tailwindcss.com//">Tailwind CSS</FooterLink>,
        deployed with <FooterLink href="https://vercel.com/">Vercel</FooterLink>
        . All text is set in the{" "}
        <FooterLink href="https://fonts.google.com/specimen/Inter">
          Inter
        </FooterLink>{" "}
        typeface.
      </footer>
    </div>
  );
}
