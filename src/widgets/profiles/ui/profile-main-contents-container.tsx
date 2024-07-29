'use client';
import { PlateController } from '@udecode/plate-common';
import { ProfileTabs } from './tabs/profile-tabs';

import { useProfilesTabModeStore } from '@/app/_store/profiles-tab-store';
import { ProfileArticles } from './articles/ProfileArticles';
import { ProfileOverview } from './overview/ProfileOverview';

export const ProfileMainContentsContainer = () => {
  const { tabMode } = useProfilesTabModeStore();
  return (
    <>
      <PlateController>
        <ProfileTabs />
        {tabMode === 'Overview' && <ProfileOverview />}
      </PlateController>
      {tabMode === 'Articles' && <ProfileArticles />}
    </>
  );
};
