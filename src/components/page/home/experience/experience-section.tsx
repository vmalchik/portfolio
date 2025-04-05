import ExperienceCard from "@/components/page/home/experience/experience-card";
import SectionHeader from "@/components/page/home/section-header";
import { SectionProps } from "@/components/page/home/section-types";

const experience = {
  duration: {
    startDate: "2024"
  },
  title: "Senior Principal Software Engineer",
  previousTitle: "Principal Software Engineer",
  company: "RSA",
  companyUrl: "https://www.rsa.com/en-us",
  description:
    "As a Senior Principal Engineer at RSA, I led front-end and cloud development across multiple business units, including NetWitness, Archer and SecurID. I helped launch a SaaS risk platform that contributed to RSA's leader recognition in Gartner's Magic Quadrant and filed several patents around risk modeling and access policy automation.",
  projects: [
    {
      name: "Archer Vendor Portal",
      url: "https://www.rsa.com/en-us",
      ariaLabel: "p1"
    },
    {
      name: "NetWitness Insight",
      url: "https://www.rsa.com/en-us",
      ariaLabel: "p1"
    },
    {
      name: "NetWitness IoT",
      url: "https://www.rsa.com/en-us",
      ariaLabel: "p1"
    }
  ],
  technologies: ["React", "JavaScript", "TypeScript", "Node.js", "AWS", "Azure"]
};

const experience2 = {
  duration: {
    startDate: "2024"
  },
  title: "Senior Principal Software Engineer",
  company: "RSA",
  companyUrl: "https://www.rsa.com/en-us",
  description:
    "As a Senior Principal Engineer at RSA, I led front-end and cloud development across multiple business units, including NetWitness, Archer and SecurID. I helped launch a SaaS risk platform that contributed to RSA's leader recognition in Gartner's Magic Quadrant and filed several patents around risk modeling and access policy automation.",
  projects: [
    {
      name: "Archer Vendor Portal",
      url: "https://www.rsa.com/en-us",
      ariaLabel: "p1"
    },
    {
      name: "NetWitness Insight",
      url: "https://www.rsa.com/en-us",
      ariaLabel: "p1"
    },
    {
      name: "NetWitness IoT",
      url: "https://www.rsa.com/en-us",
      ariaLabel: "p1"
    }
  ],
  technologies: []
};

export const ExperienceSection = ({ id }: SectionProps) => {
  return (
    <section id={id}>
      <div className="space-y-6">
        <SectionHeader>Experience</SectionHeader>
        <div className="space-y-12">
          <ExperienceCard experience={experience} />
          <ExperienceCard experience={experience2} />
        </div>
      </div>
    </section>
  );
};
