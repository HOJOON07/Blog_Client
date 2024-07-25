import { useQuery } from '@tanstack/react-query';
import { getArticleCommentsApi } from '../api/get-article-comments-api';
import { ArticleCommentsResponseType } from '../model/article-comments-response.type';

export const useGetArticleCommentsQuery = (
  articleId: string,
  enabled: boolean,
) => {
  const {
    data: articlesComments,
    isLoading,
    isError,
    refetch,
  } = useQuery<ArticleCommentsResponseType, Error>({
    queryKey: ['articles/comments', articleId],
    queryFn: () => getArticleCommentsApi(articleId),
    enabled,
  });

  return { articlesComments, isLoading, isError, refetch };
};
