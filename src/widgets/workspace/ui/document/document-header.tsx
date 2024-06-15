import { Icon, Separator, buttonVariants, cn } from '@/shared';

export const DocumentHeader = () => {
  return (
    <div className="flex items-center w-full mb-4">
      <div className="flex items-center gap-4 w-1/2">
        <Icon name="list" size={6} />
        <p className="text-sm font-light">제목</p>
        <Separator orientation="vertical" className="h-4 w-[2px] ml-auto" />
      </div>
      <div className="flex items-center gap-4 w-1/2 justify-end">
        <div className="flex items-center gap-3 w-[40%] justify-end">
          <p className="text-sm font-light">태그</p>
          <Separator orientation="vertical" className="h-4 w-[2px]" />
        </div>
        <div className="flex items-center gap-3 w-[20%] justify-end">
          <p className="text-sm font-light">생성한 날짜</p>
          <Separator orientation="vertical" className="h-4 w-[2px]" />
        </div>
        <div className="flex items-center gap-3 w-[18%] justify-end">
          <p className="text-sm font-light">수정한 날짜</p>
          <Separator orientation="vertical" className="h-4 w-[2px]" />
        </div>
        <div className="flex items-center justify-end flex-1"></div>
      </div>
    </div>
  );
};
