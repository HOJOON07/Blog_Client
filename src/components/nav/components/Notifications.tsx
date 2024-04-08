import Icon from '@/assets/icon/Icon';
import { Button } from '@/components/ui/button';

export default function Notifications() {
  return (
    <Button variant="ghost" size="icon">
      <Icon name="bell" className='className="h-[1.3rem] w-[1.3rem]' />
    </Button>
  );
}
