'use client';

import { MOCK_DATE } from '../../../public/mock/PostCardData';
import PostCard from '@/components/postcard/PostCard';
import { useEffect, useRef, useState } from 'react';

const className = {
  '2xl': '',
  //1536
  xl: '',
  // 1280
  lg: '',
  //1024
  md: '',
  //786
  sm: '',
  //640
};

export default function PostFeed() {
  const containerRef = useRef(null);
  const [className, setClassName] = useState();

  useEffect(() => {
    if (!containerRef.current) return;
    if (typeof window === 'undefined' || !('ResizeObserver' in window)) return;

    const observer = new ResizeObserver(([entry]) => {
      console.log(entry.borderBoxSize[0].inlineSize);
    });
    // const observer = new ResizeObserver(([entry]) => {
    //   console.log(entry.contentBoxSize);
    // });
    // observer.observe(ref.current);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="grid gap-8 py-5 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      ref={containerRef}
    >
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
