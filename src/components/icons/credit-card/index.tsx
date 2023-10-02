import React from "react";

import type { TProps } from "..";

export default function CreditCardIcon({ style, className }: TProps) {
  return (
    <svg
      width="100"
      height="80"
      viewBox="0 0 100 80"
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90 0H10C4.45 0 0.05 4.45 0.05 10L0 70C0 75.55 4.45 80 10 80H90C95.55 80 100 75.55 100 70V10C100 4.45 95.55 0 90 0ZM90 70H10V40H90V70ZM10 20H90V10H10V20Z"
      />
    </svg>
  );
}
