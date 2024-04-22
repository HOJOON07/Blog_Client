'use client';

import SidebarHeader from './components/SidebarHeader';
import SidebarCategoryTitle from './components/SidebarCategoryTitle';
import SidebarItem from './components/SidebarItem';
import { Separator } from '../ui/separator';
import UserCard from './components/UserCard';
import clsx from 'clsx';
import { useSidebarStore } from '@/store/sidebarStore';

export default function Sidebar() {
  const expand = useSidebarStore((state) => state.expand);
  const handleSidebarSize = useSidebarStore((state) => state.handleSidebarSize);

  return (
    <aside
      className={clsx(
        `fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 transition-all duration-200 ease-in-out -translate-x-full border-0 shadow-none dark:bg-postcard rounded-2xl lg:translate-x-0 ${
          expand ? ' max-w-64 overflow-y-auto' : 'max-w-[68px] overflow-hidden'
        }`,
      )}
    >
      <SidebarHeader onClick={handleSidebarSize} />
      <Separator />
      <div className="items-center block w-full h-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          {expand && <SidebarCategoryTitle title="main" />}
          <SidebarItem name="home" title="Posts" />
          {expand && <SidebarCategoryTitle title="apps" />}
          <SidebarItem name="layout-dashboard" title="Dashboards" />
          <SidebarItem name="folder-kanban" title="Projects" />
          <SidebarItem name="message-square" title="Chat" />
          <SidebarItem name="clapperboard" title="Video" />
          {expand && <SidebarCategoryTitle title="my" />}
          <SidebarItem name="user" title="Profile" />
          <SidebarItem name="credit-card" title="Payments" />
          <SidebarItem name="list-checks" title="Tasks" />
        </ul>
      </div>
      <UserCard expand={expand} />
    </aside>
  );
}
