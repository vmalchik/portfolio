import FancyLink from "@/components/common/fancy-link";
import Section, { SectionHeader } from "@/components/page/home/section";
import { SectionProps } from "@/components/page/home/section-types";

// This file contains the content for the "About" section of the home page.
// e.g. https://www.complytec.com/wp-content/uploads/RSA-Archer-Gartner-Reports.pdf

export const aboutParagraphs = {
  intro: (
    <p>
      I&apos;m a full-stack engineer passionate about building UIs in React and
      designing cloud-native systems in AWS. I&apos;m most at home when
      prototyping, collaborating, and diving deep into new ideas. I&apos;m drawn
      to projects where I can contribute to how things are designed — not just
      how they&apos;re implemented.
    </p>
  ),
  rsa: (
    <p>
      As a Senior Principal Engineer at{" "}
      <FancyLink href="https://www.rsa.com/" aria-label="RSA Security">
        RSA
      </FancyLink>
      I led front-end and cloud development across NetWitness, Archer and
      SecurID business units. I helped launch a{" "}
      <FancyLink
        href="https://www.archerirm.com/archer-engage-for-vendors"
        aria-label="Archer Vendor Portal product"
      >
        SaaS risk platform
      </FancyLink>{" "}
      earning{" "}
      <FancyLink
        href="https://www.archerirm.community/s/blogs/rsa-named-a-leader-in-2020-gartner-magic-quadrant-for-it-vendor-risk-management-MCWZPJKWOQVZE5ZA3ZYQMWGHIKQU"
        aria-label="Archer Gartner Magic Quadrant leader recognition"
      >
        leader recognition
      </FancyLink>{" "}
      in Gartner&apos;s Magic Quadrant and filed several{" "}
      <FancyLink
        href="https://patents.google.com/?q=victor+malchikov"
        aria-label="Victor Malchikov patent search on Google Patents"
      >
        patents
      </FancyLink>{" "}
      around risk modeling and access policy automation.
    </p>
  ),
  startups: (
    <p>
      I&apos;ve worked with a range of startups — including as a founding
      engineer at Genify, where I led front-end architecture and design from MVP
      through{" "}
      <FancyLink
        href="https://www.ftdsolutions.net/"
        aria-label="FTD Solutions"
      >
        acquisition by FTD Solutions
      </FancyLink>
      . Additionally, I enjoy exploring new technologies through passion
      projects like{" "}
      <FancyLink href="https://www.wordmuseai.com/" aria-label="WordMuseAI">
        WordMuse AI
      </FancyLink>
      , where I trained a custom OpenAI model to help users write thoughtful
      messages using LLMs.
    </p>
  ),
  personal: (
    <p>
      In my free time, I&apos;m usually hiking, learning new tech, exploring
      educational content creation, or taking care of my two birds — Blue and
      Einstein.
    </p>
  )
};

export default function AboutSection({ id }: SectionProps) {
  return (
    <Section id={id}>
      <SectionHeader>About</SectionHeader>
      {aboutParagraphs.intro}
      {aboutParagraphs.rsa}
      {aboutParagraphs.startups}
      {aboutParagraphs.personal}
    </Section>
  );
}
