import {
  ArticleHeader,
  ArticleViewEditor,
  PreviewContainer,
  PreviewTopFixedHeader,
} from '@/widgets/article-detail';
import { getArticleDetailApi } from '@/widgets/article-detail/api/get-article-detail-api';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import React from 'react';

export default async function InterceptArticlesDetailPage({
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
    <div className="w-screen h-screen overflow-y-auto inset-0 z-50 items-center fixed backdrop-blur-sm">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PreviewContainer />
      </HydrationBoundary>
    </div>
  );
}
