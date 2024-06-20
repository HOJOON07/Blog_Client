'use client';
import React, { useRef } from 'react';
import { cn } from '@udecode/cn';
import { Plate, PlateController, useEditorRef } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { MENTIONABLES } from '@/features/write-editor/model/mentionables';
import { plugins } from '@/features/write-editor/plugin/plate-plugins';
import { CursorOverlay } from '@/components/plate-ui/cursor-overlay';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { MentionCombobox } from '@/components/plate-ui/mention-combobox';
import { ELEMENT_H1 } from '@udecode/plate-heading';
import { ELEMENT_HR } from '@udecode/plate-horizontal-rule';

export default function PlateEditor() {
  const containerRef = useRef(null);
  const initialValue = [
    {
      id: '1',
      type: ELEMENT_H1,
      children: [{ text: '제목을 입력하세요' }],
    },
    {
      id: '2',
      type: ELEMENT_HR,
      children: [{ text: '' }],
    },
    {
      id: '3',
      type: ELEMENT_PARAGRAPH,
      children: [{ text: '내용을 입력하세요' }],
    },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate plugins={plugins} initialValue={initialValue}>
        <div
          ref={containerRef}
          className={cn(
            'relative',
            // Block selection
            '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4',
          )}
        >
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>
          <Editor
            className="px-10 pt-10 min-h-[100vh]"
            autoFocus
            focusRing={false}
            variant="ghost"
            size="md"
          />
          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
          <MentionCombobox items={MENTIONABLES} />
          <CursorOverlay containerRef={containerRef} />
        </div>
      </Plate>
    </DndProvider>
  );
}
