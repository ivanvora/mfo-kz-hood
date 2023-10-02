import React from "react";
import { TProps } from "..";

export default function AttentionDialogIcon({ style, className }: TProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 160 160"
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.6668 13.3333H133.334C140.667 13.3333 146.667 19.3333 146.667 26.6667V106.667C146.667 114 140.667 120 133.334 120H40.0002L13.3335 146.667V26.6667C13.3335 19.3333 19.3335 13.3333 26.6668 13.3333ZM34.4668 106.667H133.333V26.6667H26.6668V114.467L34.4668 106.667ZM73.3335 33.3333H86.6668V73.3333H73.3335V33.3333ZM86.6668 86.6667H73.3335V100H86.6668V86.6667Z"
      />
    </svg>
  );
}
