import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getArticlesApi, getArticlesApiParams } from '../api/get-articles-api';
import { getArticlesApiResponseType } from '../model/get-articles-response.type';
import { useState } from 'react';

export type ParamsObjType = {
  where__title__i_like?: string;
  where__description__i_like?: string;
  take: string;
};

export const useGetArticlesQuery = () =>
  // paramsObj: ParamsObjType = { take: '8' },
  // searchQuery: boolean,
  // enabled?: boolean,
  {
    // const queryParams = Object.keys(paramsObj).reduce(
    //   (acc, key) => {
    //     if (paramsObj[key] !== null) {
    //       acc[key] = paramsObj[key];
    //     }
    //     return acc;
    //   },
    //   { take: '8' },
    // );

    // const queryString = new URLSearchParams(queryParams).toString();

    // console.log(queryParams);
    // console.log(queryString);

    // const INITIAL_URL = `http://localhost:5500/articles?${
    //   searchQuery && queryString
    // }`;

    const INITIAL_URL = 'http://localhost:5500/articles';

    // console.log(...Object.entries(queryParams).flat());

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
      // enabled,
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
