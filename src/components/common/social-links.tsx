import GitHubIcon from "@/components/common/icons/github";
import LinkedinIcon from "@/components/common/icons/linkedin";
import TieIcon from "@/components/common/icons/tie";
import YoutubeIcon from "@/components/common/icons/youtube";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type SocialLink = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  ariaLabel: string;
  className?: string;
};

const links: SocialLink[] = [
  {
    href: "https://github.com/vmalchik/",
    icon: GitHubIcon,
    ariaLabel: "Victor's GitHub account",
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/victor-malchikov/",
    icon: LinkedinIcon,
    ariaLabel: "Victor's LinkedIn profile",
    label: "LinkedIn"
  },
  {
    href: "https://www.youtube.com/@victormalchikov/videos",
    icon: YoutubeIcon,
    ariaLabel: "Victor's Youtube channel",
    label: "Youtube",
    className: "scale-120"
  },
  {
    href: "/documents/resume.pdf",
    icon: TieIcon,
    ariaLabel: "Victor's Resume",
    label: "Resume",
    className: "scale-110"
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
              aria-label={link.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors duration-100 ease-in-out"
            >
              <link.icon
                aria-hidden="true"
                className={cn("h-7 w-7", link.className)}
              />
              <span className="sr-only">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
