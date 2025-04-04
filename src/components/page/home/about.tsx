import FancyLink from "@/components/common/fancy-link";
import { PageSections } from "@/components/page/home/anchor-links";
// This file contains the content for the "About" section of the home page.
// https://www.complytec.com/wp-content/uploads/RSA-Archer-Gartner-Reports.pdf
// https://patents.google.com/patent/US11122438B2/en?q=(victor+malchikov)&oq=victor+malchikov
// https://patents.google.com/patent/US20210241192A1/en?q=(victor+malchikov)&oq=victor+malchikov
// https://patents.google.com/patent/US11023863B2/en?q=(victor+malchikov)&oq=victor+malchikov
// https://patents.google.com/patent/US20210241231A1/en?q=(victor+malchikov)&oq=victor+malchikov

export const aboutParagraphs = {
  intro: (
    <p>
      I&apos;m a full-stack software engineer with a focus on cloud architecture
      and a passion for front-end development. I enjoy working across the stack
      — from building UI in React to designing scalable systems in AWS. I&apos;m
      most at home when prototyping, collaborating, and diving deep into new
      ideas. I&apos;m drawn to projects where I can contribute to how things are
      designed — not just how they&apos;re implemented.
    </p>
  ),
  rsa: (
    <p>
      As a Senior Principal Engineer at{" "}
      <FancyLink
        href="https://www.rsa.com/"
        aria-label="RSA Security (opens in new tab)"
      >
        RSA
      </FancyLink>
      , I led front-end and cloud development across multiple business units,
      including NetWitness, Archer and SecurID. I helped launch a{" "}
      <FancyLink
        href="https://www.archerirm.com/archer-engage-for-vendors"
        aria-label="Archer vendor portal product (opens in new tab)"
      >
        SaaS risk platform
      </FancyLink>{" "}
      that contributed to RSA&apos;s{" "}
      <FancyLink
        href="https://www.archerirm.community/s/blogs/rsa-named-a-leader-in-2020-gartner-magic-quadrant-for-it-vendor-risk-management-MCWZPJKWOQVZE5ZA3ZYQMWGHIKQU"
        aria-label="Archer Gartner Magic Quadrant leader recognition (opens in new tab)"
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
      I&apos;ve also worked with a range of startups — including as a founding
      engineer at Genify, where I led front-end architecture and design from MVP
      through{" "}
      <FancyLink
        href="https://www.ftdsolutions.net/"
        aria-label="FTD Solutions (opens in new tab)"
      >
        acquisition by FTD Solutions
      </FancyLink>
      . I additionally enjoy exploring new technologies through passion projects
      like{" "}
      <FancyLink
        href="https://www.wordmuseai.com/"
        aria-label="WordMuseAI (opens in new tab)"
      >
        WordMuseAI
      </FancyLink>
      , where I trained a custom OpenAI model to help users write thoughtful
      messages using LLMs.
    </p>
  ),
  personal: (
    <p>
      In my free time, I&apos;m usually out hiking, traveling with my
      girlfriend, joining outdoor volunteer events, or taking care of my two
      birds — Blue and Einstein.
    </p>
  )
};

export default function About() {
  return (
    <section id={PageSections.ABOUT} className="space-y-6">
      {aboutParagraphs.intro}
      {aboutParagraphs.rsa}
      {aboutParagraphs.startups}
      {aboutParagraphs.personal}
    </section>
  );
}
