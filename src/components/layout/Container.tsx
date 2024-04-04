import Sidebar from '@/components/sidebar/Sidebar';
import ContentsWrap from './ContentsWrap';
import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-50">
      <Sidebar />
      <ContentsWrap />
    </div>
  );
}
