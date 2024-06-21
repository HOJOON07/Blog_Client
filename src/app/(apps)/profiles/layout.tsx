import { Metadata } from 'next';
import { Navigation } from '@/widgets/main-navigation';
// import { ProfileTabs, ProfileSection } from '@/widgets/profiles';
import { ProfileSection } from '@/widgets/profiles/ui/profile-section';
import { ProfileTabs } from '@/widgets/profiles/ui/profile-tabs';
import { ProfileEditor } from '@/widgets/profiles/ui/profile-editor';
import GitHubCalendar from 'react-github-calendar';

export const metadata: Metadata = {
  title: 'Post',
  description: 'HoJoon Blog',
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main>
        <div className="max-w-[1200px] w-full mx-auto my-0">
          <div className="py-12 px-6 grid grid-cols-[280px_1fr] gap-9">
            <ProfileSection />
            <div className="flex flex-col gap-9">
              <ProfileTabs />
              <ProfileEditor />
              <div className="bg-zinc-950 px-4 py-10 border rounded-lg">
                <GitHubCalendar username="hojoon07" />
              </div>
            </div>
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
