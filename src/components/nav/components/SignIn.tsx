import Icon from '@/assets/icon/Icon';
import { Button } from '@/components/ui/button';

export default function SignIn() {
  return (
    <Button variant="ghost" size="icon">
      <Icon name="user" className="h-[1.3rem] w-[1.3rem]" />
    </Button>
  );
}
