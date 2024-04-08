import Nav from '../nav/Nav';
import PostCard from '../postCard/PostCard';

export default function ContentsWrap() {
  return (
    <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-[250px] rounded-xl">
      <Nav />
      <div className="grid grid-cols-4 gap-4 mx-6">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </main>
  );
}
