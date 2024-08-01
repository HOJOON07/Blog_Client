import { useSearchQueryStore } from '@/app/_store/search-all-articles-store';
import {
  getSearchPublicArticlesApi,
  getSearchWorkspaceArticlesApi,
} from '../api/get-search-articles.api';
import { useInfiniteQuery } from '@tanstack/react-query';
import qs from 'qs';

const PublicUrl = 'http://localhost:5500/articles?';
const WorkspaceUrl = 'http://localhost:5500/articles/workspace?';

export const useGetSearchArticles = (
  path: string,
  enabled: boolean = false,
) => {
  const { query } = useSearchQueryStore();
  const trimQueryString = Object.fromEntries(
    Object.entries(query).map(([key, value]) => [
      key,
      typeof value === 'string' ? value.trim() : value,
    ]),
  );

  const INITIAL_URL = path === 'public_articles' ? PublicUrl : WorkspaceUrl;

  const getSearchResultsApi =
    path === 'public_articles'
      ? getSearchPublicArticlesApi
      : getSearchWorkspaceArticlesApi;
  const queryString = qs.stringify(trimQueryString, { skipNulls: true });

  const {
    data: searchResults,
    isLoading,
    isError,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    refetch,
    ...result
  } = useInfiniteQuery({
    queryKey: ['search', path, queryString],
    queryFn: () => getSearchResultsApi(INITIAL_URL + queryString),
    initialPageParam: INITIAL_URL,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next || undefined,
    enabled,
  });

  return {
    searchResults,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    refetch,
    ...result,
  };
};
