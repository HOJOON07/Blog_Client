import Sidebar from '@/components/sidebar/Sidebar';
import { Fragment, ReactNode } from 'react';
import Nav from '@/components/nav/Nav';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Sidebar />
      <div className="relative h-full transition-all duration-200 ease-in-out lg:ml-[250px] rounded-xl">
        <Nav />
        {children}
      </div>
    </Fragment>
  );
}
