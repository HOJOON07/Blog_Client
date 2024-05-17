import React, { SVGProps } from 'react';

export default function Document({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M7 3.25A2.75 2.75 0 0 0 4.25 6v12A2.75 2.75 0 0 0 7 20.75h10A2.75 2.75 0 0 0 19.75 18V6A2.75 2.75 0 0 0 17 3.25H7ZM5.75 6c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V6ZM9 7.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5H9Zm-.75 4.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 14.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H9Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
