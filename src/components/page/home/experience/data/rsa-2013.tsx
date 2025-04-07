import { Experience } from "@/components/page/home/experience/experience-types";
import Technologies from "@/lib/types/technologies";

export const experienceRSA2013: Experience = {
  duration: {
    startDate: "2013",
    endDate: "Jan 2017"
  },
  title: "Senior Software Engineer",
  previousTitle: "Software Engineer",
  company: "RSA",
  url: "https://www.rsa.com/",
  description:
    "Drove front-end and mobile initiatives across RSA’s SecurID and NetWitness product lines. Integrated biometric and token-based authentication into next-gen mobile identity products, and contributed to the UI redesign of the NetWitness platform using EmberJS. Mentored junior developers to promote growth and maintain code quality.",
  projects: [],
  technologies: [
    Technologies.Android,
    Technologies.Java,
    Technologies.Ember,
    Technologies.JavaScript,
    Technologies.HTML,
    Technologies.CSS
  ]
};

export default experienceRSA2013;
