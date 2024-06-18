import React from 'react';
import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import { Settings } from '@/widgets/workspace';

export default function WritePage() {
  return (
    <div className="flex flex-1">
      <div className="max-w-[820px] rounded-lg border bg-background shadow flex-1">
        <PlateEditor />
      </div>
      <Settings />
    </div>
  );
}
