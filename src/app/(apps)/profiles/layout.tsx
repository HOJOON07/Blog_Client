'use client';
import { useProfilesTabModeStore } from '@/app/_store/profiles-tab-store';
import { Metadata } from 'next';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function ProfileLayout({
  children,
  overview,
}: Readonly<{
  children: React.ReactNode;
  overview: React.ReactNode;
}>) {
  const segment = useSelectedLayoutSegment();

  return (
    <main className="pt-10">
      <div className="max-w-[1200px] w-full mx-auto flex ">
        <div className="py-12 px-6 gap-9 flex-1 flex">
          {/* <div className="py-12 px-6 grid grid-cols-[280px_1fr] gap-9"> */}
          {children}
          {segment === 'edit' ? null : overview}
        </div>
      </div>
    </main>
  );
}
