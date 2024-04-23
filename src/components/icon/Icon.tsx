import { IconType, iconMap } from './IconMap';

export type Props = {
  name: IconType;
  size?: number;
};

const Icon = ({ name }: Props) => {
  const IconSVGComponent = iconMap[name];

  return <IconSVGComponent />;
};

export default Icon;
