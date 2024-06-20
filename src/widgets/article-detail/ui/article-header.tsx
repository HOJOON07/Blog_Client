import { Badge, Separator } from '@/shared';

export const ArticleHeader = () => {
  return (
    <>
      <div className="px-4 flex mt-5 mb-4">
        <p className="text-4xl">이건 제목이야</p>
        <div className="flex flex-col justify-end ml-auto">
          <p className="text-zinc-500 text-[12px] font-medium">
            2024년 6월 20일
          </p>
        </div>
      </div>
      <div className="px-4 flex items-center gap-2 mb-3">
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
      </div>
      <div className="px-4 mt-4 mb-4">
        <Separator />
      </div>
    </>
  );
};
