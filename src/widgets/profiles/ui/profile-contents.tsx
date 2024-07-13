'use client';
import { useUserState } from '@/app/_store/useUserState';
import {
  ProfileArticles,
  ProfileSection,
  ProfileTabs,
  Overview,
} from '@/widgets/profiles';
import { useGetUserProfilesQuery } from '../lib/useGetUserProfiles';
import { useSearchParams } from 'next/navigation';
import { PlateController } from '@udecode/plate-common';
import { useProfilesTabModeStore } from '@/app/_store/profiles-tab-store';

export default function ProfilesContents() {
  const searchParams = useSearchParams();
  const devName = searchParams.get('devName') as string;
  const { user, isLoading, isError } = useGetUserProfilesQuery(devName);

  console.log('user', user);

  const { tabMode } = useProfilesTabModeStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user profiles</div>;
  }

  if (!user) {
    return <div>No user profiles found</div>;
  }

  return (
    <div className="py-12 px-6 grid grid-cols-[280px_1fr] gap-9">
      <ProfileSection user={user} />
      <div className="flex flex-col gap-9">
        <PlateController>
          <ProfileTabs profileUserId={user?.id} />
          {tabMode === 'Overview' && (
            <Overview username={user?.github} readme={user?.readme} />
          )}
        </PlateController>
        {tabMode === 'Articles' && <ProfileArticles />}
      </div>
    </div>
  );
}
