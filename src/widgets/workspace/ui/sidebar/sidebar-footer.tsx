import { SidebarButton } from '@/widgets/workspace';

export const Footer = () => {
  return (
    // flex items-center flex-[0_0_auto] justify-between px-3 h-[52px]
    <div className="flex flex-col gap-[6px] px-3 my-4">
      <SidebarButton icon="plus" title="새 글 작성" />
      <SidebarButton icon="plus" title="나가기" />
    </div>
  );
};
