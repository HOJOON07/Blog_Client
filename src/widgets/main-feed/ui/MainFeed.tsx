import { PostCard } from '@/features/get-postcard';
import { MOCK_DATA } from '../../../../public/mock/PostCardData';
import { ArticleCard } from '@/features/get-articlecard';
import { Button, Icon } from '@/shared';
import { WorkspaceHeader } from '@/widgets/workspace';

export const MainFeed = () => {
  return (
    <div className="container mt-10">
      <div className="w-full px-2 mb-10 flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <Icon name="trending" size={8} color="text-primary" />
          <p className="text-2xl font-semibold text-primary">Trending</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="recent" size={8} color="text-gray-400" />
          <p className="text-2xl font-extralight text-gray-400">Recent</p>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="follow" size={8} color="text-gray-400" />
          <p className="text-2xl font-extralight text-gray-400">Following</p>
        </div>
      </div>

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
