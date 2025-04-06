"use client";
import {
  SectionIds,
  sectionIdsArray
} from "@/components/page/home/section-types";
import useActiveSection from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils/cn";
import { capitalizeFirstLetter } from "@/lib/utils/string";
import Link from "next/link";

const AnchorLinks = () => {
  const activeSection = useActiveSection(sectionIdsArray);
  const orderedSections = [
    SectionIds.About,
    SectionIds.Experience,
    SectionIds.Projects
  ];
  return (
    <nav>
      <ul className="space-y-6">
        {orderedSections.map((id) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className={cn(
                "group flex flex-nowrap items-center gap-4 uppercase text-xs font-bold tracking-widest transition-colors",
                activeSection === id
                  ? "text-slate-200"
                  : "text-slate-500 hover:text-slate-200"
              )}
            >
              {/* prefix line to text that will grow (expand left -> right when active or on-hover) */}
              <span
                aria-hidden="true"
                className={cn(
                  "inline-block h-[1px] bg-current transition-all duration-300 origin-left ease-in-out",
                  activeSection === id ? "w-14" : "w-7 group-hover:w-14"
                )}
              />
              {capitalizeFirstLetter(id)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AnchorLinks;
