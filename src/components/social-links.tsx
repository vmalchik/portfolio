import Link from "next/link";
import { SVGProps } from "react";

type SocialLink = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

export function GithubFill12(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 0C2.687 0 0 2.754 0 6.152c0 2.718 1.719 5.024 4.103 5.837c.3.057.41-.133.41-.296c0-.146-.005-.533-.008-1.046c-1.669.371-2.021-.825-2.021-.825c-.273-.711-.666-.9-.666-.9c-.545-.382.04-.374.04-.374c.603.044.92.634.92.634c.535.94 1.404.668 1.746.511c.055-.397.21-.669.381-.822c-1.332-.155-2.733-.683-2.733-3.04c0-.672.234-1.221.618-1.651c-.062-.156-.268-.781.058-1.629c0 0 .504-.165 1.65.631A5.6 5.6 0 0 1 6 2.975a5.6 5.6 0 0 1 1.502.207c1.146-.796 1.649-.63 1.649-.63c.327.847.121 1.472.06 1.628c.384.43.616.979.616 1.65c0 2.364-1.403 2.884-2.74 3.036c.216.19.408.565.408 1.14c0 .821-.007 1.485-.007 1.687c0 .164.108.356.412.296c2.382-.816 4.1-3.12 4.1-5.837C12 2.754 9.313 0 6 0"
      ></path>
    </svg>
  );
}
const links: SocialLink[] = [
  {
    href: "https://github.com/vmalchik/",
    icon: GithubFill12,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/victor-malchikov/",
    icon: GithubFill12,
    label: "LinkedIn"
  },
  {
    href: "/resume", // or external resume URL
    icon: GithubFill12,
    label: "Resume"
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
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <link.icon className="" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
