import { Button, Icon } from '@/shared';
import { NavMenuIconList, NavMenuList } from '@/features/get-main-nav/';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type NavMenuGroup = {
  name: NavMenuList;
  icon: NavMenuIconList;
  onClick?: () => void;
  path: string;
};

const NavMenu: NavMenuGroup[] = [
  { name: 'Home', icon: 'home', path: '/articles' },
  { name: 'Workspace', icon: 'document', path: '/workspace' },
  { name: 'Pair', icon: 'pairProgramming', path: '/articles' },
  { name: 'Dev Chat', icon: 'chat', path: '/articles' },
  { name: 'Explore', icon: 'globe', path: '/articles' },
];

export const NavMenuGroup = () => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-[2px]">
      {NavMenu.map((menu) => (
        <Link href={menu.path} key={menu.name}>
          <Button variant="ghost">
            <Icon name={menu.icon} size={5} className="mr-2" />
            {menu.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};
