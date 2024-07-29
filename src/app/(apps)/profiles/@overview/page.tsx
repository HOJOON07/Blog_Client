import { getUserOverviewApi } from '@/widgets/profiles/api/get-user-overview-api';
import { ProfileMainContentsContainer } from '@/widgets/profiles/ui/profile-main-contents-container';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import React from 'react';

export default async function OverviewPage({
  searchParams,
}: {
  searchParams: { devName: string };
}) {
  const queryClient = new QueryClient();

  const { devName } = searchParams;
  await queryClient.prefetchQuery({
    queryKey: ['users/readme', devName],
    queryFn: () => getUserOverviewApi(devName),
  });

  return (
    <div className="flex flex-col gap-9 flex-1">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfileMainContentsContainer />
      </HydrationBoundary>
    </div>
  );
}
