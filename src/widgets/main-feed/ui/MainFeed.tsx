import { ArticleCard } from '@/features/get-articlecard';
import { FeedTab } from '@/features/get-feedTab';
import { Icon } from '@/shared';

export const MainFeed = () => {
  return (
    <div className="container mt-10">
      <FeedTab />
      <div className="container 2xl:grid 2xl:grid-cols-4 2xl:gap-x-2 2xl:gap-y-8 px-2 xl:grid xl:grid-cols-4">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

{
  /* <div className="flex items-center gap-2">
          <Icon name="trending" size={8} />
          <p className="text-2xl font-semibold">Trending</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="recent" size={8} />
          <p className="text-2xl font-semibold">Recent</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="trending" size={8} />
          <p className="text-2xl font-semibold">Trending</p>
        </div> */
}
