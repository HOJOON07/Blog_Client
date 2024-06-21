import { Metadata } from 'next';
import { Navigation } from '@/widgets/main-navigation';
import { ProfileTabs, ProfilesSection } from '@/widgets/profiles';

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
            {/* side */}
            <ProfilesSection />
            {/* overview */}
            <div className="flex flex-col gap-9">
              <ProfileTabs />
            </div>
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
