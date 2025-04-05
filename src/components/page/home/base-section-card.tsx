import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/common/card";
import FancyLink from "@/components/common/fancy-link";
import ArrowOutIcon from "@/components/common/icons/arrow-out";
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
export const BaseSectionCardSideInfo = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <>{children}</>;
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

    if (child.type === BaseSectionCardSideInfo) {
      sideInfo = child;
    } else if (child.type === BaseSectionCardContent) {
      content = child;
    }
  });
  return (
    // use group hover to ensure hover is triggered for absolute positioned element
    <div className="relative group sm:flex sm:gap-12 lg:gap-6 ">
      {/* highlight card on-hover with a light custom inset box shadow (a 1px inner top border in light gray-blue) */}
      <span
        aria-hidden="true"
        className="absolute -inset-x-4 -top-3 -bottom-3.5 sm:-inset-y-4.5 pointer-events-none rounded-md group-hover:bg-slate-400/6 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition"
      ></span>
      {sideInfo}
      <Card>
        <CardHeader>
          <CardTitle>
            <FancyLink
              highlightOnGroupHover
              href={title.url}
              aria-label={title.ariaLabel}
            >
              <h3 className="flex items-center gap-2">
                {title.main} {title?.detail && <>&middot; {title.detail} </>}
                {/* Move the arrow on hover to signal outbound link (quick start, smooth finish) */}
                <ArrowOutIcon className="mb-0.5 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
            </FancyLink>
          </CardTitle>
          {/* Instruct screen readers to ignore processing previous job titles */}
          <CardDescription aria-hidden="true">
            {title.description}
          </CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </Card>
    </div>
  );
};

export default BaseSectionCard;
