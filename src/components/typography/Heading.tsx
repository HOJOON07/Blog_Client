import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HtmlHTMLAttributes, ReactNode } from 'react';

export const HeadingVariants = cva(`scroll-m-20`, {
  variants: {
    as: {
      default: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
    },
  },
  defaultVariants: {
    as: 'default',
  },
});

interface HeadingTypeProps
  extends HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof HeadingVariants> {
  children?: ReactNode;
  addClass?: string;
}

export default function Heading({
  children,
  as,
  addClass,
  ...props
}: HeadingTypeProps) {
  if (as === 'h2') {
    return (
      <h2 className={cn(HeadingVariants({ as }), addClass)} {...props}>
        {children}
      </h2>
    );
  }
  if (as === 'h3') {
    return (
      <h3 className={cn(HeadingVariants({ as }), addClass)} {...props}>
        {children}
      </h3>
    );
  }
  if (as === 'h4') {
    return (
      <h4 className={cn(HeadingVariants({ as }), addClass)} {...props}>
        {children}
      </h4>
    );
  }
  return (
    <h1 className={cn(HeadingVariants({ as }), addClass)} {...props}>
      {children}
    </h1>
  );
}
