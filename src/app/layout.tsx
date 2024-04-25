import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { NextLayout, NextProvider } from './provider';

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
        <NextLayout>
          <NextProvider>{children}</NextProvider>
        </NextLayout>
      </body>
    </html>
  );
}
