import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { NextLayout, NextProvider } from './provider';
import Container from '@/components/layout/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KHSU.com',
  description: 'HoJoon Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextProvider>
          <NextLayout>
            <Container>{children}</Container>
          </NextLayout>
        </NextProvider>
      </body>
    </html>
  );
}
