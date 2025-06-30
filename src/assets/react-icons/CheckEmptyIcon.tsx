import React from "react";

const CheckEmptyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="white" />
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#D0D5DD" />
  </svg>
);

export default CheckEmptyIcon;
