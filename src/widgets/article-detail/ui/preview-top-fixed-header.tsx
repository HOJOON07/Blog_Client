'use client';

import { Icon } from '@/shared';
import { useRouter } from 'next/navigation';
import { useEscapePreview } from '../hooks/useEscapePreview';
import { forwardRef } from 'react';

export const PreviewTopFixedHeader = forwardRef<HTMLDivElement>(
  (props, ref) => {
    const router = useRouter();
    const handleClosePreview = () => {
      router.back();
    };

    useEscapePreview(() => {
      router.back();
    });

    return (
      <div ref={ref} className="sticky top-0 h-12 z-50 bg-black">
        <div className="max-w-[1000px] mx-auto flex justify-between px-6 items-center h-14">
          <p className="text-cyan-500">kimhojoon</p>
          <Icon
            name="close"
            className="cursor-pointer"
            onClick={handleClosePreview}
          />
        </div>
      </div>
    );
  },
);

PreviewTopFixedHeader.displayName = 'PreviewTopFixedHeader';
