import { IconType, iconMap } from './IconMap';
import Link from 'next/link';

export type Props = {
  name: IconType;
  size?: number;
  href?: string;
};

const Icon = ({ name, href }: Props) => {
  const IconSVGComponent = iconMap[name];

  return href ? (
    <Link href={href}>
      <IconSVGComponent />
    </Link>
  ) : (
    <IconSVGComponent />
  );
};

export default Icon;
