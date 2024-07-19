import { useQuery } from '@tanstack/react-query';
import { getDetailWorkspaceArticleApi } from '../api/get-details-workspace-article-api';

export const useGetWorkspaceDetailsQuery = (articleId: number) => {
  const { data: document, isLoading } = useQuery({
    queryKey: ['workspace/articles/detail', articleId],
    queryFn: () => getDetailWorkspaceArticleApi(articleId),
  });
  return { document, isLoading };
};
