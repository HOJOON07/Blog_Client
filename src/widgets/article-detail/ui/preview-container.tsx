'use client';
import {
  ArticleHeader,
  ArticleViewEditor,
  PreviewTopFixedHeader,
} from '@/widgets/article-detail';
import { useRouter } from 'next/navigation';

import { useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const PreviewContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleEscapePreview = () => {
    router.back();
  };
  const isWindowLocation = true;

  useOnClickOutside([ref, headerRef], handleEscapePreview, 'mousedown');
  return (
    <div>
      <PreviewTopFixedHeader ref={headerRef} />
      <div className="max-w-[1000px] mx-auto px-14 bg-black relative" ref={ref}>
        <ArticleHeader isWindowLocation={isWindowLocation} />
        <ArticleViewEditor />
      </div>
    </div>
  );
};
