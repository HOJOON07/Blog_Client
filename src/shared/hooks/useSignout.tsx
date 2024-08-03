'use client';

import { useUserState } from '@/app/_store/useUserState';
import { deleteCookieAction } from '../lib/delete-cookie-action';
import { useRouter } from 'next/navigation';
import redirectURL from '@/app/(apps)/@modal/_action/redirect';

export const useSignout = () => {
  const { resetData } = useUserState();
  const router = useRouter();

  const signOut = async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    await deleteCookieAction();
    resetData();
    router.refresh();
  };

  return { signOut };
};
