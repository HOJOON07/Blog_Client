import Sidebar from '@/components/sidebar/Sidebar';
import { ReactNode } from 'react';
import MainContents from '@/components/layout/MainContents';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div>
      <Sidebar />
      <MainContents />
    </div>
  );
}
