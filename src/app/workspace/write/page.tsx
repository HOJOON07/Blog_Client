'use client';
import React from 'react';
import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import { Settings } from '@/widgets/workspace';
import { PlateController } from '@udecode/plate-common';

export default function WritePage() {
  return (
    <div className="flex flex-1">
      <PlateController>
        <div className="min-w-[820px] rounded-lg border bg-background shadow flex-1">
          <PlateEditor />
        </div>
        <Settings />
      </PlateController>
    </div>
  );
}
