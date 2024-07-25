import { Metadata } from 'next';
import { Navigation } from '@/widgets/main-navigation';

export const metadata: Metadata = {
  title: 'Post',
  description: 'HoJoon Blog',
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
