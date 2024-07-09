'use client';
import { useViewModeStore } from '@/app/_store/view-mode-store';
import { cn } from '@udecode/cn';

type ViewModeType = 'Document' | 'Series' | 'Calendar' | 'Graph';

type ViewModeText = '문서' | '달력' | '그래프' | '시리즈';

interface HeaderItemProps {
  title: ViewModeText;
}

export const HeaderItem = ({ title }: HeaderItemProps) => {
  const { viewMode, changeViewMode } = useViewModeStore((state) => state);

  const changeTitle = (title: ViewModeText): ViewModeType => {
    if (title === '문서') return 'Document';
    if (title === '달력') return 'Series';
    if (title === '그래프') return 'Calendar';
    if (title === '시리즈') return 'Graph';

    return 'Document';
  };
  return (
    <div
      className={cn(
        'py-[6px] px-7 rounded-[8px] text-sm flex-1 justify-center',
        viewMode === changeTitle(title) && 'bg-gray-900',
      )}
      onClick={() => changeViewMode(changeTitle(title))}
    >
      <p className="flex justify-center items-center">{title}</p>
    </div>
  );
};
