import { FeedTab } from '@/features/get-feedTab';
import { BASE_URL } from '@/shared/api/base-url';
import { Articles } from '@/widgets/main-feed';
import { getArticlesApi } from '@/widgets/main-feed/api/get-articles-api';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { Metadata } from 'next';

const INITIAL_URL = `${BASE_URL}/articles`;

export default async function ArticlesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['getArticles'],
    queryFn: ({ pageParam }) => getArticlesApi(pageParam),
    initialPageParam: INITIAL_URL,
    getNextPageParam: (lastPage: any) => lastPage.next || undefined,
  });
  return (
    <div className="mt-20 px-6 bg-background">
      <FeedTab />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Articles />
      </HydrationBoundary>
    </div>
  );
}
