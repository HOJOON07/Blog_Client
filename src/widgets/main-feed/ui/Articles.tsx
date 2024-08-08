'use client';
import { ArticleCard } from '@/features/get-articlecard';
import { cn, useIntersectionObserver } from '@/shared';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useGetArticlesQuery } from '../tanstack-query/useGetArticelsQuery';

export const Articles = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { entry } = useIntersectionObserver(observerRef, {});
  const isPageEnd = !!entry?.isIntersecting;

  const { articles, isError, isLoading, fetchNextPage, hasNextPage } =
    useGetArticlesQuery();

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
    <div
      className={cn(
        'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2',
        className,
      )}
    >
      {articles?.pages.map(({ data }) => {
        return data.map(
          (
            {
              author,
              title,
              description,
              likeCount,
              commentCount,
              createdAt,
              thumbnails,
              id,
              articleImage,
            },
            idx,
          ) => (
            <div
              key={id}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-zinc-800/[0.8] block rounded-2xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <ArticleCard
                author={author}
                title={title}
                likeCount={likeCount}
                description={description}
                commentCount={commentCount}
                createdAt={createdAt}
                articleImage={articleImage}
                id={id}
              />
            </div>
          ),
        );
      })}
      <div className="w-full touch-none h-10 mb-10" ref={observerRef} />
    </div>
  );
};
