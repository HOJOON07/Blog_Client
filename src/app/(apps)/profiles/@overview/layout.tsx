import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevWorld ',
  description: 'HoJoon Blog',
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
