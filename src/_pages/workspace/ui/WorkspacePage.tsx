import { Documents, WorkspaceHeader } from '@/widgets/workspace';

export const WorkspacePage = () => {
  return (
    <div className="flex flex-col flex-1">
      <WorkspaceHeader />
      <Documents />
    </div>
  );
};
