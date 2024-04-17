import { useRef } from 'react';
import { MOCK_DATE } from '../../../public/mock/PostCardData';
import Nav from '../nav/Nav';

import PostCard from '../postcard/PostCard';

export default function ContentsWrap() {
  {
    /* 3xl:grid-cols-4 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-2 */
  }
  {
    /* sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px', */
  }

  return (
    <main className="relative h-full transition-all duration-200 ease-in-out lg:pl-[250px] rounded-xl">
      <Nav />
      <div className="container grid gap-8 py-5 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </main>
  );
}
