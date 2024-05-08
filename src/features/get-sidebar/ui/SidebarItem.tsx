'use client';
import { Icon } from '@/shared/ui/icon/Icon';
import Link from 'next/link';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { useSidebarStore } from '@/app/_store/sidebarStore';

import { useState } from 'react';
import { IconType } from '@/shared';
import { HoverTooltip } from '../index';

interface SidebarItemProps {
  name: IconType;
  title: string;
}

export const SidebarItem = ({ name, title }: SidebarItemProps) => {
  const expand = useSidebarStore((state) => state.expand);
  const [showToolTip, setShowTooltip] = useState<boolean>(false);

  const handleTooltip = () => {
    setShowTooltip((show) => !show);
  };

  return (
    <li
      className="mt-0.5 w-full"
      onMouseEnter={handleTooltip}
      onMouseLeave={handleTooltip}
    >
      <Link
        href="/"
        className="ease-in-out text-sm leading-normal py-[0.675rem] my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-all relative"
      >
        <div
          className={clsx(
            `flex h-8 w-8 items-center rounded-lg text-center text-black mr-1`,
          )}
        >
          <Icon name={name} size={20} />
        </div>
        <span
          className={clsx(
            `duration-300 pointer-events-none ease text-slate-700 dark:text-white opacity-100 ${
              !expand && 'hidden'
            }`,
          )}
        >
          {title}
        </span>
        <ChevronDownIcon
          className={clsx(`ml-auto dark:text-white ${!expand && 'hidden'}`)}
        />
        {!expand ? <HoverTooltip title={title} show={showToolTip} /> : null}
      </Link>
    </li>
  );
};
