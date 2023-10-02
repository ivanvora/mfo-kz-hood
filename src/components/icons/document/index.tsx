import React from "react";

import type { TProps } from "..";

export default function DocumentIcon({ style, className }: TProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={style}
      className={className}
      viewBox="0 0 120 120"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M70 10H30C24.5 10 20 14.5 20 20V100C20 105.5 24.45 110 29.95 110H90C95.5 110 100 105.5 100 100V40L70 10ZM80 60H40V70H80V60ZM80 80H40V90H80V80ZM30 100H90V45H65V20H30V100Z"
      />
    </svg>
  );
}
