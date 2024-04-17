import Icon from '@/assets/icon/Icon';
import { Fragment } from 'react';

interface Props {
  onClick: () => void;
  expand: boolean;
}

export default function SidebarHeader({ onClick, expand }: Props) {
  return (
    <div className="h-20 flex relative items-center ease-in-out mx-2 whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-all dark:text-white dark:opacity-80  after:text-slate-800/50 align-middle">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg text-center text-black">
        <Icon name="menu" className="dark:text-white" onClick={onClick} />
      </div>
      {expand ? (
        <Fragment>
          <span className="ml-1 font-semibold transition-all duration-200 ease-in-out text-xl text-emerald-400">
            Ho.Blog
          </span>
          <span className="font-[Gluten-Semi] text-cyan-500 align-middle text-3xl pt-2 absolute right-[10px] -translate-y-2/4 top-2/4">
            H
          </span>
        </Fragment>
      ) : null}
    </div>
  );
}
