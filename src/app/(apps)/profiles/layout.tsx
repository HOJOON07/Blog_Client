import { Metadata } from 'next';
import { Navigation } from '@/widgets/main-navigation';
// import { ProfileTabs, ProfileSection } from '@/widgets/profiles';
import {
  ProfileArticles,
  ProfileSection,
  ProfileTabs,
} from '@/widgets/profiles';

import { Overview } from '@/widgets/profiles/ui/overview/Overview';

export const metadata: Metadata = {
  title: 'Post',
  description: 'HoJoon Blog',
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  test: React.ReactNode;
}>) {
  return <>{children}</>;
}
