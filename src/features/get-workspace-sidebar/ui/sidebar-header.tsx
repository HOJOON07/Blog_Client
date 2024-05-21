import { Button, Icon } from '@/shared';

export const Header = () => {
  return (
    <div className="flex items-center flex-[0_0_auto] justify-between px-3 h-[52px]">
      <Button variant="ghost" size="icon">
        <Icon name="workspaceSidebar" width={6} height={6} />
      </Button>
    </div>
  );
};
