import { Button, Icon } from '@/shared';
import { NavMenuIconList, NavMenuList } from '@/features/get-main-nav/';

type NavMenuGroup = {
  name: NavMenuList;
  icon: NavMenuIconList;
  onClick?: () => void;
};

const NavMenu: NavMenuGroup[] = [
  { name: 'Home', icon: 'home' },
  { name: 'Workspace', icon: 'document' },
  { name: 'Pair', icon: 'pairProgramming' },
  { name: 'Dev Chat', icon: 'chat' },
  { name: 'Explore', icon: 'globe' },
];

export const NavMenuGroup = () => {
  return (
    <div className="flex items-center gap-[2px]">
      {NavMenu.map((menu) => (
        <Button variant="ghost">
          <Icon name={menu.icon} size={5} className="mr-2" />
          {menu.name}
        </Button>
      ))}
    </div>
  );
};
