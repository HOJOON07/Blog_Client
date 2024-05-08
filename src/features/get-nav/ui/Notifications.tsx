import { Button } from '@/shared';
import { BellIcon } from '@radix-ui/react-icons';

interface NotificationsProps {
  onClick: () => void;
}

export const Notifications = ({ onClick }: NotificationsProps) => {
  return (
    <Button variant="ghost" size="icon" onClick={onClick}>
      <BellIcon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
};
