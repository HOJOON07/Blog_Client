import { Metadata } from 'next';
import { Navigation } from '@/widgets/main-navigation';
// import { ProfileTabs, ProfileSection } from '@/widgets/profiles';
import {
  ProfileArticles,
  ProfileSection,
  ProfileTabs,
} from '@/widgets/profiles';

import { Overview } from '@/widgets/profiles/ui/overview/Overview';
export default function ProfilePage() {
  return (
    <main>
      <div className="max-w-[1200px] w-full mx-auto my-0">
        <div className="py-12 px-6 grid grid-cols-[280px_1fr] gap-9">
          <ProfileSection />
          <div className="flex flex-col gap-9">
            <ProfileTabs />
            {/* <Overview /> */}
            <ProfileArticles />
          </div>
        </div>
      </div>
    </main>
  );
}
