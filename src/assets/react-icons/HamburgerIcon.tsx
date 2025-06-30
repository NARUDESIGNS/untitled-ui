import React from "react";

const HamburgerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    {...props}
  >
    <path
      d="M1 7.5H15M1 1.5H19M1 13.5H19"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HamburgerIcon;
