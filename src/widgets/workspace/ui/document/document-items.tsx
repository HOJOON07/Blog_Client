import { Icon } from '@/shared';

export const DocumentItem = () => {
  return (
    <div className="flex items-center w-full h-16 hover:bg-accent hover:text-accent-foreground">
      <div className="flex items-center gap-5 w-1/2">
        <Icon name="document" size={6} />
        <p className="text-md font-medium">
          블로그 사이드 언제쯤 끝낼수 있을까?
        </p>
      </div>
      <div className="flex items-center gap-4 w-1/2 justify-end">
        <div className="flex items-center gap-3 w-[40%] justify-end">
          <p className="text-sm font-light">NEXT.js</p>
        </div>
        <div className="flex items-center gap-3 w-[20%] justify-end">
          <p className="text-xs font-light">2024.06.15</p>
        </div>
        <div className="flex items-center gap-3 w-[18%] justify-end">
          <p className="text-xs font-light">2024.06.15</p>
        </div>
        <div className="flex items-center justify-end flex-1 gap-2">
          <Icon name="star" />
          <Icon name="dots" />
        </div>
      </div>
    </div>
  );
};
