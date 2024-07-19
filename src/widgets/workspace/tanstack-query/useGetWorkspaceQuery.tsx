import { useQuery } from '@tanstack/react-query';
import { getWorkspaceArticlesApi } from '../api/get-workspace-articles-api';
import { getWorkspaceArticlesApiResponseType } from '../model/get-workspace-response.type';

export const useGetWorkspaceQuery = () => {
  const { data: workspaces } = useQuery<
    getWorkspaceArticlesApiResponseType,
    Error
  >({
    queryKey: ['workspace'],
    queryFn: getWorkspaceArticlesApi,
  });

  return { workspaces };
};
