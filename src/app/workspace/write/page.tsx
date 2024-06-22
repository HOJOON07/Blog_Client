'use client';
import React from 'react';
import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import { Settings } from '@/widgets/workspace';
import { PlateController } from '@udecode/plate-common';
import { TooltipProvider } from '@/components/plate-ui/tooltip';

export default function WritePage() {
  return (
    <div className="flex flex-1 relative">
      <PlateController>
        <TooltipProvider
          disableHoverableContent
          delayDuration={200}
          skipDelayDuration={0}
        >
          <div className="w-[820px] rounded-lg border bg-background shadow">
            <PlateEditor />
          </div>
        </TooltipProvider>
        <Settings />
      </PlateController>
    </div>
  );
}
