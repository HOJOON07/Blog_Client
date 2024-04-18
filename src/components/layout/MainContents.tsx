import { MOCK_DATE } from '../../../public/mock/PostCardData';
import Nav from '@/components/nav/Nav';

import PostCard from '../postcard/PostCard';

export default function MainContents() {
  return (
    <main className="relative h-full transition-all duration-200 ease-in-out lg:ml-[250px] rounded-xl">
      <Nav />
      <div className="grid gap-8 py-5 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
