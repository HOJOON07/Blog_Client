import { TagFilter } from '@/widgets/workspace';
import { ArticleViewSort } from '@/widgets/profiles/index';
import { ArticleItems } from '@/widgets/profiles/index';
import { useGetUserArticlesQuery } from '../../tanstack-query/useGetUserArticlesQuery';
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { ArticleSearch } from './article-search';
import { useCallback, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/shared';

export const ProfileArticles = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { entry } = useIntersectionObserver(observerRef, {});
  const isPageEnd = !!entry?.isIntersecting;

  const [
    devName,
    where__title__i_like,
    order__createdAt,
    where__description__i_like,
  ] = useCustomSearchParams([
    'devName',
    'where__title__i_like',
    'order__createdAt',
    'where__description__i_like',
  ]);

  const { articles, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetUserArticlesQuery({
      devName,
      where__title__i_like,
      order__createdAt,
      where__description__i_like,
    });

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
    <>
      <div className="grid grid-cols-[1fr_130px_200px] items-center gap-2">
        <ArticleSearch />
        <ArticleViewSort />
        <TagFilter />
      </div>
      {articles?.pages.map(({ data }) =>
        data.map((article) => {
          return <ArticleItems article={article} key={article.id} />;
        }),
      )}
      <div className="w-full touch-none h-10 mb-10" ref={observerRef} />
    </>
  );
};
