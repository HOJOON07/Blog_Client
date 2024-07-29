import { getUserInfoApi } from '@/widgets/profiles/lib/get-userInfo-api';
import ProfileSideSectionContainer from '@/widgets/profiles/ui/profile-side-section-comtainer';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: { devName: string };
}) {
  const { devName } = searchParams;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['users/info', devName],
    queryFn: () => getUserInfoApi(devName),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfileSideSectionContainer />
    </HydrationBoundary>
  );
}
