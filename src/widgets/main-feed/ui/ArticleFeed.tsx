import { FeedTab } from '@/features/get-feedTab';
import { Articles } from '@/widgets/main-feed';

export const ArticleFeed = () => {
  return (
    <div className="mt-10 px-6 bg-background">
      <FeedTab />
      <Articles />
    </div>
  );
};
