import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import { PostSetup } from '@/features/write-editor/ui/PostSetup';
import React from 'react';

export default function page() {
  return (
    <div className="container">
      <PostSetup />
      {/* 포스트 헤더가 있고 */}

      <div className="max-w-[1400px] rounded-lg border bg-background shadow">
        <PlateEditor />
      </div>
    </div>
  );
}
