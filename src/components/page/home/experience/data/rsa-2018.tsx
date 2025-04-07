import { Experience } from "@/components/page/home/experience/experience-types";
import Technologies from "@/lib/types/technologies";

export const experienceRSA2018: Experience = {
  duration: {
    startDate: "2018",
    endDate: "Mar 2025"
  },
  title: "Senior Principal Software Engineer",
  previousTitle: "Principal Software Engineer",
  company: "RSA",
  url: "https://www.rsa.com/en-us",
  description:
    "Led front-end, cloud, and on-prem development across RSA’s NetWitness, Archer, and SecurID teams. Specialized in rapid prototyping and greenfield product launches, including a SaaS GRC platform that enabled 40+ Q1 onboardings, earning Gartner Leader status. Built AWS Glue ETL pipelines and filed four patents spanning risk modeling and access automation.",
  // "Led front-end and cloud development across RSA’s NetWitness, Archer, and SecurID units, spanning R&D and product. Architected the ReactJS front-end for a new SaaS GRC platform, enabling 40+ Q1 onboardings and contributing to RSA’s Leader placement in Gartner’s Magic Quadrant. Implemented AWS Glue ETL to reduce noisy data by 70%, and filed four patents in risk modeling, location-based access, and task automation.",
  // "Led front-end and cloud development across multiple business units, including NetWitness, Archer, and SecurID. I helped launch a SaaS risk platform that contributed to RSA's leader recognition in Gartner's Magic Quadrant and filed patents around risk modeling and access policy automation.",
  projects: [
    {
      name: "Archer Vendor Portal",
      url: "https://www.archerirm.com/archer-engage-for-vendors",
      ariaLabel: "Archer Vendor Portal product"
    },
    {
      name: "NetWitness Insight",
      url: "https://www.netwitness.com/products/netwitness-insight/",
      ariaLabel: "NetWitness Insight product"
    },
    {
      name: "Filed Patents",
      url: "https://patents.google.com/?q=(victor+malchikov)",
      ariaLabel: "Patents by Victor Malchikov"
    }
    //
    // {
    //   name: "RSA IoT Security Monitor",
    //   url: "https://www.youtube.com/watch?v=2rF-vXmA9us",
    //   ariaLabel: "Youtube video of RSA IoT Security Monitor"
    // }
  ],
  technologies: [
    Technologies.React,
    Technologies.TypeScript,
    Technologies.JavaScript,
    Technologies.HTML,
    Technologies.CSS,
    Technologies.AWS,
    Technologies.NodeJS,
    Technologies.Python,
    Technologies.Java,
    Technologies.ApacheSpark
  ]
};

export default experienceRSA2018;
