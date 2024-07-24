import { Icon } from '@/shared';
import { BookmarkIcon } from '@radix-ui/react-icons';
export const FixedButtons = () => {
  return (
    <div className="sticky h-4 left-[150px] top-[120px]">
      <section className="flex flex-col items-center gap-5 w-4 rounded-[24px] bg-neutral-800 px-7 py-3">
        <Icon name="star" size={6} />
        <BookmarkIcon className="w-6 h-6" />
        <Icon name="share" size={6} />
      </section>
    </div>
  );
};
