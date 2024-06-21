import { Badge, Separator } from '@/shared';

export const ArticleHeader = () => {
  return (
    <div className="flex flex-col gap-4 px-4 mt-20">
      <p className="text-4xl">이건 제목이야</p>
      <div className="flex">
        <p className="text-xl text-zinc-500">
          여기에 서브 타이틀 들어가는거 어떻게 생각해여기에 서브 타이틀
        </p>
        <div className="flex flex-col justify-end ml-auto">
          <p className="text-zinc-500 text-[12px] font-medium min-w-24">
            2024년 6월 20일
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
        <Badge variant="secondary">리액트</Badge>
      </div>
      <Separator />
    </div>
  );
};
