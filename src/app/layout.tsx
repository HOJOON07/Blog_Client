import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider, QueryProvider } from './_providers';
import { TailwindIndicator, Toaster } from '@/shared';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ProgressProviders } from './_providers/n-progress-provider';

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
            <ProgressProviders>{children}</ProgressProviders>
          </QueryProvider>
        </ThemeProvider>
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  );
}
