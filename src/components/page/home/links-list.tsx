import FancyLink from "@/components/common/fancy-link";
import LinkIcon from "@/components/common/icons/link";

export type LinkDetails = {
  url: string;
  name: string;
  ariaLabel: string;
};

type LinksListProps = {
  links: LinkDetails[];
};

export const LinksList = ({ links }: LinksListProps) => {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <FancyLink
            noWrap
            href={link.url}
            aria-label={link.ariaLabel}
            className="flex flex-nowrap gap-1 items-center text-sm font-normal"
          >
            <LinkIcon /> {link.name}
          </FancyLink>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;
