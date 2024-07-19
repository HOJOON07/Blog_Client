'use client';
import { DocumentItem } from '@/widgets/workspace';
import { useGetWorkspaceQuery } from '../../tanstack-query/useGetWorkspaceQuery';

export const Documents = () => {
  const { workspaces } = useGetWorkspaceQuery();

  console.log(workspaces);
  return (
    <div>
      {workspaces?.data.map((item) => (
        <DocumentItem
          key={item.id}
          id={item.id}
          title={item.title}
          updatedAt={item.updatedAt}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
};
