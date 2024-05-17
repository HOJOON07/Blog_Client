import { GenericIconComponentProps, iconMap } from '@/shared';
import clsx from 'clsx';
import Link from 'next/link';

export const Icon = ({
  name,
  href,
  width = 5,
  height = 5,
  color = 'text-slate-700 dark:text-white',
}: GenericIconComponentProps) => {
  const IconSVGComponent = iconMap[name];

  return href ? (
    <Link href={href}>
      <IconSVGComponent className={clsx(`w-${width} h-${height} ${color}`)} />
    </Link>
  ) : (
    <IconSVGComponent className={clsx(`w-${width} h-${height} ${color}`)} />
  );
};
