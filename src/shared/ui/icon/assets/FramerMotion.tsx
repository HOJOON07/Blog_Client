import { SVGProps } from 'react';

export default function FramerMotion() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="md:h-10 md:w-10 h-4 w-4 text-neutral-500 flex-shrink-0 stroke-1"
    >
      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
      <path d="M20 12l-8 8l-4 -4"></path>
    </svg>
  );
}
