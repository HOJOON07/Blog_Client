'use client';

import { useState } from 'react';
import { Button } from '@/shared';
import {
  ColorThemeMode,
  CurrentView,
  NavBreadcrumb,
  NotiCard,
  Notifications,
  Search,
  SignIn,
} from '@/features/get-nav';
import { NewPost } from '@/features/get-nav';

export const Nav = () => {
  const [showNotiCard, setShowNotiCard] = useState<boolean>(false);

  const handleNotiCard = () => {
    setShowNotiCard((open) => !open);
  };
  return (
    <nav className="relative flex items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 h-20">
      <div>
        <NavBreadcrumb />
        <CurrentView />
      </div>
      <div className="flex items-center mr-4 gap-2">
        <NewPost />
        <Search />
        <SignIn />
        <ColorThemeMode />
        <Notifications onClick={handleNotiCard} />
      </div>
      {showNotiCard && (
        <NotiCard className="absolute right-0 top-[80px] z-30" />
      )}
    </nav>
  );
};
