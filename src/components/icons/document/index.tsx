import React from "react";

import type { TProps } from "..";

export default function DocumentIcon({ style, className }: TProps) {
  return (
    <svg
      style={style}
      width="80"
      height="100"
      viewBox="0 0 80 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50 0H10C4.5 0 0 4.5 0 10V90C0 95.5 4.45 100 9.95 100H70C75.5 100 80 95.5 80 90V30L50 0ZM60 50H20V60H60V50ZM60 70H20V80H60V70ZM10 90H70V35H45V10H10V90Z"
      />
    </svg>
  );
}
