'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getGithubUserInfo } from './utils/redirect';
import { Code } from 'lucide-react';
import { userInfo } from 'os';
import { AuthGithub, localStorageSetToken } from './utils/auth-github';
import { setCookie } from '@/shared/api/set-cookie';
import { useUserState } from '@/app/_store/useUserState';

export default function RedirectComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const githubCode = searchParams.get('code');
  const router = useRouter();
  const { resetData } = useUserState();

  const { mutate } = useMutation({
    mutationFn: getGithubUserInfo,
    onSuccess: async (userInfo) => {
      await AuthGithub(userInfo).then((jwt) => {
        localStorageSetToken(jwt);
        setCookie(jwt.accessToken, jwt.refreshToken);
      });
      resetData();
      router.push('/articles');
    },
    onError: (error) => {
      console.error('Error fetching GitHub user info:', error);
    },
  });

  useEffect(() => {
    if (!githubCode) {
      console.log('GitHub code not found in URL parameters.');
    } else {
      mutate(githubCode);
    }
  }, [githubCode]);
  return <div>{children}</div>;
}
