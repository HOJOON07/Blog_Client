import { GenericIconComponentProps, cn, iconMap } from '@/shared';
import Link from 'next/link';

export const Icon = ({
  name,
  href,
  size = 5,
  color = 'text-slate-700 dark:text-white',
  className,
  onClick,
}: GenericIconComponentProps) => {
  const IconSVGComponent = iconMap[name];

  return (
    <IconSVGComponent
      className={cn(`w-${size} h-${size} ${color} ${className}`)}
      onClick={onClick}
    />
  );
};
