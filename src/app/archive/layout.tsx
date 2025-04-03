import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive | Victor Malchikov",
  description: "Archive of projects worked on by Victor Malchikov"
};

export default function ArchiveLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-screen">{children}</div>;
}
