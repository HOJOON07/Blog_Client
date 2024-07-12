'use client';
import { useEffect } from 'react';
import { useUserState } from '../_store/useUserState';

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const { user, setData, resetData, isError, isLoading, isSuccess } =
    useUserState();

  return <>{children}</>;
}
