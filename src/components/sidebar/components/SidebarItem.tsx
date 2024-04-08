import Icon from '@/assets/icon/Icon';
import Link from 'next/link';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import clsx from 'clsx';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface SidebarItemProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
  color?: string;
  title: string;
}

export default function SidebarItem({ name, color, title }: SidebarItemProps) {
  return (
    <li className="mt-0.5 w-full">
      <Link
        href="/"
        className="ease-in-out text-sm leading-normal py-[0.675rem] my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-all"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg text-center text-black">
          <Icon name={name} className={clsx(`${color}`)} size={18} />
        </div>
        <span className="ml-1 duration-300 pointer-events-none ease text-slate-700 dark:text-white opacity-100">
          {title}
        </span>
        <ChevronDownIcon className="ml-auto dark:text-white" />
      </Link>
    </li>
  );
}
