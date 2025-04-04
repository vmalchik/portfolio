import Link from "next/link";
import type { ComponentProps } from "react";

type FancyLinkProps = ComponentProps<typeof Link>;

export const FancyLink = ({
  children,
  className = "",
  ...props
}: FancyLinkProps) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={`text-slate-200 hover:text-teal-300 font-medium transition-colors duration-50 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default FancyLink;
