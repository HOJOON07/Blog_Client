import { Separator } from '@/components/ui/separator';
import Profile from './components/Profile';
import Menu from './components/Menu';
import Services from './components/Services';
import Settings from './components/Settings';
import NewTask from './components/NewTask';

export default function SideBar() {
  return (
    <div className="absolute top-[76px] z-10 w-[280px] 2xl:w-[300px] h-[calc(100vh-85px)] border-cyan-500/50 border-[1px] rounded-3xl">
      <div className="flex flex-col relative">
        <Profile />
        <Menu />
        <Separator />
        <Services />
        <Separator />
        <Settings />
        <NewTask />
      </div>
    </div>
  );
}
