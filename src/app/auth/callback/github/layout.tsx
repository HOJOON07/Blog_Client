'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getGithubUserInfo } from './utils/redirect';
import { Code } from 'lucide-react';
import { userInfo } from 'os';
import { AuthGithub, localStorageSetToken } from './utils/auth-github';

export default function RedirectComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const githubCode = searchParams.get('code');
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: getGithubUserInfo,
    onSuccess: async (userInfo) => {
      await AuthGithub(userInfo).then((jwt) => localStorageSetToken(jwt));
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
