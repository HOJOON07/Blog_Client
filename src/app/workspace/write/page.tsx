import React from 'react';
import PlateEditor from '@/features/write-editor/ui/PlateEditor';

export default function WritePage() {
  return (
    <div className="max-w-[1440px] rounded-lg border bg-background shadow flex-1">
      <PlateEditor />
    </div>
  );
}
