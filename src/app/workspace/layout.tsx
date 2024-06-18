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
    <>
      <TooltipProvider
        disableHoverableContent
        delayDuration={200}
        skipDelayDuration={0}
      >
        <div className="flex">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel minSize={0} defaultSize={20} maxSize={35}>
              <WorkspaceSidebar />
            </ResizablePanel>
            <ResizableHandle withHandle={true} />
            <ResizablePanel>{children}</ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </TooltipProvider>
    </>
  );
}
