

import React from "react";
import type { TProps } from "..";

export default function BackIcon({ style, className }: TProps) {
  return (
    <svg 
    style={style}
    className={className}
    xmlns="http://www.w3.org/2000/svg"       
    width="100%"
    height="100%" 
    viewBox="0 0 20 33" 
    fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.93006e-07 16.185L15.395 0.78994C16.4485 -0.263508 18.1565 -0.263508 19.2099 0.78994C20.2634 1.84339 20.2634 3.55137 19.2099 4.60481L7.62974 16.185L19.2099 27.7652C20.2634 28.8186 20.2634 30.5266 19.2099 31.58C18.1565 32.6335 16.4485 32.6335 15.395 31.58L1.93006e-07 16.185Z" fill="#8FADBF"/>
    </svg>
  );
}
