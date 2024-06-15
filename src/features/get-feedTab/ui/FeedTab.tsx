import { Icon } from '@/shared';

export const FeedTab = () => {
  // 구현해야 할 사항 -> 선택된 탭에 맞는 CSS를 보여줘야 함.
  return (
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
  );
};
