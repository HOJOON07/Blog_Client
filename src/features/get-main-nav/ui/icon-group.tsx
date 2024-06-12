import { Button, Icon } from '@/shared';
import { HomeIcon } from '@radix-ui/react-icons';

export const IconGroup = () => {
  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost">
        <Icon name="home" size={5} className="mr-2" />
        Home
      </Button>
      <Button variant="ghost">
        <Icon name="document" size={5} className="mr-2" />
        Workspace
      </Button>
      <Button variant="ghost">
        <Icon name="pairProgramming" size={5} className="mr-2" />
        Pair
      </Button>
      <Button variant="ghost">
        <Icon name="chat" size={5} className="mr-2" />
        Dev Chat
      </Button>
      <Button variant="ghost">
        <Icon name="globe" size={5} className="mr-2" />
        Explore
      </Button>
    </div>
  );
};
