import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider, QueryProvider } from './_providers';
import { TailwindIndicator, Toaster } from '@/shared';
import { useSignupProgressStore } from './_store/singup-form-progres-store';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/shared/api/get-user-info-api';
import AuthProvider from './_providers/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev World.com',
  description: "HoJoon's Dev World",
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
            {/* <AuthProvider> */}
            {children}
            {/* </AuthProvider> */}
          </QueryProvider>
        </ThemeProvider>
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  );
}
