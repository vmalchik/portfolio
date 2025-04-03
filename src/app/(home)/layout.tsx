import Header from "@/components/header";
import type { Metadata } from "next";
import Link from "next/link";
import SocialLinks from "../../components/social-links";

export const metadata: Metadata = {
  title: "Victor Malchikov",
  description: "Profile of Victor Malchikov, a software engineer"
};

export default function ArchiveLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header
        title="Victor Malchikov"
        subtitle="Software Developer"
        description="I work in the cloud and build applications for the web!"
      />

      {/* Internal navigation */}
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </nav>

      {/* Contact - Social Media & Resume */}
      <SocialLinks />
      <main>{children}</main>
    </div>
  );
}
