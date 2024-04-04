import SidebarHeader from './components/SidebarHeader';
import SidebarApps from './components/SidebarApps';
import SidebarCategoryTitle from './components/SidebarCategoryTitle';
import SidebarItem from './components/SidebarItem';
import { Separator } from '../ui/separator';
import UserCard from './components/UserCard';

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 transition-all duration-200 ease-in-out -translate-x-full border-0 shadow-none dark:bg-slate-850 z-990 rounded-2xl xl:translate-x-0 bg-white max-w-64 overflow-y-auto">
      <SidebarHeader />
      <Separator />
      <div className="items-center block w-full h-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <SidebarCategoryTitle title="main" />
          <SidebarItem name="home" color="text-emerald-500" title="Posts" />
          <SidebarCategoryTitle title="apps" />
          <SidebarItem
            name="layout-dashboard"
            color="text-orange-500"
            title="Dashboards"
          />
          <SidebarItem
            name="folder-kanban"
            color="text-sky-500"
            title="Projects"
          />
          <SidebarItem
            name="message-square"
            color="text-yellow-500"
            title="Chat"
          />
          <SidebarItem
            name="clapperboard"
            color="text-violet-500"
            title="Video"
          />
          <SidebarCategoryTitle title="my page" />
          <SidebarItem name="user" color="text-violet-500" title="Profile" />
          <SidebarItem
            name="credit-card"
            color="text-violet-500"
            title="Payments"
          />
          <SidebarItem
            name="list-checks"
            color="text-violet-500"
            title="Tasks"
          />
        </ul>
      </div>
      <UserCard />
    </aside>
  );
}
