// 'use client';
import { Icon } from '@/shared';
import { ArticleMainContents, ArticleUserInfo } from '@/widgets/article-detail';
import { BookmarkIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
// { params }: { params: { slug: string } }

export const ArticleDetail = () => {
  // const [position, setPosition] = useState(0);
  // function onScroll() {
  //   setPosition(window.scrollY);
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   console.log(position);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, [position]);
  return (
    <div className="grid grid-cols-[250px_1fr_380px]">
      <div className="sticky h-4 left-[150px] top-[120px]">
        <section className="flex flex-col items-center gap-5 w-4 rounded-[24px] bg-neutral-800 px-7 py-3">
          <Icon name="star" size={6} />
          <BookmarkIcon className="w-6 h-6" />
          <Icon name="share" size={6} />
        </section>
      </div>
      <ArticleMainContents />
      <ArticleUserInfo />
    </div>
  );
};
