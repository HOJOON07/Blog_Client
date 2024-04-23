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
          <SidebarItem name="home" title="Posts" />
          {expand && <SidebarCategoryTitle title="apps" />}
          <SidebarItem name="dashboard" title="Dashboard" />
          <SidebarItem name="pairProgramming" title="Pair Programming" />
          <SidebarItem name="chat" title="Chat" />
          <SidebarItem name="email" title="E-mail" />
          {expand && <SidebarCategoryTitle title="my" />}
          <SidebarItem name="user" title="Profile" />
          <SidebarItem name="payment" title="Payments" />
          <SidebarItem name="task" title="Tasks" />
        </ul>
      </div>
      <UserCard expand={expand} />
    </aside>
  );
}
