'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@udecode/cn';
import { Plate } from '@udecode/plate-common';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';

import { profileEditorPlugins } from '@/widgets/profiles';

import { ProfilesFixedToolbar } from './editor-fixed-toolbar';
import { ProfileInitialValue } from '../../../../../public/mock/ProfileInitData';
import { useProfilesEditorReadOnlyStore } from '@/app/_store/profiles-editor-store';

export const ProfileEditor = () => {
  const containerRef = useRef(null);
  const { isReadOnly } = useProfilesEditorReadOnlyStore();

  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={200}
      skipDelayDuration={0}
    >
      <Plate
        plugins={profileEditorPlugins}
        initialValue={ProfileInitialValue}
        readOnly={isReadOnly}
      >
        <div
          ref={containerRef}
          className={cn(
            'relative',
            // Block selection
            '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4 border rounded-lg',
          )}
        >
          <ProfilesFixedToolbar>
            <FixedToolbarButtons />
          </ProfilesFixedToolbar>
          <Editor
            className="px-10 py-5 bg-zinc-950"
            autoFocus
            focusRing={false}
            variant="ghost"
            size="md"
          />
          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
        </div>
      </Plate>
    </TooltipProvider>
  );
};
