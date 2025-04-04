import GitHubIcon from "@/components/common/icons/github";
import LinkedinIcon from "@/components/common/icons/linkedin";
import TieIcon from "@/components/common/icons/tie";
import Link from "next/link";

type SocialLink = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  ariaLabel: string;
};

const links: SocialLink[] = [
  {
    href: "https://github.com/vmalchik/",
    icon: GitHubIcon,
    ariaLabel: "GitHub link (opens in new tab)",
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/victor-malchikov/",
    icon: LinkedinIcon,
    ariaLabel: "LinkedIn link (opens in new tab)",
    label: "LinkedIn"
  },
  {
    href: "/resume.pdf",
    icon: TieIcon,
    ariaLabel: "Resume link (navigates to resume page)",
    label: "Resume"
  }
];

export const SocialLinks = () => {
  return (
    <nav arial-label="Social media and resume links">
      <ul className="flex">
        {links.map((link) => (
          <li key={link.label} className="mr-6">
            <Link
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors duration-100 ease-in-out"
            >
              <link.icon aria-hidden="true" className="h-7 w-7" />
              <span className="sr-only">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
