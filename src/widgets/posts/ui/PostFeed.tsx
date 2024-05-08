'use client';
import clsx from 'clsx';
import { useRef } from 'react';
import { MOCK_DATA } from '../../../../public/mock/PostCardData';
import { useResizeObserver } from '../index';
import { PostCard } from '@/features/get-postcard';

export const PostFeed = () => {
  const ref = useRef(null);
  const { className } = useResizeObserver({ ref });

  return (
    <div className={clsx(`grid py-5 px-6 ${className}`)} ref={ref}>
      {MOCK_DATA.map((post, idx) => (
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
};
