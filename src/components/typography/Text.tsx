import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes, ReactNode } from 'react';

type Combine = HtmlHTMLAttributes<HTMLParagraphElement> &
  HtmlHTMLAttributes<HTMLSpanElement>;

interface TextProps extends Combine {
  children?: ReactNode;
  addClass?: string;
  as?: string;
}

export default function Text({
  children,
  as = 'p',
  addClass,
  ...props
}: TextProps) {
  if (as === 'span') {
    return (
      <span className={cn('leading-6', addClass)} {...props}>
        {children}
      </span>
    );
  }
  return (
    <p className={cn('leading-6', addClass)} {...props}>
      {children}
    </p>
  );
}
