import React from "react";
import { TProps } from "..";

export default function AccountsIcon({ style, className }: TProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM52.55 39.95C52.55 31.7 45.8 24.95 37.55 24.95C29.3 24.95 22.55 31.7 22.55 39.95C22.55 48.2 29.3 54.95 37.55 54.95C45.8 54.95 52.55 48.2 52.55 39.95ZM37.55 44.95C34.8 44.95 32.55 42.7 32.55 39.95C32.55 37.2 34.8 34.95 37.55 34.95C40.3 34.95 42.55 37.2 42.55 39.95C42.55 42.7 40.3 44.95 37.55 44.95ZM80.05 44.95C80.05 50.5 75.6 54.95 70.05 54.95C64.5 54.95 60.05 50.5 60.05 44.95C60 39.4 64.5 34.95 70.05 34.95C75.6 34.95 80.05 39.4 80.05 44.95ZM37.55 70C30.6 70 22.65 72.85 19.25 75.55C26.1 83.8 36.2 89.2 47.55 89.85V75.95C47.55 66.5 62.45 62.45 70.05 62.45C74.45 62.45 81.25 63.85 86.25 66.8C88.65 61.65 90 55.95 90 49.95C90 27.9 72.05 9.95 50 9.95C27.95 9.95 10 27.9 10 49.95C10 56.1 11.4 61.9 13.9 67.1C20.6 62.2 31.05 59.95 37.55 59.95C39.75 59.95 42.4 60.25 45.2 60.75C42.05 63.6 39.9 66.85 38.7 70.05C38.4933 70.05 38.2867 70.0367 38.0869 70.0237C37.9 70.0117 37.7192 70 37.55 70Z"
      />
    </svg>
  );
}
