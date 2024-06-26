'use client';

import { NavMenuGroup, Search } from '@/features/get-main-nav';
import {
  ColorThemeMode,
  Notifications,
  NotificationCard,
} from '@/features/get-main-nav';
import { Avatar, AvatarFallback, AvatarImage, Skeleton } from '@/shared';
import { Logo } from '@/widgets/main-navigation/index';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export const Navigation = () => {
  const [showNotiCard, setShowNotiCard] = useState<boolean>(false);

  const handleNotiCard = () => {
    setShowNotiCard((open) => !open);
  };
  return (
    <nav className="w-full h-[60px] bg-black sticky top-0 z-20">
      <div className="w-full h-ful flex items-center px-6 justify-between relative">
        <div className="flex items-center gap-12">
          <Logo />
          <NavMenuGroup />
        </div>
        <div className="flex items-center gap-1">
          <Search />
          <Notifications onClick={handleNotiCard} />
          <ColorThemeMode />
          <div className="flex items-center gap-1">
            <Avatar className="w-6 h-6">
              <AvatarImage src="/avatar.jpeg" alt="avatar" />
              <AvatarFallback>
                <Skeleton className="h-12 w-12 rounded-full" />
              </AvatarFallback>
            </Avatar>
            <ChevronDownIcon className="ml-auto dark:text-white" />
          </div>
        </div>
        {showNotiCard && (
          <NotificationCard className="absolute right-0 top-[60px] z-30" />
        )}
      </div>
    </nav>
  );
};
