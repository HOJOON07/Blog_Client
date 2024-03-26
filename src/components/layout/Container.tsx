'use client';
import { ReactNode } from 'react';
import Header from '@/components/navigation/header/Header';
import SideBar from '../navigation/sidebar/Sidebar';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto xl:w-[1280px] 2xl:w-[1400px] relative">
      <Header />
      <SideBar />
    </div>
  );
}
