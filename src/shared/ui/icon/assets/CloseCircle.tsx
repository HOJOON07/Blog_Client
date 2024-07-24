import clsx from 'clsx';
import React, { SVGProps } from 'react';

export default function CloseCircle({
  className,
  onClick,
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={clsx(className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      pointerEvents="bounding-box"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
