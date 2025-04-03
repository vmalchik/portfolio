import Link from "next/link";

type PageSection = {
  id: string;
};

export const sections: PageSection[] = [
  { id: "about" },
  { id: "experience" },
  { id: "projects" }
];

const AnchorMainLinks = () => {
  return (
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
  );
};

export default AnchorMainLinks;
