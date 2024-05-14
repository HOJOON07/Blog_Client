import { Search } from '@/features/get-nav';
import { Button, Icon } from '@/shared';

export const WorkspaceSidebar = () => {
  return (
    <nav className="relative flex flex-col h-screen px-4 min-w-[255px] pb-4 pt-2">
      {/* 사이드바가 확장되면 확장 버튼과 유저 아이콘 */}
      <div className="items-center justify-between w-full flex">
        <Button variant="ghost" size="icon">
          <Icon name="workspaceSidebar" />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon name="circleProfile" />
        </Button>
      </div>
      <div>
        <Button
          variant="ghost"
          className="px-2 flex justify-between w-full h-14"
        >
          <div className="w-9 h-9 bg-white rounded-md"></div>
          <p className="text-sm font-medium tracking-wide text-slate-400">
            Hojoon's Workspace
          </p>
        </Button>
      </div>
      {/* 검색 */}
      <div>search</div>
      {/* 모든 페이지 */}
      {/* 즐겨찾기 */}
      {/* 컬렉션 */}
      {/* 기타 */}
      {/* 새 페이지 */}
    </nav>
  );
};
