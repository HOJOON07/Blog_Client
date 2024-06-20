import { SidebarButton } from '@/widgets/workspace';
import { useRouter } from 'next/navigation';

export const Footer = () => {
  return (
    <div className="flex flex-col gap-[6px] px-3 my-4 absolute bottom-0 w-full">
      <SidebarButton icon="plus" title="새 글 작성" pathName="/" />
      <SidebarButton icon="plus" title="나가기" pathName="/" />
    </div>
  );
};
