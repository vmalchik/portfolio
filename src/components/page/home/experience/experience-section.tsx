import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/common/card";
import SectionHeader from "@/components/page/home/section-header";
import { SectionProps } from "@/components/page/home/section-types";

export const ExperienceSection = ({ id }: SectionProps) => {
  return (
    <section id={id} className="space-y-6">
      <SectionHeader>Experience</SectionHeader>
      <Card>
        <CardHeader>
          <CardTitle>Senior Principal Software Engineer</CardTitle>
          <CardDescription>Principal Software Engineer</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {/* description - can be text, image, text + image */}
            {/* should be provided as separate props */}
            {/* <span>2024 - Present</span> */}
            {/* <span>Some Image</span> */}
            {/* title */}
            {/* <span>Senior Principal Software Engineer</span> */}
            {/* optional sub-title */}
            {/* <span>Principal Software Engineer</span> */}
            <p>
              As a Senior Principal Engineer at RSA, I led front-end and cloud
              development across multiple business units, including NetWitness,
              Archer and SecurID. I helped launch a SaaS risk platform that
              contributed to RSA's leader recognition in Gartner's Magic
              Quadrant and filed several patents around risk modeling and access
              policy automation.
            </p>
            <div>
              {/* each element here should be it's own component */}
              <span>Project 1</span>
              <span>Project 2</span>
              <span>Project 3</span>
            </div>
            <div>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>AWS</span>
              <span>AWS</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
