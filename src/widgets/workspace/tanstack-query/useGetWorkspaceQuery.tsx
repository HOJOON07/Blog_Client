import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getWorkspaceArticlesApi } from '../api/get-workspace-articles-api';
import { getWorkspaceArticlesApiResponseType } from '../model/get-workspace-response.type';
import { BASE_URL } from '@/shared/api/base-url';

export const INITIAL_URL = `${BASE_URL}/articles/workspace`;

export const useGetWorkspaceQuery = () => {
  const {
    data: workspaces,
    isLoading,
    isError,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    ...result
  } = useInfiniteQuery<getWorkspaceArticlesApiResponseType, Error>({
    queryKey: ['workspace'],
    queryFn: ({ pageParam }) => getWorkspaceArticlesApi(pageParam),
    initialPageParam: INITIAL_URL,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next || undefined,
  });

  return {
    workspaces,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    ...result,
  };
};
