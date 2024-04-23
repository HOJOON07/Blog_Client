import { useSidebarStore } from '@/store/sidebarStore';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

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
      {/* <span
        className={clsx(
          `ml-1 font-semibold transition-all duration-200 ease-in-out text-xl text-emerald-400 ${
            !expand && 'hidden'
          }`,
        )}
      >
        Ho.Blog
      </span>
      <span
        className={clsx(
          `font-[Gluten-Semi] text-cyan-500 align-middle text-3xl pt-2  right-[10px] -translate-y-2/4 top-2/4 ${
            expand ? 'absolute' : 'hidden'
          }`,
        )}
      >
        H
      </span> */}
      <span
        className={`text-blue-600 font-bold text-xl right-0 ml-auto ${
          expand ? 'block' : 'hidden'
        }`}
      >
        Dev World
      </span>
    </div>
  );
}
