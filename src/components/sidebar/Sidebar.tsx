import SidebarHeader from './components/SidebarHeader';
import SidebarApps from './components/SidebarApps';

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 transition-all duration-200 ease-in-out -translate-x-full border-0 shadow-none dark:bg-slate-850 z-990 rounded-2xl xl:translate-x-0 bg-white max-w-64 overflow-y-auto">
      <SidebarHeader />
      <hr className="h-px mt-0 bg-transparent mb-4" />
      <SidebarApps />
      <div></div>
    </aside>
  );
}
