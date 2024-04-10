'use client';

import ColorThemeMode from './components/ColorThemeMode';
import { NavBreadcrumb } from './components/NavBreadcrumb';
import Notifications from './components/Notifications';
import Search from './components/Search';
import SignIn from './components/SignIn';
import ViewState from './components/ViewState';
import { NotiCard } from './components/NotiCard';
import { useState } from 'react';

export default function Nav() {
  const [showNotiCard, setShowNotiCard] = useState<boolean>(false);

  const handleNotiCard = () => {
    setShowNotiCard((open) => !open);
  };
  return (
    <nav className="relative flex items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 h-20">
      <div>
        <NavBreadcrumb />
        <ViewState />
      </div>
      <div className="flex items-center mr-4 gap-2">
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
}
