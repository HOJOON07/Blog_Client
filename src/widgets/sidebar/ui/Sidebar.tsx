'use client';
import clsx from 'clsx';
import { useSidebarStore } from '@/app/_store/main-sidebarStore';
import { Separator } from '@/shared';
import {
  SidebarCategoryTitle,
  SidebarHeader,
  SidebarItem,
  UserCard,
} from '@/features/get-sidebar';

export const Sidebar = () => {
  const expand = useSidebarStore((state) => state.expand);
  const handleSidebarSize = useSidebarStore((state) => state.handleSidebarSize);

  return (
    <aside
      className={clsx(
        `fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 transition-all duration-200 ease-in-out -translate-x-full border-0 shadow-none dark:bg-postcard rounded-2xl lg:translate-x-0 z-[999] ${
          expand ? 'max-w-64 overflow-y-auto' : 'max-w-[68px]'
        }`,
      )}
    >
      <SidebarHeader onClick={handleSidebarSize} />
      <Separator />
      <div className="items-center block w-full h-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          {expand && <SidebarCategoryTitle title="home" />}
          <SidebarItem icon="home" title="Posts" />
          {expand && <SidebarCategoryTitle title="apps" />}
          <SidebarItem icon="dashboard" title="Dashboard" />
          <SidebarItem icon="pairProgramming" title="Pair Programming" />
          <SidebarItem icon="chat" title="Chat" />
          <SidebarItem icon="email" title="E-mail" />
          {expand && <SidebarCategoryTitle title="my" />}
          <SidebarItem icon="user" title="Profile" />
          <SidebarItem icon="payment" title="Payments" />
          <SidebarItem icon="task" title="Tasks" />
        </ul>
      </div>
      <UserCard expand={expand} />
    </aside>
  );
};
