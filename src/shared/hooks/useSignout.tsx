'use client';

import { useUserState } from '@/app/_store/useUserState';
import { deleteCookieAction } from '../lib/delete-cookie-action';

export const useSignout = () => {
  const { resetData } = useUserState();

  const signOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    deleteCookieAction();
    resetData();
  };

  return { signOut };
};
