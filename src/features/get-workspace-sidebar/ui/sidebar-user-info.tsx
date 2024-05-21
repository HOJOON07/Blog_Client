import { Button, Icon } from '@/shared';

export const UserInfo = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button variant="ghost" className="px-2 gap-2 h-14">
        <div className="w-9 h-9 bg-white rounded-md"></div>
        <div className="text-sm font-medium tracking-wide text-slate-400 max-w-[120px] truncate">
          hojoon Workspace
        </div>
      </Button>
      <Button variant="ghost" size="icon">
        <Icon name="circleProfile" width={6} height={6} />
      </Button>
    </div>
  );
};
