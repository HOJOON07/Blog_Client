'use client';
import { useParams } from 'next/navigation';
import { useGetArticleCommentsQuery } from '../tanstack-query/useGetArticleCommentsQuery';
import { ArticleCommentsItem } from './article-comments-item';
import { useIntersectionObserver } from '@/shared';
import { useCallback, useEffect, useRef } from 'react';

export const ArticleDetailComments = () => {
  const { articleId } = useParams() as { articleId: string };

  const observerRef = useRef<HTMLDivElement | null>(null);
  const componetRef = useRef<HTMLDivElement>(null);

  const { inView } = useIntersectionObserver(componetRef, { threshold: 0 });
  const { entry } = useIntersectionObserver(observerRef, { threshold: 0.1 });
  const isPageEnd = !!entry?.isIntersecting;

  const { articlesComments, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetArticleCommentsQuery(articleId, inView);

  const fetchNext = useCallback(async () => {
    const res = await fetchNextPage();
    if (res.isError) {
      throw res.isError;
    }
  }, [fetchNextPage]);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (isPageEnd && hasNextPage) {
      timerId = setTimeout(() => {
        fetchNext();
      }, 200);
    }
    return () => clearTimeout(timerId);
  }, [fetchNext, isPageEnd, hasNextPage]);

  return (
    <div className="px-4 mb-6 flex flex-col gap-7" ref={componetRef}>
      {articlesComments?.pages.map(({ data }) =>
        data.map((comment) => (
          <ArticleCommentsItem key={comment.id} comment={comment} />
        )),
      )}
      <div className="w-full touch-none h-2" ref={observerRef} />
    </div>
  );
};
