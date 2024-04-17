'use client';
import SidebarHeader from './components/SidebarHeader';
import SidebarCategoryTitle from './components/SidebarCategoryTitle';
import SidebarItem from './components/SidebarItem';
import { Separator } from '../ui/separator';
import UserCard from './components/UserCard';
import { useState } from 'react';
import clsx from 'clsx';

export default function Sidebar() {
  const [expand, setExpand] = useState<boolean>(true);

  const handleSizeSidebar = () => {
    setExpand((expand) => !expand);
  };

  return (
    <aside
      className={clsx(
        `fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 transition-all duration-200 ease-in-out -translate-x-full border-0 shadow-none dark:bg-postcard z-990 rounded-2xl lg:translate-x-0 ${
          expand ? ' max-w-64 overflow-y-auto' : 'max-w-24 overflow-hidden'
        }`,
      )}
    >
      <SidebarHeader onClick={handleSizeSidebar} expand={expand} />
      <Separator />
      <div className="items-center block w-full h-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <SidebarCategoryTitle title="main" expand={expand} />
          <SidebarItem name="home" title="Posts" expand={expand} />
          <SidebarCategoryTitle title="apps" expand={expand} />
          <SidebarItem
            name="layout-dashboard"
            title="Dashboards"
            expand={expand}
          />
          <SidebarItem name="folder-kanban" title="Projects" expand={expand} />
          <SidebarItem name="message-square" title="Chat" expand={expand} />
          <SidebarItem name="clapperboard" title="Video" expand={expand} />
          <SidebarCategoryTitle title="my page" expand={expand} />
          <SidebarItem name="user" title="Profile" expand={expand} />
          <SidebarItem name="credit-card" title="Payments" expand={expand} />
          <SidebarItem name="list-checks" title="Tasks" expand={expand} />
        </ul>
      </div>
      <UserCard />
    </aside>
  );
}
