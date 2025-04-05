import { SVGProps } from "react";

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.576 13.481a3.5 3.5 0 0 0 4.95 4.95m2.473-7.423a3.5 3.5 0 0 1 0 4.95l-2.475 2.475m-2.475-7.425l-2.475 2.475m12.857-2.957a3.5 3.5 0 1 0-4.95-4.95M11.01 13a3.5 3.5 0 0 1 0-4.95l2.474-2.475M15.958 13l2.475-2.475"
      ></path>
    </svg>
  );
}

export default LinkIcon;
