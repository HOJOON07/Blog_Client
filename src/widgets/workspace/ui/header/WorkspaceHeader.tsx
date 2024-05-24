import { HeaderItem } from '@/widgets/workspace';

export const WorkspaceHeader = () => {
  return (
    <div className="flex items-center justify-center w-full h-[52px]">
      <div className="flex min-w-[400px] bg-gray-700 border rounded-[10px] p-[2px] cursor-pointer">
        <HeaderItem title="문서" />
        <HeaderItem title="시리즈" />
        <HeaderItem title="달력" />
        <HeaderItem title="그래프" />
      </div>
    </div>
  );
};
