import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getArticlesApi, getArticlesApiParams } from '../api/get-articles-api';
import { getArticlesApiResponseType } from '../model/get-articles-response.type';
import { useState } from 'react';

export const INITIAL_URL = 'http://localhost:5500/articles';

export const useGetArticlesQuery = () => {
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
  } = useInfiniteQuery<getArticlesApiResponseType, Error>({
    queryKey: ['getArticles'],
    queryFn: ({ pageParam }) => getArticlesApi(pageParam),
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
