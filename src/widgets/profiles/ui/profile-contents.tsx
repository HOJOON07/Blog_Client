'use client';
import {
  ProfileArticles,
  ProfileSection,
  ProfileTabs,
  Overview,
  useUserState,
} from '@/widgets/profiles';

export default function ProfilesContents() {
  const { user } = useUserState();

  console.log(user);

  return (
    <div className="py-12 px-6 grid grid-cols-[280px_1fr] gap-9">
      <ProfileSection user={user} />
      <div className="flex flex-col gap-9">
        <ProfileTabs />
        <Overview />
        {/* <ProfileArticles /> */}
      </div>
    </div>
  );
}
