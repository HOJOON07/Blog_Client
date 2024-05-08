import { IconType, iconMap } from '@/shared';
import Link from 'next/link';

export type Props = {
  name: IconType;
  size?: number;
  href?: string;
};

export const Icon = ({ name, href }: Props) => {
  const IconSVGComponent = iconMap[name];

  return href ? (
    <Link href={href}>
      <IconSVGComponent />
    </Link>
  ) : (
    <IconSVGComponent />
  );
};
