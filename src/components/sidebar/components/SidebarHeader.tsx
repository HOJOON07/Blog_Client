import { useSidebarStore } from '@/store/sidebarStore';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  onClick: () => void;
}

export default function SidebarHeader({ onClick }: Props) {
  const expand = useSidebarStore((state) => state.expand);

  return (
    <div
      className={clsx(
        `h-20 flex relative items-center ease-in-out mx-2 whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-all dark:text-white dark:opacity-80  after:text-slate-800/50 align-middle`,
      )}
    >
      <div className="flex h-8 w-8 items-center rounded-lg text-center text-black">
        <HamburgerMenuIcon
          className="dark:text-white cursor-pointer h-[1.3rem] w-[1.3rem]"
          onClick={onClick}
        />
      </div>
      <Link
        href={'/'}
        className={`text-blue-600 font-bold text-xl right-0 ml-auto cursor-pointer ${
          expand ? 'block' : 'hidden'
        }`}
      >
        <span>Dev World</span>
      </Link>
    </div>
  );
}
