import { ArticleUserInfo } from '@/widgets/article-detail';
import { Suspense } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getArticlesAuthorApi } from '@/widgets/article-detail/api/get-article-author-api';

export default async function AuthorPage({
  params,
}: {
  params: { articleId: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['articles/author', params.articleId],
    queryFn: () => getArticlesAuthorApi(params.articleId),
  });
  return (
    <Suspense>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArticleUserInfo articleId={params.articleId} />;
      </HydrationBoundary>
    </Suspense>
  );
}
