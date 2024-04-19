import Nav from '@/components/nav/Nav';
import PostFeed from '../template/PostFeed';
import { ReactNode } from 'react';

export default function MainContents({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full transition-all duration-200 ease-in-out lg:ml-[250px] rounded-xl">
      <Nav />
      {children}
    </div>
  );
}
