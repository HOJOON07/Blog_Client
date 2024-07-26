import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function OverviewPage({
  searchParams,
}: {
  searchParams: string;
}) {
  return <div>OverviewPage</div>;
}

{
  /* <div className="flex flex-col gap-9">
        <PlateController>
          <ProfileTabs profileUserId={user?.id} />
          {tabMode === 'Overview' && (
            <Overview username={user?.github} readme={user?.readme} />
          )}
        </PlateController>
        {tabMode === 'Articles' && <ProfileArticles />}
      </div> */
}
