'use client';
import { ArticleCard } from '@/features/get-articlecard';
import { cn } from '@/shared';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { MOCK_DATA } from '../../../../public/mock/ArticleCardData';

export interface ArticleCardProps {
  user: {
    avatarImage: string;
    name: string;
    addres: string;
    job: string;
  };
  title: string;
  subTitle: string;
  likeCount: number;
  commentCount: number;
  date: string;
}

export const Articles = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2',
        className,
      )}
    >
      {MOCK_DATA.map(
        ({ user, title, subTitle, likeCount, commentCount, date }, idx) => (
          <Link
            href={''}
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
              user={user}
              title={title}
              likeCount={likeCount}
              subTitle={subTitle}
              commentCount={commentCount}
              date={date}
            />
          </Link>
        ),
      )}
    </div>
  );
};
