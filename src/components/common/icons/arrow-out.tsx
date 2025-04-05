import { SVGProps } from "react";

export function ArrowOutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
      ></path>
    </svg>
  );
}

export default ArrowOutIcon;
