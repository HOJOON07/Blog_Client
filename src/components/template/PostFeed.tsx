'use client';

import { MOCK_DATE } from '../../../public/mock/PostCardData';
import PostCard from '@/components/postcard/PostCard';
import { useResizeObserver } from '@/hooks/useResizeObserver';
import clsx from 'clsx';
import { useRef } from 'react';

export default function PostFeed() {
  const ref = useRef(null);
  const { className } = useResizeObserver({ ref });

  return (
    <div className={clsx(`grid gap-8 py-5 px-6 ${className}`)} ref={ref}>
      {MOCK_DATE.map((post, idx) => (
        <PostCard
          key={idx}
          title={post.title}
          subTitle={post.subTitle}
          userName={post.userName}
          date={post.date}
        />
      ))}
    </div>
  );
}
