import React from "react";
import { TProps } from "..";

export default function HomeIcon({ style, className }: TProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
      className={className}
      style={style}
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.25 15.625H2.5L15 4.375L27.5 15.625H23.75V25.625H16.25V18.125H13.75V25.625H6.25V15.625ZM21.25 13.3625L15 7.7375L8.75 13.3625V23.125H11.25V15.625H18.75V23.125H21.25V13.3625Z"
        fill="#8FADBF"
      />
    </svg>
  );
}
