import { useProfilesTabModeStore } from '@/app/_store/profiles-tab-store';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevWorld ',
  description: 'HoJoon Blog',
};

export default function ProfileLayout({
  children,
  overview,
  bookmark,
  articles,
  stars,
}: Readonly<{
  children: React.ReactNode;
  overview: React.ReactNode;
  bookmark: React.ReactNode;
  articles: React.ReactNode;
  stars: React.ReactNode;
}>) {
  return (
    <main className="pt-10">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="py-12 px-6 grid grid-cols-[280px_1fr] gap-9">
          {children}
          {overview}
          {bookmark}
          {articles}
          {stars}
        </div>
      </div>
    </main>
  );
}
