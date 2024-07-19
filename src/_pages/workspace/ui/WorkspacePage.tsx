import {
  DocumentHeader,
  Documents,
  TagFilter,
  WorkspaceHeader,
} from '@/widgets/workspace';

export const WorkspacePage = () => {
  return (
    <div className="flex flex-col flex-1">
      {/* <WorkspaceHeader /> */}
      <div className="border-l h-full relative">
        <div className="mt-6 w-full max-h-[80%]">
          <div className="flex items-center justify-between mb-6 px-4">
            <p className="font-medium text-[20px] text-gray-500">모든 페이지</p>
            <TagFilter />
          </div>
          <DocumentHeader />
          <Documents />
        </div>
      </div>
    </div>
  );
};
