import { ReactNode } from "react";

export const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <span className="inline-block text-sm font-medium leading-5 bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full">
      {children}
    </span>
  );
};
export default Badge;
