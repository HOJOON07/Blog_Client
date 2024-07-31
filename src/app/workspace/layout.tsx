import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import React, { ReactNode } from 'react';
import {
  Documents,
  Settings,
  WorkspaceHeader,
  WorkspaceSidebar,
} from '@/widgets/workspace';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[280px_1fr]">
      <WorkspaceSidebar />
      {children}
    </div>
  );
}
