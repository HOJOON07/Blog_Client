import { Button } from '@/components/ui/button';
import { BellIcon } from '@radix-ui/react-icons';

interface NotiIconProps {
  onClick: () => void;
}

export default function Notifications({ onClick }: NotiIconProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick}>
      <BellIcon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
