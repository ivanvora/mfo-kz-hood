

import React from "react";
import { TProps } from "..";

export default function BriefcaseIcon({ style, className }: TProps) {
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
         <path fillRule="evenodd" clipRule="evenodd" d="M21.25 8.125H25C26.3875 8.125 27.5 9.2375 27.5 10.625V24.375C27.5 25.7625 26.3875 26.875 25 26.875H5C3.6125 26.875 2.5 25.7625 2.5 24.375V10.625C2.5 9.2375 3.6125 8.125 5 8.125H8.75V5.625C8.75 4.2375 9.8625 3.125 11.25 3.125H18.75C20.1375 3.125 21.25 4.2375 21.25 5.625V8.125ZM18.75 5.625H11.25V8.125H18.75V5.625ZM25 24.375H5V21.875H25V24.375ZM5 18.125H25V10.625H21.25V13.125H18.75V10.625H11.25V13.125H8.75V10.625H5V18.125Z" fill="#8FADBF"/>
</svg>
    );
}
