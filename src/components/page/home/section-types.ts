export enum SectionIds {
  About = "about",
  Experience = "experience",
  Projects = "projects"
}

export const sectionIdsArray = Object.values(SectionIds) as string[];

export type SectionProps = {
  id: string;
};
