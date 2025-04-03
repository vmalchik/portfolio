import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Victor Malchikov",
  description: "Victor Malchikov's resume"
};

export default function ResumeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
