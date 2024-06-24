'use client';
import React, { useRef } from 'react';
import { cn } from '@udecode/cn';
import { Plate } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { Editor } from '@/components/plate-ui/editor';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { commentsPlugins } from '../lib/create-plugin';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { CommentsFixedToolbar } from './comments-fixed-toolbar';
import { CommentsFixedButtons } from './comments-buttons';
import { Button } from '@/shared';

export default function CommentsEditor() {
  const containerRef = useRef(null);
  const initialValue = [
    {
      id: '1',
      type: ELEMENT_PARAGRAPH,
      children: [{ text: '댓글을 작성하세요' }],
    },
  ];

  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={200}
      skipDelayDuration={0}
    >
      <Plate plugins={commentsPlugins} initialValue={initialValue}>
        <div
          ref={containerRef}
          className={cn(
            'relative',
            // Block selection
            '[&_.slate-start-area-left]:x!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4 border rounded-lg',
          )}
        >
          <CommentsFixedToolbar>
            <CommentsFixedButtons />
          </CommentsFixedToolbar>
          <Editor
            className="p-2"
            autoFocus={false}
            focusRing={false}
            variant="ghost"
            size="sm"
          />
          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
        </div>
        <div className="flex justify-end">
          <Button className="ml-auto my-2">댓글 등록</Button>
        </div>
      </Plate>
    </TooltipProvider>
  );
}
