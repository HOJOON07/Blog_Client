'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import { ThemeProvider } from '../components/theme/theme-provider';

interface Props {
  children: React.ReactNode;
}

export const NextProvider = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      }),
  );

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <SessionProvider> */}
        {children}
        <ReactQueryDevtools />
        {/* </SessionProvider> */}
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const NextLayout = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
