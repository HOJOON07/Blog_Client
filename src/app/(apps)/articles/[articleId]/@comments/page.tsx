import CommentsEditor from '@/features/comments-editor/ui/CommentsEditor';
import { getArticleCommentsApi } from '@/widgets/article-detail/api/get-article-comments-api';
import { ArticleDetailComments } from '@/widgets/article-detail/ui/article-detail-comments';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import React, { Suspense } from 'react';

export default async function CommentsPage({
  params,
}: {
  params: { articleId: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['articles/comments', params.articleId],
    queryFn: () => getArticleCommentsApi(params.articleId),
  });
  return (
    <>
      <Suspense>
        <div></div>
        <div>
          {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
          <ArticleDetailComments />
          {/* </HydrationBoundary> */}
          <div className="px-4">
            <CommentsEditor />
          </div>
        </div>
        <div></div>
      </Suspense>
    </>
  );
}
