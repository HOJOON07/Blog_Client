'use client';
import CommentsEditor from '@/features/comments-editor/ui/CommentsEditor';
import CommentsViewerEditor from '@/features/comments-editor/ui/CommentsViewerEditor';
import { Separator } from '@/shared';
import { ArticleHeader, ArticleViewEditor } from '@/widgets/article-detail';
import { useGetArticlesDetailsQuery } from '../tanstack-query/useGetArticleDetailsQuery';
import { useParams } from 'next/navigation';
import { ArticleDetailComments } from './article-detail-comments';

export const ArticleMainContents = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { articlesDetail, isError, isLoading } =
    useGetArticlesDetailsQuery(articleId);

  console.log(articlesDetail);

  if (isError) {
    <div>에러가 생겼습니다.</div>;
  }

  if (isLoading) {
    <div>Loading...</div>;
  }

  return (
    <div>
      <ArticleHeader />
      <ArticleViewEditor />
      <div className="px-4 w-full">
        <Separator className="mb-4" />
      </div>
      <div className="px-4 my-5">
        <p className="font-medium text-lg">
          댓글 {articlesDetail?.commentCount}개
        </p>
      </div>
      <ArticleDetailComments />
      <div className="px-4">
        <CommentsEditor />
      </div>
    </div>
  );
};
