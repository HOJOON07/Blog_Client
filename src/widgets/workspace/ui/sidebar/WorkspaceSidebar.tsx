import { Header, Search, UserInfo } from '@/features/get-workspace-sidebar';
import { Icon, buttonVariants, cn } from '@/shared';
import { Divider } from '@/widgets/workspace';

export const WorkspaceSidebar = () => {
  return (
    <nav className="relative flex flex-col h-screen min-w-[255px]">
      <Header />
      {/* 사이드바 메인 컨텐츠 */}
      <div className="flex flex-auto flex-col">
        <div className="flex flex-col flex-nowrap px-3 py-1">
          <UserInfo />
          <Search />
          <div
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start gap-2',
            )}
          >
            <div>
              <Icon name="folder" width={5} height={5} />
            </div>
            <p className="font-light">모든 페이지</p>
          </div>
          <Divider category="즐겨찾기" />
          <div
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start px-1',
            )}
          >
            <div>
              <Icon name="rightArrow" width={4} height={4} />
            </div>
            <div className="mr-2">
              <Icon name="document" width={5} height={5} />
            </div>
            <p className="font-light text-xs">즐겨 찾기 제목</p>
          </div>
          <Divider category="시리즈" />
          <div
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start px-1',
            )}
          >
            <div>
              <Icon name="rightArrow" width={4} height={4} />
            </div>
            <div className="mr-2">
              <Icon name="series" width={5} height={5} />
            </div>
            <p className="font-light text-xs">시리즈 제목</p>
          </div>
          <Divider category="기타" />
          <div
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start gap-2',
            )}
          >
            <div>
              <Icon name="trashbox" width={5} height={5} />
            </div>
            <p className="font-light">휴지통</p>
          </div>
          <div
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'justify-start gap-2',
            )}
          >
            <div>
              <Icon name="storage" width={5} height={5} />
            </div>
            <p className="font-light">임시 저장</p>
          </div>
          <div className="w-full mt-auto">
            <button className="inline-flex h-12 animate-shimmer items-center justify-start rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 gap-8 w-full">
              <Icon name="plus" />
              New Post
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
