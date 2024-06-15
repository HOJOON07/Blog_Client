import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import React, { ReactNode } from 'react';
import {
  Documents,
  WorkspaceHeader,
  WorkspaceSidebar,
} from '@/widgets/workspace';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider
      disableHoverableContent
      delayDuration={200}
      skipDelayDuration={0}
    >
      <div className="flex">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel minSize={20} defaultSize={20} maxSize={35}>
            <WorkspaceSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle={true} />
          <ResizablePanel>{children}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </TooltipProvider>
  );
}

// import PlateEditor from '@/features/write-editor/ui/PlateEditor';
// import {
//   Documents,
//   WorkspaceHeader,
//   WorkspaceSidebar,
// } from '@/widgets/workspace';
// import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared';

// export const WorkspacePage = () => {
//   return (
//     <div className="flex">
//       <ResizablePanelGroup direction="horizontal">
//         <ResizablePanel minSize={20} defaultSize={20} maxSize={35}>
//           <WorkspaceSidebar />
//         </ResizablePanel>
//         <ResizableHandle withHandle={true} />
//         <ResizablePanel>
//           <div className="flex flex-col flex-1">
//             <WorkspaceHeader />
//             <Documents />
//           </div>
//         </ResizablePanel>
//         {/* view workspace list */}

//         {/* <div className="max-w-[1440px] rounded-lg border bg-background shadow flex-1">
//         <PlateEditor />
//       </div> */}

//         {/* view workspace toolbar */}
//       </ResizablePanelGroup>
//     </div>
//   );
// };
