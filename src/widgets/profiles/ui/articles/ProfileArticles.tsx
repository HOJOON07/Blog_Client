import { TagFilter } from '@/widgets/workspace';
import { ArticleViewSort } from '@/widgets/profiles/index';
import { ArticleItems } from '@/widgets/profiles/index';

export const ProfileArticles = () => {
  return (
    <>
      <div className="grid grid-cols-[1fr_130px_200px] items-center gap-2">
        <div className="inline-flex items-center rounded-lg border border-solid text-sm h-10 px-3 relative w-full text-zinc-400 focus-within:border-primary">
          <input
            type="text"
            className="outline-none border-none bg-transparent w-full h-full"
            maxLength={150}
            placeholder="아티클을 검색할 수 있어요"
          />
        </div>
        <ArticleViewSort />
        <TagFilter />
      </div>
      <ArticleItems />
      <ArticleItems />
      <ArticleItems />
      <ArticleItems />
    </>
  );
};
