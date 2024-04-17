import Icon from '@/assets/icon/Icon';
import Link from 'next/link';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';
import clsx from 'clsx';

interface SidebarItemProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
  title: string;
  expand: boolean;
}

export default function SidebarItem({ name, title, expand }: SidebarItemProps) {
  return (
    <li className="mt-0.5 w-full">
      <Link
        href="/"
        className="ease-in-out text-sm leading-normal py-[0.675rem] my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-all"
      >
        <div
          className={clsx(
            `flex h-8 w-8 items-center justify-center rounded-lg text-center text-black ${
              !expand && 'mx-auto'
            }`,
          )}
        >
          <Icon name={name} size={18} className="dark:text-white" />
        </div>
        {expand ? (
          <Fragment>
            <span className="ml-1 duration-300 pointer-events-none ease text-slate-700 dark:text-white opacity-100">
              {title}
            </span>
            <ChevronDownIcon className="ml-auto dark:text-white" />
          </Fragment>
        ) : null}
      </Link>
    </li>
  );
}
