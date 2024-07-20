import { useQuery } from '@tanstack/react-query';
import { getArticleDetailApi } from '../api/get-article-detail-api';
import { getArticleDetailsResponseType } from '../model/article-detail-response.type';

export const useGetArticlesDetailsQuery = (articleId: string) => {
  const {
    data: articlesDetail,
    isLoading,
    isError,
  } = useQuery<getArticleDetailsResponseType, Error>({
    queryKey: ['articles/details', articleId],
    queryFn: () => getArticleDetailApi(articleId),
  });
  return { articlesDetail, isLoading, isError };
};
