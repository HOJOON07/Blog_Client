import { useQuery } from '@tanstack/react-query';
import { getArticlesApi } from '../api/get-articles-api';
import { getArticlesApiResponseType } from '../model/get-articles-response.type';

export const useGetArticlesQuery = () => {
  const {
    data: articles,
    isLoading,
    isError,
  } = useQuery<getArticlesApiResponseType, Error>({
    queryKey: ['getArticles'],
    queryFn: getArticlesApi,
  });

  return { articles, isLoading, isError };
};
