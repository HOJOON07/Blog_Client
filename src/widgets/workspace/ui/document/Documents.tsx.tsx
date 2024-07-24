'use client';
import { DocumentItem } from '@/widgets/workspace';
import { useGetWorkspaceQuery } from '../../tanstack-query/useGetWorkspaceQuery';

export const Documents = () => {
  const { workspaces } = useGetWorkspaceQuery();

  return (
    <div>
      {workspaces?.data.map((article) => (
        <DocumentItem key={article.id} article={article} />
      ))}
    </div>
  );
};
