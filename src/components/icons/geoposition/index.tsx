

import React from "react";
import { TProps } from "..";

export default function GeoPositionIcon({ style, className }: TProps) {
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15 2.5C10.1625 2.5 6.25 6.4125 6.25 11.25C6.25 17.8125 15 27.5 15 27.5C15 27.5 23.75 17.8125 23.75 11.25C23.75 6.4125 19.8375 2.5 15 2.5ZM8.75 11.25C8.75 7.8 11.55 5 15 5C18.45 5 21.25 7.8 21.25 11.25C21.25 14.85 17.65 20.2375 15 23.6C12.4 20.2625 8.75 14.8125 8.75 11.25ZM11.875 11.25C11.875 9.52411 13.2741 8.125 15 8.125C16.1165 8.125 17.1481 8.72062 17.7063 9.6875C18.2646 10.6544 18.2646 11.8456 17.7063 12.8125C17.1481 13.7794 16.1165 14.375 15 14.375C13.2741 14.375 11.875 12.9759 11.875 11.25Z" fill="#8FADBF"/>
</svg>
    );
}
