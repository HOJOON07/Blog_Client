import { Button, Icon, buttonVariants, cn } from '@/shared';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const WorkspaceSidebar = () => {
  return (
    <nav className="relative flex flex-col h-screen min-w-[255px]">
      {/* 사이드바 확장 아이콘  */}
      <div className="flex items-center flex-[0_0_auto] justify-between px-3 h-[52px]">
        <Button variant="ghost" size="icon">
          <Icon name="workspaceSidebar" width={6} height={6} />
        </Button>
      </div>
      {/* 사이드바 메인 컨텐츠 */}
      <div className="flex flex-auto flex-col">
        {/* workspace, searchinput, 모든 페이지 */}
        <div className="flex flex-col flex-nowrap px-3 py-1">
          {/* workspace */}
          <div className="flex items-center justify-between gap-2">
            <Button variant="ghost" className="px-2 gap-2 h-14">
              <div className="w-9 h-9 bg-white rounded-md"></div>
              <div className="text-sm font-medium tracking-wide text-slate-400 max-w-[120px] truncate">
                hojoon Workspace
              </div>
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="circleProfile" width={6} height={6} />
            </Button>
          </div>
          {/* search */}
          <div className="inline-flex items-center rounded-lg border border-solid text-sm h-9 select-none cursor-pointer px-3 my-5 relative w-full text-zinc-400">
            <MagnifyingGlassIcon className="mr-3 w-5 h-5" />
            <p className="font-light tracking-wide flex-1">빠른 검색</p>
            <kbd className="">⌘ + K</kbd>
          </div>
          {/* 모든페이지 */}
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
          {/* 즐겨찾기 header */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mt-4 mb-2 font-extralight">
            즐겨찾기
          </div>
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
          <div className="flex items-center justify-between text-xs text-zinc-400 mt-4 mb-2 font-extralight">
            시리즈
          </div>
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
          <div className="flex items-center justify-between text-xs text-zinc-400 mt-4 mb-2 font-extralight">
            기타
          </div>
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
