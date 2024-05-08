import Icon from '@/shared/ui/icon/Icon';
import { Button } from '@/components/ui/button';
import { EnterIcon } from '@radix-ui/react-icons';

export default function SignIn() {
  return (
    <Button variant="ghost" size="icon">
      <EnterIcon className="h-[1.3rem] w-[1.3rem]" />
    </Button>
  );
}
