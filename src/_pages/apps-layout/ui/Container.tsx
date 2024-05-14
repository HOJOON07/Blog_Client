'use client';

import { Fragment, ReactNode } from 'react';

import { useSidebarStore } from '@/app/_store/sidebarStore';
import { Sidebar } from '@/widgets/sidebar';
import { Nav } from '@/widgets/top-nav';

export function Container({ children }: { children: ReactNode }) {
  const expand = useSidebarStore((state) => state.expand);
  return (
    <Fragment>
      <Sidebar />
      <div
        className={`relative h-full transition-all duration-200 ease-in-out rounded-xl ${
          expand ? 'ml-[250px]' : 'ml-[100px]'
        } noNav:ml-0`}
      >
        <Nav />
        {children}
      </div>
    </Fragment>
  );
}
