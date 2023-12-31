

import React from "react";
import { TProps } from "..";

export default function AccountIcon({ style, className }: TProps) {
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
        <path fillRule="evenodd" clipRule="evenodd" d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM8.8375 22.85C9.375 21.725 12.65 20.625 15 20.625C17.35 20.625 20.6375 21.725 21.1625 22.85C19.4625 24.2 17.325 25 15 25C12.675 25 10.5375 24.2 8.8375 22.85ZM15 18.125C16.825 18.125 21.1625 18.8625 22.95 21.0375C24.225 19.3625 25 17.275 25 15C25 9.4875 20.5125 5 15 5C9.4875 5 5 9.4875 5 15C5 17.275 5.775 19.3625 7.05 21.0375C8.8375 18.8625 13.175 18.125 15 18.125ZM15 7.5C12.575 7.5 10.625 9.45 10.625 11.875C10.625 14.3 12.575 16.25 15 16.25C17.425 16.25 19.375 14.3 19.375 11.875C19.375 9.45 17.425 7.5 15 7.5ZM13.125 11.875C13.125 12.9125 13.9625 13.75 15 13.75C16.0375 13.75 16.875 12.9125 16.875 11.875C16.875 10.8375 16.0375 10 15 10C13.9625 10 13.125 10.8375 13.125 11.875Z" fill="#8FADBF"/>
    </svg>
    );
}
