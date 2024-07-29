import {
  ArticleMainContents,
  ArticleUserInfo,
  FixedButtons,
} from '@/widgets/article-detail';
import { getArticleDetailApi } from '@/widgets/article-detail/api/get-article-detail-api';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

export default async function Page({
  params,
}: {
  params: { articleId: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['articles/details'],
    queryFn: () => getArticleDetailApi(params.articleId),
  });
  return (
    <>
      <FixedButtons />
      <div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ArticleMainContents />
        </HydrationBoundary>
      </div>
    </>
  );
}
