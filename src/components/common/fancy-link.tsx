import ArrowOutIcon from "@/components/common/icons/arrow-out";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type FancyLinkProps = ComponentProps<typeof Link> & {
  highlightOnGroupHover?: boolean;
  showArrow?: boolean;
  children: ReactNode;
};

export const FancyLink = ({
  children,
  className = "",
  highlightOnGroupHover = false,
  showArrow = false,
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
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        {children}
        {/* Move the arrow on hover to signal outbound link (quick start, smooth finish) */}
        {showArrow && (
          <ArrowOutIcon className="mb-0.5 flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
        )}
      </span>
    </Link>
  );
};

export default FancyLink;
