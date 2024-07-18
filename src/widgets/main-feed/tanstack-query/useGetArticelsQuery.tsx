import { useQuery } from '@tanstack/react-query';
import { getArticlesApi } from '../api/get-articles-api';

export const useGetArticlesQuery = () => {
  const {
    data: articles,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['getArticles'],
    queryFn: getArticlesApi,
  });

  return { articles, isLoading, isError };
};
