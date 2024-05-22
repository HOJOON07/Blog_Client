import { GenericIconComponentProps, cn, iconMap } from '@/shared';
import Link from 'next/link';

export const Icon = ({
  name,
  href,
  width = 5,
  height = 5,
  color = 'text-slate-700 dark:text-white',
  className,
}: GenericIconComponentProps) => {
  const IconSVGComponent = iconMap[name];

  return href ? (
    <Link href={href}>
      <IconSVGComponent
        className={cn(`w-${width} h-${height} ${color} ${className}`)}
      />
    </Link>
  ) : (
    <IconSVGComponent
      className={cn(`w-${width} h-${height} ${color} ${className}`)}
    />
  );
};
