import Container from '@/_pages/apps-layout/ui/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post',
  description: 'HoJoon Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
