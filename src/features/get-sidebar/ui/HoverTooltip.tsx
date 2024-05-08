import { useSidebarStore } from '@/app/_store/sidebarStore';
import clsx from 'clsx';

interface HoverTooltipProps {
  title: string;
  show: boolean;
}
export const HoverTooltip = ({ title, show }: HoverTooltipProps) => {
  const expand = useSidebarStore((state) => state.expand);

  return (
    <div
      className={clsx(
        `${
          !expand && show ? 'flex' : 'hidden'
        } items-center justify-center bg-slate-200 rounded-md absolute top-[50%] left-[100%] -translate-y-[50%] z-[9999] p-[6px] tracking-wide dark:bg-postcard/90`,
      )}
    >
      <p className="text-xs font-light dark:text-primary">{title}</p>
    </div>
  );
};
