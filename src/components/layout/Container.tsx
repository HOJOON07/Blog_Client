'use client';
import Sidebar from '@/components/sidebar/Sidebar';
import { Fragment, ReactNode } from 'react';
import Nav from '@/components/nav/Nav';
import { useSidebarStore } from '@/store/sidebarStore';

export default function Container({ children }: { children: ReactNode }) {
  const expand = useSidebarStore((state) => state.expand);
  return (
    <Fragment>
      <Sidebar />
      <div
        className={`relative h-full transition-all duration-200 ease-in-out rounded-xl ${
          expand ? 'ml-[250px]' : 'ml-[100px]'
        }`}
      >
        <Nav />
        {children}
      </div>
    </Fragment>
  );
}
