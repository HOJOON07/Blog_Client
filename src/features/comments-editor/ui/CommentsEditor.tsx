'use client';
import React, { useRef, useState } from 'react';
import { cn } from '@udecode/cn';
import { Plate, TElement, useEditorState } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { Editor } from '@/components/plate-ui/editor';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { commentsPlugins } from '../lib/create-plugin';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { CommentsFixedToolbar } from './comments-fixed-toolbar';
import { CommentsFixedButtons } from './comments-buttons';
import { Button } from '@/shared';
import { CommentsWriteButton } from './comments-write-button';
import { CommentsWriteEditorinitialValue } from '../model/comments-write-intial-value';
import { useUserState } from '@/app/_store/useUserState';

export default function CommentsEditor() {
  const containerRef = useRef(null);
  const { user } = useUserState();

  if (!user) {
    return null;
  }
  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={200}
      skipDelayDuration={0}
    >
      <Plate
        plugins={commentsPlugins}
        initialValue={CommentsWriteEditorinitialValue}
      >
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
        <CommentsWriteButton />
      </Plate>
    </TooltipProvider>
  );
}
