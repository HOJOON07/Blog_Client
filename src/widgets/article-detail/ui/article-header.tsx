'use client';

import { Badge, Separator } from '@/shared';
import { getArticleDetailsResponseType } from '../model/article-detail-response.type';
import { format } from 'date-fns';
import { useGetArticlesDetailsQuery } from '../tanstack-query/useGetArticleDetailsQuery';
import { useParams } from 'next/navigation';

type ArticleHeaderProps = Pick<
  getArticleDetailsResponseType,
  'description' | 'title' | 'createdAt'
>;

export const ArticleHeader = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { articlesDetail, isLoading, isError } =
    useGetArticlesDetailsQuery(articleId);
  const articleCreatedAt = articlesDetail?.createdAt as string;

  return (
    <div
      className="flex flex-col gap-4 px-4 mt-20"
      // onClick={() => window.location.reload()}
    >
      <p className="text-4xl">{articlesDetail?.title}</p>
      <div className="flex">
        <p className="text-xl text-zinc-500">{articlesDetail?.description}</p>
        <div className="flex flex-col justify-end ml-auto">
          <p className="text-zinc-500 text-[12px] font-medium min-w-24">
            {/* {format(articlesDetail?.createdAt, 'yyyy년 MM월 dd일')} */}
            {articleCreatedAt
              ? format(articleCreatedAt, 'yyyy년 MM월 dd일')
              : null}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
      </div>
      <Separator />
    </div>
  );
};
