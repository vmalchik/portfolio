import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/common/card";
import FancyLink from "@/components/common/fancy-link";
import ArrowOutIcon from "@/components/common/icons/arrow-out";
import { cn } from "@/lib/utils/cn";
import React from "react";

export type BaseSectionCardProps = {
  title: {
    main: string;
    detail: string;
    description: string;
    url: string;
    ariaLabel: string;
  };
  children: React.ReactNode;
};
export const BaseSectionCardInfo = ({
  children,
  position = "bottom" // default
}: {
  children: React.ReactNode;
  position?: "top" | "bottom";
}) => {
  const orderClass = position === "top" ? "order-1" : "order-2";

  return (
    <div className={cn("col-span-3 sm:col-span-2 sm:order-none", orderClass)}>
      {children}
    </div>
  );
};
export const BaseSectionCardContent = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
};

export const BaseSectionCard = ({ title, children }: BaseSectionCardProps) => {
  let sideInfo: React.ReactNode = null;
  let content: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === BaseSectionCardInfo) {
      sideInfo = child;
    } else if (child.type === BaseSectionCardContent) {
      content = child;
    }
  });
  return (
    // Informational:
    // Previous attempt to style the card without using multiple columns
    // <div className="relative group sm:flex sm:gap-12 lg:gap-6 ">
    // <div className="relative group grid grid-cols-1 sm:grid-cols-[0.3fr_1fr] gap-6 sm:items-start">

    // Details:
    // use group hover to ensure hover is triggered for absolute positioned element
    // on mobile - stack vertically by having content take up all grid cols and side info take up 3
    // on desktop - stack horizontally with side info on left (image will dynamically resize and take 2 cols of the card width)
    <article className="relative group grid grid-cols-8 gap-2 sm:gap-6 sm:items-start">
      {/* highlight card on-hover with a light custom inset box shadow (a 1px inner top border in light gray-blue) */}
      <span
        aria-hidden="true"
        className="absolute -inset-x-4 -top-3 -bottom-3.5 sm:-inset-y-4.5 pointer-events-none rounded-md group-hover:bg-slate-400/6 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition"
      ></span>

      {/* side info */}
      {sideInfo}

      {/* content */}
      <Card className="col-span-8 sm:col-span-6 order-1 sm:order-none">
        <CardHeader>
          <CardTitle>
            <h3>
              <FancyLink
                highlightOnGroupHover
                href={title.url}
                aria-label={title.ariaLabel}
              >
                <span className="flex items-center gap-2 nowrap whitespace-nowrap">
                  {title.main} {title?.detail && <>&middot; {title.detail}</>}
                  {/* Move the arrow on hover to signal outbound link (quick start, smooth finish) */}
                  <ArrowOutIcon className="mb-0.5 flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </FancyLink>
            </h3>
          </CardTitle>
          {/* Instruct screen readers to ignore processing previous job titles */}
          <CardDescription aria-hidden="true">
            {title.description}
          </CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </article>
  );
};

export default BaseSectionCard;
