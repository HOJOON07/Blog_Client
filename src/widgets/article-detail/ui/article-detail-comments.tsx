'use client';
import { useParams } from 'next/navigation';
import { useGetArticleCommentsQuery } from '../tanstack-query/useGetArticleCommentsQuery';
import { ArticleCommentsItem } from './article-comments-item';
import { useIntersectionObserver } from '@/shared';
import { Suspense, useRef } from 'react';

export const ArticleDetailComments = () => {
  const { articleId } = useParams() as { articleId: string };
  const componetRef = useRef<HTMLDivElement>(null);
  const { inView } = useIntersectionObserver(componetRef, { threshold: 0.1 });

  const { articlesComments, isError, isLoading, refetch } =
    useGetArticleCommentsQuery(articleId, inView);

  return (
    <div className="px-4 mb-6 flex flex-col gap-7" ref={componetRef}>
      {articlesComments?.data.map((comment) => (
        <ArticleCommentsItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
