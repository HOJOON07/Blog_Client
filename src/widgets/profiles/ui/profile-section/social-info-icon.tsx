import { Button, Icon, type IconList } from '@/shared';

export const SocialInfoIcon = ({
  name,
  href,
}: {
  name: IconList;
  href: string;
}) => {
  return (
    <Button size="smallIcon" variant="secondary" className="rounded-sm">
      <Icon name={name} href={href} color="text-zinc-500" size={5} />
    </Button>
  );
};
