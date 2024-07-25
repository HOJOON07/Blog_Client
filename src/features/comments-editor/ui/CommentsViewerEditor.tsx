'use client';
import React, { useRef } from 'react';
import { cn } from '@udecode/cn';
import { Plate, TElement } from '@udecode/plate-common';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { Editor } from '@/components/plate-ui/editor';
import { commentsPlugins } from '../lib/create-plugin';
import { CommentsFixedToolbar } from './comments-fixed-toolbar';
import { CommentsFixedButtons } from './comments-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';

export default function CommentsViewerEditor({
  comment,
  userId,
  readOnlyState,
}: {
  comment: TElement[];
  userId: number;
  readOnlyState: boolean;
}) {
  const containerRef = useRef(null);

  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={200}
      skipDelayDuration={0}
    >
      <Plate
        plugins={commentsPlugins}
        initialValue={comment}
        readOnly={readOnlyState}
      >
        <div
          ref={containerRef}
          className={cn(
            'relative',
            // Block selection
            '[&_.slate-start-area-left]:x!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4 rounded-lg',
          )}
        >
          {!readOnlyState && (
            <CommentsFixedToolbar>
              <CommentsFixedButtons />
            </CommentsFixedToolbar>
          )}
          <Editor
            className="p-2 bg-neutral-900"
            autoFocus={false}
            focusRing={false}
            variant="ghost"
            size="sm"
          />
          {!readOnlyState && (
            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>
          )}
        </div>
      </Plate>
    </TooltipProvider>
  );
}
