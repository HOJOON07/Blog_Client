import { Button } from '@/shared';
import { EnterIcon } from '@radix-ui/react-icons';

export const SignIn = () => {
  return (
    <Button variant="ghost" size="icon">
      <EnterIcon className="h-[1.3rem] w-[1.3rem]" />
    </Button>
  );
};