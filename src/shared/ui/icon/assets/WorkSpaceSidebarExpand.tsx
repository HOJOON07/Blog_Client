import clsx from 'clsx';
import React, { SVGProps } from 'react';

export default function WorkSpaceSidebarExpand({
  className,
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={clsx(className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v10A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17V7ZM5 5.75h5.25v12.5H5c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25Zm6.75 0v12.5H19c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25h-7.25ZM6 7.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H6Zm-.75 3.25A.75.75 0 0 1 6 9.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 12.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5H6Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
