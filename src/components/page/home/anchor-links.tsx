import Link from "next/link";

const AnchorLinks = () => {
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

export default AnchorLinks;
