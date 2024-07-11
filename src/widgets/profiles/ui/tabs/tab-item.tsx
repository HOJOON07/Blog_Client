import { useProfilesTabModeStore } from '@/app/_store/profiles-tab-store';
import { cn } from '@/shared';
import { ReactNode } from 'react';

type TabMode = 'Overview' | 'Articles' | 'Stars' | 'BookMarks';

interface TabItemProps {
  title: TabMode;
}
export const TabItem = ({ title }: TabItemProps) => {
  const { tabMode, changeTabMode } = useProfilesTabModeStore();
  const chageTabTitle = (title: TabMode): TabMode => {
    if (title === 'Overview') return 'Overview';
    if (title === 'Articles') return 'Articles';
    if (title === 'Stars') return 'Stars';
    if (title === 'BookMarks') return 'BookMarks';

    return 'Overview';
  };
  return (
    <div
      className={cn(
        `py-3 px-4 border-b cursor-pointer`,
        tabMode === chageTabTitle(title) && 'border-primary',
      )}
      onClick={() => changeTabMode(chageTabTitle(title))}
    >
      <p
        className={cn(
          `text-sm font-semibold`,
          tabMode === chageTabTitle(title) && 'text-primary',
        )}
      >
        {title}
      </p>
    </div>
  );
};
