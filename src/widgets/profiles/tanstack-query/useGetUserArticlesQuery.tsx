// import { useQuery } from '@tanstack/react-query';
// import {
//   ParamsObjType,
//   getUserArticlesApiResponseType,
// } from '../model/get-user-articles-api.type';
// import { getUserArticlesApi } from '../api/get-user-articles-api';

// export const INITIAL_URL = 'http://localhost:5500/articles';

// export const useGetUserArticlesQuery = (paramsObj: ParamsObjType) => {
//   const queryParams = Object.keys(paramsObj).reduce(
//     (acc, key) => {
//       if (paramsObj[key] !== null) {
//         acc[key] = paramsObj[key];
//       }
//       return acc;
//     },
//     { devName: paramsObj.devName },
//   );

//   const { data: articles } = useQuery<getUserArticlesApiResponseType, Error>({
//     queryKey: ['artcles/user', ...Object.entries(paramsObj).flat()],
//     queryFn: () => getUserArticlesApi(queryParams),
//   });

//   return { articles };
// };

import { useInfiniteQuery } from '@tanstack/react-query';
import {
  ParamsObjType,
  getUserArticlesApiResponseType,
} from '../model/get-user-articles-api.type';
import { getUserArticlesApi } from '../api/get-user-articles-api';

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

  const INITIAL_URL = `http://localhost:5500/articles/users?${queryString}`;

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
