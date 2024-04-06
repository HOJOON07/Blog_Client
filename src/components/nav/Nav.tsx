import { NavBreadcrumb } from './components/NavBreadcrumb';
import ViewState from './components/ViewState';

export default function Nav() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start h-20">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <div>
          <NavBreadcrumb />
          <ViewState />
          <ViewState />
        </div>
        <div></div>
      </div>
    </nav>
  );
}
