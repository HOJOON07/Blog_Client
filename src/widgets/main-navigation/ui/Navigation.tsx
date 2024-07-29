'use client';

import { useUserState } from '@/app/_store/useUserState';
import { NavMenuGroup, Search } from '@/features/get-main-nav';
import {
  ColorThemeMode,
  Notifications,
  NotificationCard,
} from '@/features/get-main-nav';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icon,
  Skeleton,
  useSignout,
} from '@/shared';
import { deleteCookie } from '@/shared/api/delete-cookie';

import { Logo } from '@/widgets/main-navigation/index';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Navigation = () => {
  const { user, resetData } = useUserState();
  const { signOut } = useSignout();

  const router = useRouter();

  const [showNotiCard, setShowNotiCard] = useState<boolean>(false);

  const handleNotiCard = () => {
    setShowNotiCard((open) => !open);
  };
  return (
    <nav className="w-full h-[60px] bg-black fixed top-0 z-20">
      <div className="w-full h-ful flex items-center px-6 justify-between relative">
        <div className="flex items-center gap-12">
          <Logo />
          {user ? (
            <NavMenuGroup />
          ) : (
            <Button
              variant="ghost"
              onClick={() => {
                router.push('/articles');
              }}
            >
              <Icon name="home" size={5} className="mr-2" />
              Articles
            </Button>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Search />
          {/* <ColorThemeMode /> */}
          {user ? (
            <>
              <Notifications onClick={handleNotiCard} />
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                  <div className="flex items-center gap-1">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/avatar.jpeg" alt="avatar" />
                      <AvatarFallback>
                        <Skeleton className="h-12 w-12 rounded-full" />
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDownIcon className="ml-auto dark:text-white" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuLabel>{user?.devName}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href={`/profiles?devName=${user?.devName}`}>
                    <DropdownMenuItem className="cursor-pointer">
                      My Profile
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={signOut}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button
              variant="outline"
              onClick={() => {
                // signout 할때 resetData넣어줘야 함.
                resetData();
                router.push('/signin');
              }}
            >
              Sign in
            </Button>
          )}
        </div>
        {user && showNotiCard && (
          <NotificationCard className="absolute right-0 top-[60px] z-30" />
        )}
      </div>
    </nav>
  );
};
