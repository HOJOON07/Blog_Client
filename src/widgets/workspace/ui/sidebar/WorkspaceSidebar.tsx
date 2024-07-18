import { Header, Search, UserInfo } from '@/features/get-workspace-sidebar';
import { Divider, Footer, SidebarItem } from '@/widgets/workspace';

export const WorkspaceSidebar = () => {
  return (
    <aside className="h-screen min-w-[280px] sticky left-0 top-0">
      <div className="relative h-full">
        <Header />
        <div className="flex flex-auto flex-col">
          <div className="flex flex-col px-3 py-1">
            <UserInfo />
            <Search />
            <SidebarItem icon="folder" title="모든 페이지" href="/workspace" />
            <Divider category="즐겨찾기" />
            <SidebarItem
              icon="document"
              title="즐겨 찾기 제목"
              href="/workspace"
            />
            <Divider category="시리즈" />
            <SidebarItem
              isSeries={true}
              icon="series"
              title="시리즈 제목"
              href="/workspace"
            />
            <Divider category="기타" />
            <SidebarItem icon="trashbox" title="휴지통" href="/workspace" />
            <SidebarItem icon="storage" title="임시 저장" href="/workspace" />
          </div>
        </div>
        <Footer />
      </div>
    </aside>
  );
};
