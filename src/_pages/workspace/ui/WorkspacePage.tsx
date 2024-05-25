import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import { WorkspaceHeader, WorkspaceSidebar } from '@/widgets/workspace';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared';

export const WorkspacePage = () => {
  return (
    <div className="flex">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20} defaultSize={20} maxSize={35}>
          <WorkspaceSidebar />
        </ResizablePanel>
        <ResizableHandle withHandle={true} />
        <ResizablePanel>
          <div className="flex flex-col flex-1">
            <WorkspaceHeader />
          </div>
        </ResizablePanel>
        {/* view workspace list */}

        {/* <div className="max-w-[1440px] rounded-lg border bg-background shadow flex-1">
        <PlateEditor />
      </div> */}

        {/* view workspace toolbar */}
      </ResizablePanelGroup>
    </div>
  );
};

import { ResizeHandle } from '@/components/plate-ui/resizable';

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

// 0. 레이아웃 먼저 잡아야 하고
// 1. sidebar
// 2. 오른쪽 툴바
// 3. 위에 툴바
// 4. 위에 날짜
// 5. 에디터 위에 셋업바
// 6. 에디터
