'use client';

import { plugins } from '@/features/write-editor/plugin/plate-plugins';
import { Plate } from '@udecode/plate-common';
import { CursorOverlay } from '@udecode/plate-cursor';
import { Editor } from '@/components/plate-ui/editor';
import { useRef } from 'react';
import { cn } from '@udecode/cn';
import { initialValue } from '../../../../public/mock/ArticleInitData';

export const ArticleViewEditor = () => {
  const containerRef = useRef(null);

  return (
    <Plate plugins={plugins} initialValue={initialValue} readOnly>
      <div
        ref={containerRef}
        className={cn(
          'relative',
          // Block selection
          '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4',
        )}
      >
        <Editor
          className="px-5 pt-10 min-h-[100vh]"
          autoFocus
          focusRing={false}
          variant="ghost"
          size="md"
        />
        <CursorOverlay containerRef={containerRef} />
      </div>
    </Plate>
  );
};
