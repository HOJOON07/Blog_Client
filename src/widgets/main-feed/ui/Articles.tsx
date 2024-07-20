'use client';
import { ArticleCard } from '@/features/get-articlecard';
import { cn } from '@/shared';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MOCK_DATA } from '../../../../public/mock/ArticleCardData';
import axios from 'axios';
import { assert } from 'console';
import { useGetArticlesQuery } from '../tanstack-query/useGetArticelsQuery';

export const Articles = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { articles, isError, isLoading } = useGetArticlesQuery();

  return (
    <div
      className={cn(
        'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2',
        className,
      )}
    >
      {articles?.data.map(
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
          },
          idx,
        ) => (
          <div
            key={idx}
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
              thumbnails={thumbnails}
              id={id}
            />
          </div>
        ),
      )}
    </div>
  );
};
