import { useInfiniteQuery } from '@tanstack/react-query';
import {
  ParamsObjType,
  getUserArticlesApiResponseType,
} from '../model/get-user-articles-api.type';
import { getUserArticlesApi } from '../api/get-user-articles-api';
import { BASE_URL } from '@/shared/api/base-url';

export const useGetUserArticlesQuery = (paramsObj: ParamsObjType) => {
  const queryParams = Object.keys(paramsObj).reduce(
    (acc, key) => {
      if (paramsObj[key] !== null) {
        acc[key] = paramsObj[key];
      }
      return acc;
    },
    { devName: paramsObj.devName },
  );

  const queryString = new URLSearchParams(queryParams).toString();

  const INITIAL_URL = `${BASE_URL}/articles/users?${queryString}`;

  const {
    data: articles,
    isLoading,
    isError,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    ...result
  } = useInfiniteQuery<getUserArticlesApiResponseType, Error>({
    queryKey: ['artcles/user', ...Object.entries(queryParams).flat()],
    queryFn: ({ pageParam = INITIAL_URL }) => getUserArticlesApi(pageParam),
    initialPageParam: INITIAL_URL,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next || undefined,
  });

  return {
    articles,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    ...result,
  };
};
