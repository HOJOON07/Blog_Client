import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider, QueryProvider } from './_providers';
import { TailwindIndicator, Toaster } from '@/shared';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ProgressProviders } from './_providers/n-progress-provider';
import AuthProvider from './_providers/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev World',
  description: '기술 블로그를 작성하고 공유하는 개발자들의 SNS 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <QueryProvider>
            <ProgressProviders>
              {/* <AuthProvider> */}
              {children}
              {/* </AuthProvider> */}
            </ProgressProviders>
          </QueryProvider>
        </ThemeProvider>
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  );
}
