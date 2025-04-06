import { useEffect, useState } from "react";

/**
 * Custom hook to track the active section in the viewport.
 * @param sections - Array of section IDs to observe.
 * @returns The ID of the currently active section.
 */
export default function useActiveSection(sections: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  //   | Top of screen (0%)       | ← element must reach **here**
  //   |                          |
  //   |     ✅ Active zone       | ← element is now "in view"
  //   |     (0% → 40% zone)      |
  //   |                          |
  //   |                          |
  //   | (Below this = inactive)  |
  //   |--------------------------| ← shifted-up bottom (at 40%)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        // Trigger when the top of the section reaches 40% down the viewport AND at least 20% of the section is visible
        // Basically setting "active zone" for the observer is between 0 and 40% down the page by moving the bottom edge
        // upward by 60% of the viewport height
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2 // Prevents flickering or firing too early; Ensures the element is meaningfully in view, not just a tiny sliver
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeId;
}
