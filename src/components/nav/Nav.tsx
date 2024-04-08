import ColorThemeMode from './components/ColorThemeMode';
import { NavBreadcrumb } from './components/NavBreadcrumb';
import Notifications from './components/Notifications';
import Search from './components/Search';
import SignIn from './components/SignIn';
import ViewState from './components/ViewState';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl h-20">
      <div>
        <NavBreadcrumb />
        <ViewState />
      </div>
      <div className="flex items-center mr-4 gap-2">
        <Search />
        <SignIn />
        <ColorThemeMode />
        <Notifications />
      </div>
    </nav>
  );
}
