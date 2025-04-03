import Link from "next/link";
import GitHubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";
import TieIcon from "./icons/tie";

type SocialLink = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

const links: SocialLink[] = [
  {
    href: "https://github.com/vmalchik/",
    icon: GitHubIcon,
    label: "GitHub link (opens in new tab)"
  },
  {
    href: "https://www.linkedin.com/in/victor-malchikov/",
    icon: LinkedinIcon,
    label: "LinkedIn link (opens in new tab)"
  },
  {
    href: "/resume",
    icon: TieIcon,
    label: "Resume link (navigates to resume page)"
  }
];

export const SocialLinks = () => {
  return (
    <nav arial-label="Social media and resume links" className="">
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon aria-hidden="true" className="h-8 w-8" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
