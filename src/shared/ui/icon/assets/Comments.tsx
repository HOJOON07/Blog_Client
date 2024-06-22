import { SVGProps } from 'react';

export default function Comments({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 14">
        <path
          id="Vector"
          d="M2.9801 16C2.74695 16 2.51477 15.9358 2.30798 15.8079C1.92798 15.5731 1.70129 15.1663 1.70129 14.7195V12.8445C0.363282 11.1493 -0.214965 9.03235 0.0717778 6.85998C0.531495 3.37463 3.39612 0.517942 6.88269 0.0678691C9.3385 -0.249392 11.7491 0.55554 13.4991 2.27502C15.2493 3.99451 16.0961 6.38891 15.8229 8.8446C15.427 12.401 12.5552 15.3268 8.99475 15.8018C7.57532 15.99 6.13977 15.7935 4.82276 15.2294L3.5531 15.8638C3.37122 15.9546 3.17517 16 2.9801 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
