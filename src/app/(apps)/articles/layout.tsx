import { Metadata } from 'next';
import { Navigation } from '@/widgets/main-navigation';

export const metadata: Metadata = {
  title: 'Main Feed',
  description: 'Dev World Articles Main Feed Page',
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Navigation /> */}
      {children}
    </>
  );
}
