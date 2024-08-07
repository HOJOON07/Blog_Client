'use client';

import { ProfileSection } from '@/widgets/profiles';
import { useGetUserProfilesQuery } from '../lib/useGetUserProfiles';
import { useSearchParams } from 'next/navigation';
import { useProfilesTabModeStore } from '@/app/_store/profiles-tab-store';

export default function ProfileSideSectionContainer() {
  const searchParams = useSearchParams();
  const devName = searchParams?.get('devName') as string;
  const { user, isLoading, isError } = useGetUserProfilesQuery(devName);

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

  return <ProfileSection user={user} />;
}
