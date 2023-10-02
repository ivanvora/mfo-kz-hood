import React from "react";

import type { TProps } from "..";

export default function CreditCardIcon({ style, className }: TProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 120 120"
      className={className}
      style={style}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M100 20H20C14.45 20 10.05 24.45 10.05 30L10 90C10 95.55 14.45 100 20 100H100C105.55 100 110 95.55 110 90V30C110 24.45 105.55 20 100 20ZM100 90H20V60H100V90ZM20 40H100V30H20V40Z"
      />
    </svg>
  );
}
