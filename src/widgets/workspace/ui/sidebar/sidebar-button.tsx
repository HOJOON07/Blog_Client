import { Icon, IconList } from '@/shared';

interface SidebarButtonProps {
  icon: IconList;
  title: string;
}

export const SidebarButton = ({ icon, title }: SidebarButtonProps) => {
  return (
    <div className="w-full mt-auto">
      <button className="inline-flex h-12 animate-shimmer items-center justify-start rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 gap-8 w-full">
        <Icon name={icon} />
        {title}
      </button>
    </div>
  );
};
