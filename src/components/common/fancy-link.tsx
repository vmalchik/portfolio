import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import type { ComponentProps } from "react";

type FancyLinkProps = ComponentProps<typeof Link> & {
  highlightOnGroupHover?: boolean;
};

export const FancyLink = ({
  children,
  className = "",
  highlightOnGroupHover = false,
  ...props
}: FancyLinkProps) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-slate-200 font-medium transition",
        highlightOnGroupHover
          ? "group-hover:text-teal-300"
          : "hover:text-teal-300",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default FancyLink;
