import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import React from 'react';

export default function page() {
  return (
    <div className="max-w-[1336px] rounded-lg border bg-background shadow">
      <PlateEditor />
    </div>
  );
}
