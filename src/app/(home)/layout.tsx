import type { Metadata } from "next";
import Link from "next/link";

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
      <h1>Victor Malchikov</h1>
      <h2>Software Developer</h2>
      <p>I work in the cloud and build applications for the web!</p>

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
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="#about">GitHub</Link>
          </li>
          <li>
            <Link href="#experience">LinkedIn</Link>
          </li>
          <li>
            <Link href="#projects">Resume</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
