import { Button, Icon, type IconList } from '@/shared';

export const SocialInfoIcon = ({ name }: { name: IconList }) => {
  return (
    <Button size="smallIcon" variant="secondary" className="rounded-sm">
      <Icon name={name} color="text-zinc-500" size={5} />
    </Button>
  );
};
