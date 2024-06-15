import { Icon } from '@/shared';

export const TabItem = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <Icon name="trending" size={8} color="text-primary" />
      <p className="text-2xl font-semibold text-primary">Trending</p>
    </div>
  );
};
