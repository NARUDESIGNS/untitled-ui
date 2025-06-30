import React from "react";

const CheckFilledIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#7F56D9" />
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#7F56D9" />
    <path
      d="M11.3334 5.5L6.75002 10.0833L4.66669 8"
      stroke="white"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckFilledIcon;
