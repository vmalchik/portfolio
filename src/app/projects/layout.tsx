import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Victor Malchikov",
  description: "Projects worked on by Victor Malchikov"
};

export default function ProjectsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
