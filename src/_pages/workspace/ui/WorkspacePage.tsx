import PlateEditor from '@/features/write-editor/ui/PlateEditor';
import { WorkspaceSidebar } from '@/widgets/workspace';

export const WorkspacePage = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <WorkspaceSidebar />
      {/* <div className="max-w-[1440px] rounded-lg border bg-background shadow flex-1">
        <PlateEditor />
      </div> */}
    </div>
  );
};

// 0. 레이아웃 먼저 잡아야 하고
// 1. sidebar
// 2. 오른쪽 툴바
// 3. 위에 툴바
// 4. 위에 날짜
// 5. 에디터 위에 셋업바
// 6. 에디터
